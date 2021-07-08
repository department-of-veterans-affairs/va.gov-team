import boto3, datetime, time, json, os, glob, pandas as pd
from datetime import datetime, timedelta

todaysdate = "5_11_21"
extension = 'csv'
vagovfilename_request = "/Users/niquette/Documents/projects/scripts/%s/request/combined_request_csv.csv" % (todaysdate)
vagovfilename_response = "/Users/niquette/Documents/projects/scripts/%s/response/combined_response_csv.csv" % (todaysdate)
idmefilename_request = "/Users/niquette/Documents/projects/scripts/%s/idme_requests.csv" % (todaysdate)

'''
os.chdir(filenamerequest)
all_filenames1 = [i for i in glob.glob('*.{}'.format(extension))]
#combine all files in the list
combined_csv1 = pd.concat([pd.read_csv(f) for f in all_filenames1 ])
#export to csv
combined_csv1.to_csv( "combined_request_csv.csv", index=False, encoding='utf-8-sig')
df1_request = pd.read_csv("combined_request_csv.csv")



os.chdir(filenameresponse)
all_filenames2 = [i for i in glob.glob('*.{}'.format(extension))]
#combine all files in the list
combined_csv2 = pd.concat([pd.read_csv(f) for f in all_filenames2 ])
#export to csv
combined_csv2.to_csv( "combined_response_csv.csv", index=False, encoding='utf-8-sig')
df1_response = pd.read_csv("combined_response_csv.csv")
'''

''' create pandas dataframe for va.gov requests log '''
vagov1_request = pd.read_csv(vagovfilename_request)
vagov_idmetype_request = vagov1_request.loc[vagov1_request['Type'] == 'idme']

''' create pandas dataframes for req matching resp in va.gov data '''
vagov1_response = pd.read_csv(vagovfilename_response)
va_reqresp_merge = pd.merge(vagov1_request, vagov1_response, how='outer', on=['transaction_id','ID_samlrequestid'], indicator=True)
va_reqresp_leftonly = va_reqresp_merge.loc[va_reqresp_merge['_merge'] == 'left_only']
va_reqresp_leftonly_idme = va_reqresp_leftonly.loc[va_reqresp_leftonly['Type_x'] == 'idme']

''' create pandas dataframe for iam requests log (from ISAM) '''
idme_request = pd.read_csv(idmefilename_request)

''' merge va.gov requests data set with idme_request on transaction_id and ID_samlrequestid, leaves a column called _merge that will contain values left_only, both, and right_only. left_only indicates the left dataframe (va.gov requests) didnt have a match in the right dataframe (IAM requests). Both means found a match in both data sets. right_only means found a request in the IAM requests without a match in the va.gov requests.  '''
va_idme_request_merge = pd.merge(vagov_idmetype_request, idme_request, how='outer', on=['transaction_id','ID_samlrequestid'], indicator=True)

''' create a sub dataframe that contains requests found in va.gov that did not have a match in the IAM requests dataset (left_only) '''
va_idme_request_missing_total = va_idme_request_merge.loc[va_idme_request_merge['_merge'] == 'left_only']

va_idme_request_match_total = va_idme_request_merge.loc[va_idme_request_merge['_merge'] == 'both']

''' missing a response from ID.me from va.gov against ID.me requests - this tells me I didnt get a response from id.me in va.gov logs, but id.me did get the request '''
va_idme_missingresponse_foundin_idme_logs = pd.merge(va_reqresp_leftonly_idme, idme_request, how='outer', on=['transaction_id','ID_samlrequestid'], indicator='exists')
mhm = va_idme_missingresponse_foundin_idme_logs.loc[va_idme_missingresponse_foundin_idme_logs['exists'] == 'left_only']

''' data analysis print statements: '''
print("\nTotal requests matching responses by type in va logs file:\n",va_reqresp_merge['_merge'].value_counts())
print("\nTotal requests missing responses by type in va logs file:\n",va_reqresp_leftonly['Type_x'].value_counts())
#print("\nTotal requests matching responses by type in va logs file:\n",va_req_with_resp_df['Type_x'].value_counts())
#print("\nTotal requests by type from va request matching response, request missing from IAM:\n",va_reqresp_missing_iam_request_df['Type_x'].value_counts())
print("\nTotal requests by Authn in va logs:\n",vagov_idmetype_request['Authn'].value_counts())
print("\nTotal requests by Type in ID.me logs:\n",idme_request['Type'].value_counts())
print("\nTotal requests for VA and ID.me merge:\n",va_idme_request_merge['_merge'].value_counts())
print("\nTotal requests by Type in VA logs missing from ID.me:\n",va_idme_request_missing_total['Type_x'].value_counts())
print("\nTotal requests by Type in VA logs matching with ID.me:\n",va_idme_request_match_total['Type_x'].value_counts())
print("\nTotal requests matching requests from id.me that had a missing response in VA logs:\n",va_idme_missingresponse_foundin_idme_logs['exists'].value_counts())

''' record to file statements '''
#va_idme_request_missing_total.to_csv("%s/va_idme_request_missing_total.csv" % (todaysdate), index=False)
mhm.to_csv("%s/va_idme_request_missing_noresponse.csv" % (todaysdate), index=False)
