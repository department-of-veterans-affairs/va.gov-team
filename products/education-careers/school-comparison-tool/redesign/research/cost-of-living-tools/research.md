## Zillow
https://www.zillow.com/research/data/
https://www.zillow.com/research/methodology-zori-repeat-rent-27092/

> **Zillow Observed Rent Index (ZORI):** A smoothed measure of the typical observed market rate rent across a given region. ZORI is a repeat-rent index that is weighted to the rental housing stock to ensure representativeness across the entire market, not just those homes currently listed for-rent. The index is dollar-denominated by computing the mean of listed rents that fall into the 40th to 60th percentile range for all homes and apartments in a given region, which is once again weighted to reflect the rental housing stock. Details available in [ZORI methodology](https://www.zillow.com/research/methodology-zori-repeat-rent-27092/).

### Pros
- Has rental data by zipcode by month in a CSV file, http://files.zillowstatic.com/research/public_v2/zori/Zip_ZORI_AllHomesPlusMultifamily_SSA.csv

### Cons
- It's from a private company
- no API
- Will need at UI "help" element to link to explainer about ZORI and note data is from Zillow

### Price
Free



## Housing Price Index
https://www.fhfa.gov/
https://www.fhfa.gov/DataTools/Downloads/Pages/House-Price-Index-Datasets.aspx

### Pros
Government Data

### Cons
Index instead of dollar amount

### Price
Free



## Consumer Price Index
https://www.bls.gov/cpi/

### Pros
government data

### Cons 
Index instead of dollar amount

### Price 
Free



## Consumer Price Index
https://www.bls.gov/cpi/

### Pros
government data

### Cons 
Index instead of dollar amount

### Price 
Free



## Numbeo

https://www.numbeo.com/common/api.jsp
https://www.numbeo.com/api/doc.jsp
Looks `GET /api/city_prices` and `GET /api/rankings_by_city_current` returns similar dataset to https://www.numbeo.com/cost-of-living/in/Charleston

### Pros
Provides a variety of values to display in either dollar amounts or indices

### Cons
- Costs money

### Price

https://www.numbeo.com/common/api.jsp



## Notes
Indices are percentage change from an initial measurement which would require finding original value and calculating relevant information.

