DECLARE @startDate varchar(10)
DECLARE @endDate varchar(10)
SET @startDate = '2022-10-01'
SET @endDate = '2022-10-31'

SELECT	FORMAT (a.AppointmentDateTime, 'MM-dd-yy') as AppointmentDate,
		count(*) 'Checkins'		
FROM	CDWWork.Appt.Appointment a
		JOIN CDWWork.SStaff.SStaff sf ON  sf.StaffSID = a.CheckInStaffSID
		JOIN CDWWork.Dim.Location l ON a.LocationSID = l.LocationSID
		JOIN CDWWork.Dim.Sta3n st ON st.Sta3n = a.Sta3n
WHERE	sf.StaffSID IN (SELECT vl.accountSID FROM OIT_CTOHealth.APP.VISTALINK_Accounts vl)
		AND sf.StaffName LIKE 'AVSCONNECTOR%' --Means eCheck-in was used to check-in
		AND sf.StaffSID IN (SELECT vl.accountSID FROM OIT_CTOHealth.App.VISTALINK_Accounts vl) --Means staff ID is in VistA
		AND a.CheckInStaffSID != '-1' --Means they have checked-in
		AND  a.AppointmentDateTime < @endDate
		AND  a.AppointmentDateTime > @startDate
GROUP BY FORMAT (a.AppointmentDateTime, 'MM-dd-yy') 
ORDER BY FORMAT (a.AppointmentDateTime, 'MM-dd-yy')

