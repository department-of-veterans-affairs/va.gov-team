#!/usr/bin/env python3

import boto3, datetime, time, json, os, glob, pandas as pd
from datetime import datetime, timedelta

todaysdate = "4_30_21"
extension = 'csv'
vagovfilename_request = "/Users/niquette/Documents/projects/scripts/%s/request_2021-04-21 14:00:00_2021-04-21 15:00:00.csv" % (todaysdate)
vagovfilename_response = "/Users/niquette/Documents/projects/scripts/4_30_21/response_2021-04-21 14:00:00_2021-04-21 15:00:00.csv"
iamfilename_request = "/Users/niquette/Documents/projects/scripts/%s/19_4_21_2 -3_pm.csv" % (todaysdate)

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

''' create pandas dataframe for va.gov responses log '''
vagov1_response = pd.read_csv(vagovfilename_response)

''' create pandas dataframe for iam requests log (from ISAM) '''
iam_request = pd.read_csv(iamfilename_request)

''' create pandas dataframe for iam responses log (from ISAM) '''
iam_response = pd.read_csv("/Users/niquette/Documents/projects/scripts/IAM_data_review/response/response_iam.csv")

''' merge va.gov requests with va.gov responses on transaction_id and ID_samlrequestid, leaves a column called _merge that will contain values left_only, both, and right_only. left_only indicates the left dataframe (va.gov requests) didnt have a match in the right datafram (va.gov responses). Both means found a match in both data sets. right_only means found a response but no request.'''
va_reqresp_df = pd.merge(vagov1_request, vagov1_response, how='outer', on=['transaction_id','ID_samlrequestid'], indicator=True)

''' create a sub dataframe from the merge of va.gov requests and responses (va_reqresp_df) which only contains requests matched with responses (both in the _merge column) '''
va_req_with_resp_df = va_reqresp_df.loc[va_reqresp_df['_merge'] == 'both']

''' merge the va.gov requests matched with responses dataframe (va_req_with_resp_df) which doesn't contain any requests or responses missing a match, with the IAM requests dataframe on transaction_id and ID_samlrequestid. This will create a dataset that has a column titled "exists" with values of left_only, both, and right_only. left_only means there was no matching request from the "IAM requests" log with the "request and response from va.gov matching" dataset. Both means there was a match, right_only means an IAM request was not found in the va.gov requests log.'''
va_reqresp_merge_iamrequest_df = pd.merge(va_req_with_resp_df, iam_request, how='outer', on=['transaction_id','ID_samlrequestid'], indicator='exists')

''' create a sub data frame that contains requests found in va.gov that macthed with a response but no subsequent request was found in the IAM logs '''
va_reqresp_missing_iam_request_df = va_reqresp_merge_iamrequest_df.loc[va_reqresp_merge_iamrequest_df['exists'] == 'left_only']

''' merge va.gov requests data set with iam_request on transaction_id and ID_samlrequestid, leaves a column called _merge that will contain values left_only, both, and right_only. left_only indicates the left dataframe (va.gov requests) didnt have a match in the right dataframe (IAM requests). Both means found a match in both data sets. right_only means found a request in the IAM requests without a match in the va.gov requests.  '''
va_iam_request_merge = pd.merge(vagov1_request, iam_request, how='outer', on=['transaction_id','ID_samlrequestid'], indicator=True)

''' create a sub dataframe that contains requests found in va.gov that did not have a match in the IAM requests dataset (left_only) '''
va_iam_request_missing_total = va_iam_request_merge.loc[va_iam_request_merge['_merge'] == 'left_only']

''' data analysis print statements: '''
print("\nTotal requests by type in iam request file:\n",iam_request['Type'].value_counts())
print("\nTotal requests matching responses by type in va logs file:\n",va_req_with_resp_df['Type_x'].value_counts())
print("\nTotal requests by type from va request matching response, request missing from IAM:\n",va_reqresp_missing_iam_request_df['Type_x'].value_counts())
print("\nTotal requests by type in va logs:\n",vagov1_request['Type'].value_counts())
print("\nTotal requests by type in va logs missing from iam:\n",va_iam_request_missing_total['Type_x'].value_counts())

''' record to file statements...uncomment to save file(s) '''
#va_reqresp_missing_iam_request_df.to_csv("va_reqresp_missing_iam_request.csv", index=False)
