#!/usr/bin/env python3

import boto3, datetime, time, json, os, glob, pandas as pd
from datetime import datetime, timedelta

va_gov_request_file = "/Users/niquette/Documents/projects/scripts/4_22_21/request/combined_request_csv.csv"
va_gov_response_file = "/Users/niquette/Documents/projects/scripts/4_22_21/response/combined_response_csv.csv"
iam_request_file = "/Users/niquette/Documents/projects/scripts/IAM_data_review/request/request_iam.csv"
iam_response_file = "/Users/niquette/Documents/projects/scripts/IAM_data_review/response/response_iam.csv"
merged_vagov_file = "/Users/niquette/Documents/projects/scripts/4_22_21/merged_req_resp.csv"
todaysdate = "4_28_21"
outputfilename = "iam_vagov_missing_requests_%s.csv" % todaysdate

df_varequest = pd.read_csv(va_gov_request_file)
df_varesponse = pd.read_csv(va_gov_response_file)
df_iamrequest = pd.read_csv(iam_request_file)
df_merged_vagov = pd.read_csv(merged_vagov_file)
df_response = pd.read_csv(iam_response_file)

print("\n*********Stats on vagov merged file:*********\n",df_merged_vagov['_merge'].value_counts(),"\n***************************")
df_va_leftonly = df_merged_vagov.loc[df_merged_vagov['_merge'] == 'left_only']
df_va_both = df_merged_vagov.loc[df_merged_vagov['_merge'] == 'both']
df_va_rightonly = df_merged_vagov.loc[df_merged_vagov['_merge'] == 'right_only']
#    gives us a list of responses from IAM matched up to va requests that didnt have a response in the va.gov logs
df_va_leftonly_iam_response = pd.merge(df_va_leftonly,df_response, how='outer', on=['transaction_id','ID_samlrequestid'], indicator='leftonly_match_iam_response')
print("\n*********Left_only from merged:\n",df_va_leftonly['Type_x'].value_counts(),"\n***************************")
print("\n*********Both from merged:\n",df_va_both['Type_x'].value_counts(),"\n***************************")
print("\n*********Right_only from merged:\n",df_va_rightonly['Type_y'].value_counts(),"\n***************************")
df_vaiam_missingrequests = pd.merge(df_va_leftonly, df_iamrequest, how='outer', on=['transaction_id','ID_samlrequestid'], indicator='missingfromiam_is_leftonly')
#print("\nlist columns:\n",list(df_vaiam_missingrequests.columns),"\n")
df_iam_va_finalresults = df_vaiam_missingrequests.loc[df_vaiam_missingrequests['missingfromiam_is_leftonly'] == 'left_only']
print("\n*********Final counts of missing requests between iam and vagov:*********\n",df_iam_va_finalresults['Type_x'].value_counts(),"\n***************************")
df_iam_va_ip_results = df_vaiam_missingrequests['IP_x'].value_counts()
print("\n\n*********IP stats of missing requests from IAM where VA.gov is missing a response:*********\n",df_iam_va_ip_results.head(20),"\n***************************")
print("\n*********IAM Responses matching to requests missing a response at vagov:*********\n",df_va_leftonly_iam_response['leftonly_match_iam_response'].value_counts(),"\n***************************")
print("\n*********IAM Responses matching to requests missing a response at vagov____By Type___:*********\n",df_va_leftonly_iam_response['Type_x'].value_counts(),"\n***************************")
# merge on va and iam requests:
df_va_iam_request_merge = pd.merge(df_varequest, df_iamrequest, how='outer', on=['transaction_id','ID_samlrequestid'], indicator=True)
#print("\nlist columns:\n",list(df_va_iam_request_merge.columns),"\n")
print("\n*********va and iam request merge counts:*********\n",df_va_iam_request_merge['_merge'].value_counts())
#print(df_va_iam_request_merge['_merge'].value_counts())

df_trevorsquestion = pd.merge(df_va_both, df_iamrequest, how='outer', on=['transaction_id','ID_samlrequestid'], indicator='Trevors_column')
df_something = df_trevorsquestion.loc[df_trevorsquestion['Trevors_column'] == 'left_only']
df_some_ip = df_something['transaction_id'].value_counts()
print("\n\n*****",df_some_ip.head(10))
print("\n*********va request has response and matches iam requests:*********\n",df_trevorsquestion['Trevors_column'].value_counts())
df_something.to_csv("va_reqresp_missing_request_in_IAM.csv", index = False)

#printing csvs
#df_iam_va_finalresults.to_csv(outputfilename, index = False)
