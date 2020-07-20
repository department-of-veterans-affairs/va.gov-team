"""Script for generating VA.gov COVID-19 screening tool QR codes."""

import json
from qrcodegen import QrCode
from cairosvg import svg2png

BASE = 'https://www.va.gov/covid19screen/'
PATH_TO_CUSTOM_COLLATERAL = f'../custom-collateral/'
with open('site_list.json', 'r') as infile:
    SITE_LIST = json.loads(infile.read())

for group in SITE_LIST:
    group_id = group['group']
    for site in group['site_ids']:
        qr = QrCode.encode_text(f'{BASE}{site}', QrCode.Ecc.MEDIUM)
        svg = qr.to_svg_str(4)
        path = f'{PATH_TO_CUSTOM_COLLATERAL}{group_id}/qr_code_for_{site}.png'
        print(f'Writing to {path}...')
        svg2png(bytestring=svg, scale=100, write_to=path)
