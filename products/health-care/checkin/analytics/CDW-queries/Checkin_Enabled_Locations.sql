/*
	Returns all locations that are enabled for eCheck-in or Pre-Check-in
*/

select  Sta3n, LocationName, LocationAbbreviation, LocationType, ECheckinAllowedFlag, PreCheckinAllowedFlag
from	CDWWork.dim.location
where	isnull(ECheckinAllowedFlag, '') = 'Y' or isnull(PreCheckinAllowedFlag, '') = 'Y'
Order by Sta3n, LocationName