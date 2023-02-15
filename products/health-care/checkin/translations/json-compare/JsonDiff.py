"""
Compares 2 json files and finds all keys that are present in the first file but not in the second file
   First dialog box asks for the base file that contains all of the necessary keys
   Second dialog box asks for the comparison file that is searched for missing keys
   Input box asks for the name of your output file (extension is optional)
"""

import json
import re
import easygui
from easygui import *
from deepdiff import DeepDiff
from pathlib import Path

enc = 'utf-8'
base_json = ''
compare_json = ''

# GET THE BASE FILE
base_path = easygui.fileopenbox()
compare_path = easygui.fileopenbox()

# WHAT DO YOU WANT TO CALL THE FILE
output_file_name = enterbox("Enter your output filename", "Output Filename", "")
if (len(output_file_name.split('.')) == 1):
    output_file_name = output_file_name + '.json'

# LOAD THE ENGLISH FILE TO USE AS THE BASELINE FOR KEYS
with open(base_path, 'r', encoding=enc) as base_file:
    base_json = json.load(base_file)

# LOAD THE SECONDARY LANGUAGE TO LOOK FOR MISSING KEYS
with open(compare_path, 'r', encoding=enc) as compare_file:
    compare_json = json.load(compare_file)

# DO A DIFF
diff_result = DeepDiff(base_json, compare_json)

# CREATE JSON OBJECT FOR MISSING KEYS & THEIR ENGLISH VALUES
missing_keys = diff_result['dictionary_item_removed']
missing_key_values = {}
for i in missing_keys:
    key = (re.search('root\[\'(.*)\'\]', i)).group(1)
    missing_key_values[key] = base_json[key]

# SAVE MISSING KEYS & THEIR ENGLISH VALUE TO THE SPECIFIED FILE
output_file = Path(output_file_name)
output_file.touch(exist_ok=True)
with open(output_file, 'w') as output_file:
    json.dump(missing_key_values, output_file, indent=4)



