/*
 QUESTIONS TO ANSWER:
    How many Veterans only use Mobile Check-in once even though they have had appointments where they could use it?
    How many Veterans use Mobile Check-in more than once? And how many times?
*/

DECLARE @startDate varchar(10)
DECLARE @endDate varchar(10)
SET @startDate = '2022-06-01'
SET @endDate = '2022-06-30'

-- Get exclude stop codes list
declare @invalidStopCodes table (stopeCodeSID int, stopCode int, Sta3n int)
INSERT INTO @invalidStopCodes SELECT stpc.StopCodeSID, stpc.StopCode, stpc.Sta3n FROM CDWWork.Dim.StopCode stpc
WHERE stpc.StopCode IN
-- Exclude telehealth, emergency department, and other non-relevant clinic types. Sourced from S. Adams. 
        (
            '147', '428', '695', '803', '325', '136', '708', '686', '148', '324', '546', '679', '536', '182', '199', '440', '685', '611', '424', '584', '801', '178', '131', '692', '579', '441', '597', '647', '189', '901', '491', '545', '445', '802', '527', '724', '528', '216', '338', '684', '542', '371', '221', '229', '696', '530', '111', '645', '699', '326', '224', '425', '648', '130', '683', '137', '179', '693', '225', '169', '181', '447', '103'
     )

--GET ALL APPOINTMENT FOR THE DATE RANGE
DECLARE @allAppointments TABLE (
	Sta3n smallint,
	AppointmentIEN varchar(50),
    AppointmentDateTime datetime2,
	PatientSID int
)
INSERT INTO @allAppointments 
SELECT	a.Sta3n,
		a.AppointmentIEN,
		a.AppointmentDateTime,
		a.PatientSID
FROM	CDWWork.Appt.Appointment a
		JOIN CDWWork.Dim.Location l on l.LocationSID = a.LocationSID
		JOIN CDWWork.Dim.Division div on l.DivisionSID = div.DivisionSID
		JOIN CDWWork.Dim.Sta3n st on st.Sta3n = a.Sta3n
WHERE -- Set period start datetime.
		a.AppointmentDateTime > @startDate
		-- Set period end datetime.
		AND AppointmentDateTime < @endDate
		-- Exclude clinics with primary stop codes on exclusion list.
		AND l.PrimaryStopCodeSID NOT IN (SELECT xstpc.stopeCodeSID FROM @invalidStopCodes xstpc)
		-- Exclude clinics with secondary stop codes on exclusion list.
		AND l.SecondaryStopCodeSID NOT IN (SELECT xstpc.stopeCodeSID FROM @invalidStopCodes xstpc)
		-- Exclude appointments that do not have a value for check in staff (proxy for "not checked in")
		AND a.CheckInStaffSID != '-1'
		-- Exclude non-count clinics (e.g., non-workload or management only clinics)
		AND l.NoncountClinicFlag != 'Y'
		-- Exclude Cerner EHR sites that do not use PCI.
		AND l.Sta3n NOT IN ('668', '687', '757', '653', '692') 

--COUNT APPOINTMENTS PER PATIENT
DECLARE @apptCounts TABLE (PatientSID int, NumberAppts int)
INSERT INTO @apptCounts
SELECT	aa.PatientSID,
		count(*) NumberAppts
FROM	@allAppointments aa
GROUP BY aa.PatientSID

--COUNT eCHECK-INS PER PATIENT
DECLARE @checkinsPerPatient TABLE (PatientSID int, NumberECheckins int)
INSERT INTO @checkinsPerPatient 
	SELECT	aa.PatientSID,
			count(*) NumberECheckins
	FROM	@allAppointments aa
			JOIN OIT_CTOHealth.App.PCI_Appointment_Summaries asum 
				on aa.AppointmentIEN = asum.appointment_ien AND aa.Sta3n = LEFT(asum.station_number, 3)
	GROUP BY aa.PatientSID

--NumberPatientsWithMoreThan1eCheckin 
SELECT	count(distinct PatientSID) NumberPatientsWithMoreThan1eCheckin
FROM	@checkinsPerPatient 
WHERE	NumberECheckins > 1

--NumberPatientsWith1eCheckin
SELECT	count(distinct PatientSID) NumberPatientsWith1eCheckin
FROM	@checkinsPerPatient 
WHERE	NumberECheckins = 1


/*
	NUMBER OF PATIENTS WHO USED eCHECK-INS
			> Once		Once
	OCT		3237		14965
	SEP		3016		14147
	AUG		4175		15596
	JUL		4198		16034
	JUN		4901		18273
*/