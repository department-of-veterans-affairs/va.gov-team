#!/bin/bash

# APIGW_BASE for VA Clipboard is: https://vagovtest.mapsandbox.net
usage()
{
echo "Usage:$0 <apigateway-base>"

    echo "Ex: create-questionnaire.sh https://vagovtest.mapsandbox.net"
    echo ""
    echo "##############################################################################################"
    echo "Script requires API Gateway base path and Questionnaire file."
    echo "##############################################################################################"
}

if [[ $# -lt 1 ]]; then
   usage
   exit 1
fi

APIGW_BASE=$1
PGD_FHIR_URL=${APIGW_BASE}/smart-pgd-fhir/v1

printf "\nPGD FHIR URL: ${PGD_FHIR_URL}\n"

read -p "Admin userid: " USER
read -s -p "Admin password: " PASSWORD

printf "\nGenerating Admin JWT\n"
printf "===========================================\n"

JWT=$(curl --insecure -s -u ${USER}:${PASSWORD} --header "Content-Type: application/json" "${APIGW_BASE}/admin/v2/jwt/system/healthchecks" | jq ".jwt" | tr -d '"') 
# JWT=""

echo $JWT

# GOOD URLs  Uncomment to run specific queries
# GET all Questionnairs in PGD
curl --header "X-VAMF-JWT: $JWT" --header "Accept: application/json+fhir" "${PGD_FHIR_URL}/Questionnaire"
# curl -v --header "X-VAMF-JWT: $JWT" --header "Accept: application/json+fhir" "${PGD_FHIR_URL}/QuestionnaireResponse/8d3bde38-02a8-40d2-be52-08414d77c21c"

# GET a speficic Questionnaire with _id param or use id in url
# curl --header "X-VAMF-JWT: $JWT" --header "Accept: application/json+fhir" "${PGD_FHIR_URL}/Questionnaire?_id=67dfaa46-4c0f-481f-8b8e-bb8681d73119"
# curl --header "X-VAMF-JWT: $JWT" --header "Accept: application/json+fhir" "${PGD_FHIR_URL}/Questionnaire/67dfaa46-4c0f-481f-8b8e-bb8681d73119"

# GET all Questionnaires by publisher and ID
# curl --header "X-VAMF-JWT: $JWT" --header "Accept: application/json+fhir" "${PGD_FHIR_URL}/Questionnaire?publisher=clipboard.gov.va"
# curl --header "X-VAMF-JWT: $JWT" --header "Accept: application/json+fhir" "${PGD_FHIR_URL}/Questionnaire?publisher=clipboard.gov.va&_id=67dfaa46-4c0f-481f-8b8e-bb8681d73119"


# Additional DSTU2 FHIR Questionnaire Search info: https://www.hl7.org/fhir/DSTU2/questionnaire.html#search
# DSTU2 FHIR Search info: https://www.hl7.org/fhir/DSTU2/search.html

# Get all Patients
# curl --header "X-VAMF-JWT: $JWT" --header "Accept: application/json" "${PGD_FHIR_URL}/Patient"
#GET Specific Patient by ICN
# curl --header "X-VAMF-JWT: $JWT" --header "Accept: application/json" "${PGD_FHIR_URL}/Patient/1012845331V153043"
