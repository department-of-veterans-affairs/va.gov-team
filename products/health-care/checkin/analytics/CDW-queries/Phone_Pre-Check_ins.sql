DECLARE @startDate varchar(10)
DECLARE @endDate varchar(10)
SET @startDate = '2022-09-25'
SET @endDate = '2022-10-25'

-- Get phone stop codes list
declare @phoneStopCodes table (stopeCodeSID int, stopCode int, Sta3n int)
INSERT INTO @phoneStopCodes SELECT stpc.StopCodeSID, stpc.StopCode, stpc.Sta3n FROM CDWWork.Dim.StopCode stpc
WHERE stpc.StopCode IN
-- Exclude telehealth, emergency department, and other non-relevant clinic types. Sourced from S. Adams. 
        (
			  '103', '147', '148', '169',
			  '178', '181', '182', '199',
			  '216', '221', '224', '229',
			  '324', '325', '326', '338',
			  '424', '425', '428', '441',
			  '527', '528', '530', '536',
			  '542', '545', '546', '579',
			  '584', '597', '611', '683',
			  '685', '686', '718', '901',
			  '136', '137', '179', '371',
			  '440', '444', '445', '446',
			  '447', '490', '491', '644',
			  '645', '646', '647', '648',
			  '679', '684', '690', '692',
			  '693', '699', '674', '685'
     )


--GET ALL PHONE APPOINTMENTS
DECLARE @phoneAppointments TABLE (AppointmentIEN numeric(18,0), Sta3n varchar(50), AppointmentDate date)
INSERT INTO @phoneAppointments
	SELECT	a.AppointmentIEN,
			st.Sta3n,			
			FORMAT (a.AppointmentDateTime, 'MM-dd-yy') 'AppointmentDate'
	FROM	CDWWork.Appt.Appointment a
			JOIN CDWWork.SStaff.SStaff sf ON  sf.StaffSID = a.CheckInStaffSID
			JOIN CDWWork.Dim.Location l ON a.LocationSID = l.LocationSID
			JOIN CDWWork.Dim.Sta3n st ON st.Sta3n = a.Sta3n		
	WHERE	--sf.StaffSID IN (SELECT vl.accountSID FROM OIT_CTOHealth.APP.VISTALINK_Accounts vl)
			--AND sf.StaffName LIKE 'AVSCONNECTOR%' --Means eCheck-in was used to check-in
			--AND a.CheckInStaffSID != '-1' --Means they have checked-in
			a.AppointmentDateTime < @endDate   
			AND  a.AppointmentDateTime > @startDate
			AND -- Include only clinics that have a phone stop code
				(l.PrimaryStopCodeSID IN (SELECT xstpc.stopeCodeSID FROM @phoneStopCodes xstpc)
					OR
			 	 l.SecondaryStopCodeSID IN (SELECT xstpc.stopeCodeSID FROM @phoneStopCodes xstpc))   
			AND l.NoncountClinicFlag != 'Y' -- Exclude non-count clinics (e.g., non-workload or management only clinics)
			AND l.Sta3n NOT IN ('668', '687', '757', '653', '692') -- Exclude Cerner EHR sites that do not use PCI.

--GET ALL PHONE APPOINTMENTS COUNT
DECLARE @phoneAppointmentCounts TABLE (appointmentDate varchar(10), phoneApptCount int)
INSERT INTO @phoneAppointmentCounts
	SELECT	AppointmentDate,
			count(*) 
	FROM	@phoneAppointments
	GROUP BY AppointmentDate

-- GET PRE-CHECK-IN COUNTS FOR PHONE APPOINTMENTS
DECLARE @phonePreCheckinCounts TABLE (appointmentDate varchar(10), phonePreCheckInCount int)
INSERT INTO @phonePreCheckinCounts 
	SELECT	pa.AppointmentDate,
			count(*)
	FROM	@phoneAppointments pa
			JOIN OIT_CTOHealth.App.PCI_Appointment_Summaries asum 
				on pa.AppointmentIEN = asum.appointment_ien AND pa.Sta3n = LEFT(asum.station_number, 3)
	GROUP BY pa.AppointmentDate

-- SUMMARIZE DATA
SELECT  pac.appointmentDate,
		pac.phoneApptCount,
		pcic.phonePreCheckInCount
FROM	@phoneAppointmentCounts pac
		JOIN @phonePreCheckinCounts pcic on pac.appointmentDate = pcic.appointmentDate
ORDER BY pac.appointmentDate

