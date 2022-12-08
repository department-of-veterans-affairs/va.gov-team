DECLARE @startDate varchar(10)
DECLARE @endDate varchar(10)
SET @startDate = '2022-10-01'
SET @endDate = '2022-10-31'

-- PATIENT APPOINTMENTS WITHIN A HALF HOUR OF ANOTHEROF THE PATIENT'S APPOINTMENTS (EXCLUDES 0-5 MINUTES)
-- 680985
SELECT	count(distinct a1.AppointmentSID) as AppointmentsWithinHalfHour
FROM	CDWWork.Appt.Appointment a1
		JOIN CDWWork.Dim.Location l ON a1.LocationSID = l.LocationSID
WHERE	a1.AppointmentDateTime < @endDate   
		AND a1.AppointmentDateTime > @startDate
		AND l.NoncountClinicFlag != 'Y' -- Exclude non-count clinics (e.g., non-workload or management only clinics)
		AND l.Sta3n NOT IN ('668', '687', '757', '653', '692') -- Exclude Cerner EHR sites that do not use PCI.
		AND a1.PatientSID in (
			SELECT	PatientSID
			FROM	CDWWork.Appt.Appointment a2
			WHERE	a2.AppointmentDateTime < @endDate 
					AND a2.AppointmentDateTime > @startDate
					AND a1.PatientSID = a2.PatientSID 
					AND ABS(DATEDIFF(minute, a1.AppointmentDateTime, a2.AppointmentDateTime)) BETWEEN 6 AND 30					
		)

--ALL APPOINTMENTS
--6686143  
SELECT	count(distinct a1.AppointmentSID) AllAppointments
FROM	CDWWork.Appt.Appointment a1
		JOIN CDWWork.Dim.Location l ON a1.LocationSID = l.LocationSID
WHERE	a1.AppointmentDateTime < @endDate   
		AND  a1.AppointmentDateTime > @startDate
		AND l.NoncountClinicFlag != 'Y' -- Exclude non-count clinics (e.g., non-workload or management only clinics)
		AND l.Sta3n NOT IN ('668', '687', '757', '653', '692') -- Exclude Cerner EHR sites that do not use PCI.





		







    




