#!/usr/bin/env python3

import boto3, datetime, time, pandas as pd, json
from datetime import datetime, timedelta

client = boto3.client('logs')
APP_LOG = 'dsva-vagov-prod/srv/vets-api/src/log/vets-api-server.log'
foldername = "4_22_21"
start=1618923600 #0900
end=1618927200 #1000
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
dfut.to_csv("%s/samlrequestid_validateonetoone_identity_start-%s_end-%sreq_resp.csv" % (foldername,startfn,endfn),index=False)
print(dfut.query('_merge != "both"'))
