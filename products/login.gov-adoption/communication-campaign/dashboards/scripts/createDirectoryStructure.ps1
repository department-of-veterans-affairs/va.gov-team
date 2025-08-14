$baseFolder = $env:DOMO_WB_BASEPATH
"base: $baseFolder"

if (!(Test-Path $baseFolder)) {
  "baseFolder $baeFolder not exist"
#   New-Item -Path $logFile -ItemType File
}

"create directories..."

# Create an array of directories we will need
$directories = 
  "logs",
  "extracted\AuthDB Data",
  "extracted\IAM SSOe Data\IDme_Users_By_CSPMethod_And_SECID",
  "extracted\IAM SSOe Data\List_of_Distinct_Users_by_CSP_Monthly_secid",
  "extracted\IAM SSOe Data\List_of_Distinct_Users_by_CSP_Weekly_secid",
  "extracted\IAM SSOe Data\Distinct_Users_by_CSP_and_App",
  "extracted\IAM SSOe Data\Distinct_Users_by_CSP",
  "extracted\IAM SSOe Data\Distinct_Users_by_CSP_Weekly",
  "extracted\IAM SSOe Data\Distinct_Users",
  "extracted\MHV Data\mhvAccounts",
  "extracted\MHV Data\mhvCredAuthns",
  "extracted\IAM MPI Data",
  "extracted\CDW Data",
  "extracted\Domo Data\MHV Users with Modern Creds",
  "extracted\VA.gov Data\Mobile Users"

foreach ($dir in $directories) {
  "creating $baseFolder\$dir"
  New-Item -Path "$baseFolder\$dir" -ItemType Directory -Force
}



