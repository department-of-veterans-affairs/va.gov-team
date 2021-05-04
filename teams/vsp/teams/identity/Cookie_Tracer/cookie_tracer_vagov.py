#!/usr/bin/env python3

import boto3, datetime, time, pandas as pd, json
from datetime import datetime, timedelta

'''
What does this script do:
    TLDR: This script will create a csv file of va.gov SSOe saml requests matched up with saml responses. If a request couldn't be matched with a response, the column titled "_merge" will be filled with the term "left_only." Left_only is the list of requests va.gov is most interested in because this means a user initiated the login flow but was not able to complete it. Note: it is possible a user could click on the sign-in button and not complete the login process themselves because perhaps they forgot their password, or decided to go do something else on their computer rather than complete the login process with va.gov. 

    More detail: The file will contain a column called "_merge" that will have one of three values. Left_only, both, and right_only. Left_only means a saml request was not able to be matched up with a repsonse based on the transaction_id and saml_request_id from the 'vagov_saml_request_prod' cookie. Both means a saml request and saml response matched on transaction_id and saml_request_id from the 'vagov_saml_request_prod' cookie. Right_only means a saml response was logged, but a request was not able to be matched up with a request based on the transaction_id and saml_request_id from the 'vagov_saml_request_prod' cookie. The entries which contain "both" in the "_merge" column are the most ideal outcome, it indicates a user was able to complete the login process. Left_only can contain some false positives, but its the set of data that requires attention to ensure any issues that could be causing the user not be able to finish the login process is resolved.

Usuage:
It is recommended to create a python virtualenv and get that environment setup to run these commands. [aws-vault](https://github.com/99designs/aws-vault) is highly recommended to setup an AWS session with mfa to then be able to run the python files without any reauthentication being required. Substitute foldername with the directory you want the resulting csv to be written to, and change the start and end variables to be epochs of the start and end datetime you would like the logs from. It is not recommended to attempt to grab more than two hours of data at a time as this normally results in either exceeding the 10k result limit or a timeout which occurs after 15 minutes of the query running. Example setup for mac iterm running zsh:
    cd /yourscriptdirectory/
    virtualenv venv
    source venv/bin/activate
    python3 cookie_tracer_vagov.py
'''

client = boto3.client('logs')
APP_LOG = 'dsva-vagov-prod/srv/vets-api/src/log/vets-api-server.log'
foldername = "4_22_21" #directory of where you want the resulting csv to be written
start=1618923600 #0900 epoch datetime, reference: https://www.epochconverter.com/
end=1618927200 #1000 epoch datetime
response = None
row1=[]
row2=[]
df1_request = pd.DataFrame(row1,columns=["@timestamp", "@message", "SSOe_reqresp", "Path", "IP", "transaction_id", "RequestID", "ID_samlrequestid", "Authn", "loginstatus", "Type", "@ptr"])
df1_response = pd.DataFrame(row2,columns=["@timestamp", "@message", "SSOe_reqresp", "Path", "IP", "transaction_id", "RequestID", "ID_samlrequestid", "Authn", "loginstatus", "Type", "@ptr"])

logquery = "fields @timestamp, @message | sort @timestamp desc | filter @message like \"transaction_id\" | parse @message \"SSOe: * =>\" as SSOe_reqresp | parse @message '\"path\":\"*\"' as Path |parse @message '\"remote_ip\":\"*\"' as IP | parse @message '\\\"transaction_id\\\"=>\\\"*\\\"}\"}' as transaction_id | parse @message '\"patientIcn\":\"*\"' as patientICN | parse @message '\"request_id\":\"*\"' as RequestID | parse @message '\"uuid\":\"*\"' as UUID | parse @message '\"icn\\\"=>\\\"*\\\"' as ICN | parse @message '\"id\\\"=>\\\"*\\\"' as ID_samlrequestid | parse @message '\"authn\\\"=>\\\"*\\\"' as Authn | parse @message '\"message\":*,' as loginstatus | parse @message '\"type\\\"=>\\\"*\\\"' as Type | filter transaction_id not like 'nil' OR Authn not like 'nil' OR Type not like 'nil' | filter Type not like 'signup' AND Type not like 'custom' AND Type not like 'mfa' AND Type not like 'verify' | filter @message like \"SAML Response\" OR @message like \"SAML Request\" | filter ispresent(SSOe_reqresp) AND ispresent(transaction_id) AND ispresent(Authn) AND ispresent(Type) | limit 10000"

start_query_response = client.start_query(
    logGroupName=APP_LOG,
    startTime=int(start),
    endTime=int(end),
    queryString=logquery,
)

query_id = start_query_response['queryId']

while response == None or response['status'] == 'Running':
    print('Waiting for query to complete ...')
    print( "query_id is", query_id)
    time.sleep(2)
    response = client.get_query_results(
        queryId=query_id)

aws_results = client.get_query_results(queryId=query_id)

for a in aws_results['results']:
    row = []
    isrequest = False
    isresponse = False
    ismessedup = False
    for b in a:
        row.append(b['value'])
        if b['value'] == "SAML Request":
            isrequest = True
        elif b['value'] == "SAML Response":
            isresponse = True
    if isrequest == True:
        df1_length = len(df1_request)
        #print("\n\n df1 length: ",df1_length," || df1_request length: ",len(df1_request),"\n Row: ",row)
        df1_request.loc[df1_length] = row
    elif isresponse == True:
        df2_length = len(df1_response)
        #print("\n\n df2 length: ",df2_length," || df1_response length: ",len(df1_response),"\n Row: ",row)
        df1_response.loc[df2_length] = row
    else:
        ismessedup = True
        print("\n\n ..error processing isrequest boolean....",row,"\n\n")

dfut = pd.merge(df1_request, df1_response, how='outer', on=['ID_samlrequestid', 'transaction_id'], indicator=True)
print(dfut.head())
datename = str(datetime.today())
startfn = str(datetime.fromtimestamp(start))
endfn = str(datetime.fromtimestamp(end))
dfut.to_csv("%s/va_saml_reqresp_start-%s_end-%sreq_resp.csv" % (foldername,startfn,endfn),index=False)
print(dfut.query('_merge != "both"'))
