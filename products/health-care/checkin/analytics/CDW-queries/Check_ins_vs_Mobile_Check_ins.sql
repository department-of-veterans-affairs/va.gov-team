DECLARE @startDate varchar(10)
DECLARE @endDate varchar(10)
SET @startDate = '2022-09-25'
SET @endDate = '2022-10-25'

-- Get exclude stop codes list
declare @invalidStopCodes table (stopeCodeSID int, stopCode int, Sta3n int)
INSERT INTO @invalidStopCodes SELECT stpc.StopCodeSID, stpc.StopCode, stpc.Sta3n FROM CDWWork.Dim.StopCode stpc
WHERE stpc.StopCode IN
-- Exclude telehealth, emergency department, and other non-relevant clinic types. Sourced from S. Adams. 
        (
            '147', '428', '695', '803', '325', '136', '708', '686', '148', '324', '546', '679', '536', '182', '199', '440', '685', '611', '424', '584', '801', '178', '131', '692', '579', '441', '597', '647', '189', '901', '491', '545', '445', '802', '527', '724', '528', '216', '338', '684', '542', '371', '221', '229', '696', '530', '111', '645', '699', '326', '224', '425', '648', '130', '683', '137', '179', '693', '225', '169', '181', '447', '103'
     )

-- Get all relevant appointments
declare @allAppointmentData table (
    Sta3n smallint,
    AppointmentSID bigint,
    AppointmentDateTime datetime2,
    Sta6n varchar(50),
    Sta3nName varchar(200),
    VISNFY17 smallint,
    CheckInStaffSID int,
    PrimaryStopCodeSID int, 
    SecondaryStopCodeSID int,
    LocationSID int,
    id varchar(200),
    appointmentDate varchar(200)
)
INSERT INTO @allAppointmentData SELECT 
    a.Sta3n,
    a.AppointmentSID,
    a.AppointmentDateTime,
    div.Sta6a,
    st.Sta3nName,
    st.VISNFY17,
    a.CheckInStaffSID,
    l.PrimaryStopCodeSID,
    l.SecondaryStopCodeSID,
    l.LocationSID,
    CONVERT(varchar(200), st.VISNFY17) + CONVERT(varchar(200), st.Sta3n) + CONVERT(varchar(200), a.AppointmentDateTime, 110),
    CONVERT(varchar(200), a.AppointmentDateTime, 110)
FROM 
    CDWWork.Appt.Appointment a
JOIN 
    CDWWork.Dim.Location l on l.LocationSID = a.LocationSID
JOIN 
    CDWWork.Dim.Division div on l.DivisionSID = div.DivisionSID
JOIN
    CDWWork.Dim.Sta3n st on st.Sta3n = a.Sta3n
WHERE 
    -- Set period start datetime.
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
    -- Filter for particular VISN.
    -- AND st.VISNFY17 in ('8', '7', '16', '17', '22', '21', '19', '15', '23', '12', '10', '9', '6', '5', '4', '2')
    -- Filter by particular station
    -- AND st.Sta3n = '558'

-- Group appointments by Sta3n
declare @allAppointmentCounts table (
        Sta3n smallint, 
        appointmentCount int, 
        appointmentDate varchar(200),
        VISNFY17 smallint,
        id varchar(200)
    )
INSERT INTO 
    @allAppointmentCounts
SELECT 
    allappts.Sta3n,
    COUNT(DISTINCT allappts.AppointmentSID) appointmentCount, 
    allappts.appointmentDate,
    allappts.VISNFY17,
    allappts.id
FROM 
    @allAppointmentData allappts
GROUP BY allappts.Sta3n,  allappts.appointmentDate, allappts.VISNFY17, allappts.id


-- Get mobile appointments by Sta3n
declare @mobileCheckInCounts table (
        Sta3n smallint, 
        mobileCheckInCount int,
        appointmentDate varchar(200),
        VISNFY17 smallint,
        id varchar(200)
)
INSERT INTO 
    @mobileCheckInCounts 
SELECT 
    allappts.Sta3n, 
    COUNT(DISTINCT allappts.AppointmentSID) checkInCount,
    allappts.appointmentDate,
    allappts.VISNFY17,
    allappts.id
FROM 
    @allAppointmentData allappts
JOIN 
    OIT_CTOHealth.App.VISTALINK_Accounts vl on vl.accountSID = allappts.CheckInStaffSID
GROUP BY
    allappts.Sta3n,  allappts.appointmentDate, allappts.VISNFY17, allappts.id

-- Summarize data
SELECT 
    aapc.appointmentDate 'Appt Date',
    aapc.VISNFY17,
    aapc.Sta3n,
    ISNULL(aapc.appointmentCount, 0) 'Total Check-ins', 
    ISNULL(mcic.mobileCheckInCount, 0) 'Mobile Check-ins',
	CAST((CAST(ISNULL(mcic.mobileCheckInCount, 0) as float) / CAST(ISNULL(aapc.appointmentCount, 0) as float)) * 100 as decimal(6, 3)) 'Percentage'
FROM
    @allAppointmentCounts aapc
LEFT JOIN
    @mobileCheckInCounts mcic ON mcic.id = aapc.id
ORDER BY aapc.VISNFY17, aapc.appointmentDate desc


/*
To call the stored proc

exec OIT_CTOHealth.App.GetMobileCheckinPercentage @startDate = '2022-09-25', @endDate = '2022-10-25'
/*

