#!/usr/bin/env python3

import boto3, datetime, time, json, os, glob, pandas as pd
from datetime import datetime, timedelta

# Be mindful not to run the combine or write to csvs multiple times without deleting previously created versions of the files produced here as it will just concat the files rather than replace them.

todaysdate = "4_22_21"
extension = 'csv'
filenamerequest = "/Users/niquette/Documents/projects/scripts/%s/request/" % (todaysdate)
filenameresponse = "/Users/niquette/Documents/projects/scripts/%s/response/" % (todaysdate)
combinefilename = "/Users/niquette/Documents/projects/scripts/%s/" % (todaysdate)

# Used to combine files in a directory
# Combine Request files
os.chdir(filenamerequest)
all_filenames1 = [i for i in glob.glob('*.{}'.format(extension))]
#combine all files in the list
combined_csv1 = pd.concat([pd.read_csv(f) for f in all_filenames1 ])
#export to csv
combined_csv1.to_csv( "combined_request_csv.csv", index=False, encoding='utf-8-sig')
df1_request = pd.read_csv("combined_request_csv.csv")

# Combine Response files
os.chdir(filenameresponse)
all_filenames2 = [i for i in glob.glob('*.{}'.format(extension))]
#combine all files in the list
combined_csv2 = pd.concat([pd.read_csv(f) for f in all_filenames2 ])
#export to csv
combined_csv2.to_csv( "combined_response_csv.csv", index=False, encoding='utf-8-sig')
df1_response = pd.read_csv("combined_response_csv.csv")


vagov1_request = pd.read_csv("%scombined_request_csv.csv" % filenamerequest)
vagov1_response = pd.read_csv("%scombined_response_csv.csv" % filenameresponse)
iam_request = pd.read_csv("/Users/niquette/Documents/projects/scripts/IAM_data_review/request/request_iam.csv")
iam_response = pd.read_csv("/Users/niquette/Documents/projects/scripts/IAM_data_review/response/response_iam.csv")

iamva_request_df = pd.merge(vagov1_request, iam_request, how='outer', on=['transaction_id','ID_samlrequestid'], indicator=True)
iamva_response_df = pd.merge(vagov1_response, iam_response, how='outer', on=['transaction_id','ID_samlrequestid'], indicator=True)

vagovut = pd.merge(vagov1_request, vagov1_response, how='outer', on=['transaction_id','ID_samlrequestid'], indicator=True)
print(vagovut.head())

iamva_request_df.to_csv("iam_va_requests_merged.csv",index=False)
iamva_response_df.to_csv("iam_va_response_merged.csv",index=False)

#os.chdir(combinefilename)
vagovut.to_csv("%s/merged_req_resp.csv" % todaysdate,index=False)
#print(vagovut.query('_merge != "both"'))
