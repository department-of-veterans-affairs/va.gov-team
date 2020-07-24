# **VSP Product Brief Template**

### What is it?

External Service SLOs benefit VFS teams and leadership by exposing trends (both success and failure) in our external partners performance so that we can better understand down stream effects to the applications on Va.gov and help the leadership team faciliate conversations with those partners to improve their availability in the future.

### How does it work?

Each service has its own definition document that can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/external-service-monitoring/service-documents).

Each week a member of the BE Tools (VSP) will generate the reports through a semi automated fashion and report those out through a combination of slack channels, email list serves, and store them in a centralized place for reference later if desired.

This process of storing is done due to the fact that our data storage is limited to 14 days.

At any time, anyone can use Grafana (links provided in each service definition document) to view the current status of each of the services.

------

### Product documentation

[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/external-service-monitoring/product-documents/product-outline.md)

------

### Point of contact

Engineer: Keifer Furzland
Team: BE Tools
PM: Alex Pappas

------

### Examples or references of usage

All historical run reports can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/external-service-monitoring/historical-reports)

[Inidividaul report for EVSS - realtime](http://grafana.vfs.va.gov/d/pEgVdRlZk/external-service-performance-indicators?orgId=1&var-backend=evss_back) - SOCKS Required to view this report
------

### Version Notes

This is the first iteration of this product.  The visualization utilizes Grafana and the reports are generated and shared out manually by a member of the the BE Tools team.

Future improvements are dependant on potential new tools on the platform (DataDog, BigQuery, Domo as potentially adding automation on reporting).  Additionally, expanding these metrics into product level data from va.gov.
------
