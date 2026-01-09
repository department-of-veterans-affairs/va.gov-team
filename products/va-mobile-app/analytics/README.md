# Monthly Mobile Metrics

- [February 2025 (2/1-2/28)](#februrary-2025)
- [March 2025 (3/1-3/31)](#march-2025)
- [April 2025 (4/1-4/30)](#april-2025)
- [May 2025 (5/1-5/31)](#may-2025)
- [June 2025 (6/1-6/30)](#june-2025)
- [July 2025 (7/1-7/31)](#July-2025)
- [August 2025 (8/1-8/31)](#August-2025)
- [September 2025 (9/1-9/30)](#September-2025)
- [October 2025 (10/1-10/31)](#October-2025)
- [November 2025 (11/1-11/30)](#November-2025)
- [December 2025 (12/1-12/31)](#December-2025)

## Where to gather the data

**Remember to update the date ranges for these links in the UI before pulling the data (the links are probably all set to February 2025)**
 
- Total downloads since launch
  - iOS, [appstore connect first time downloads](https://appstoreconnect.apple.com/analytics/app/ltd/1559609596/metrics?chartType=singleaxis&measureKey=units&zoomType=day)
  - Android, Google play console, [cumulative new users, 5 years](https://play.google.com/console/u/2/developers/7507611851470273082/app/4974294731909201030/statistics?metrics=USER_ACQUISITION-NEW-EVENTS-CUMULATIVE-DAY&dimension=COUNTRY&dimensionValues=OVERALL%2CUS%2CPR%2CPH%2CDE&dateRange=2020_3_21-2025_3_19&tab=APP_STATISTICS&ctpMetric=DAU_MAU-ACQUISITION_UNSPECIFIED-COUNT_UNSPECIFIED-CALCULATION_UNSPECIFIED-DAY&ctpDateRange=2025_2_18-2025_3_19&ctpDimension=COUNTRY&ctpDimensionValue=OVERALL&ctpPeersetKey=3%3A7098e2ceb59ccf42)
- New monthly downloads
  - iOS Installs (App Store Connect, [total first time downloads](https://appstoreconnect.apple.com/analytics/app/r:20250201:20250228/1559609596/metrics?chartType=singleaxis&measureKey=units&zoomType=day))
  - Android Installs ([Cumulative, new users, unique events](https://play.google.com/console/u/2/developers/7507611851470273082/app/4974294731909201030/statistics?metrics=USER_ACQUISITION-NEW-UNIQUE-CUMULATIVE-DAY&dimension=COUNTRY&dimensionValues=OVERALL%2CUS%2CPR%2CPH%2CDE&dateRange=2025_2_1-2025_2_28&tab=APP_STATISTICS&ctpMetric=DAU_MAU-ACQUISITION_UNSPECIFIED-COUNT_UNSPECIFIED-CALCULATION_UNSPECIFIED-DAY&ctpDateRange=2025_2_18-2025_3_19&ctpDimension=COUNTRY&ctpDimensionValue=OVERALL&ctpPeersetKey=3%3A7098e2ceb59ccf42)) 
- Monthly active users ([Firebase Overview](https://analytics.google.com/analytics/web/?authuser=2&hl=en#/p265787033/reports/dashboard?params=_u..pageSize%3D250%26_u.comparisonOption%3Ddisabled%26_u.date00%3D20250201%26_u.date01%3D20250228%26_r..dimension-value%3D%7B%22dimension%22:%22eventName%22,%22value%22:%22screen_view%22%7D&r=firebase-overview))
- Monthly new users (Google Analytics event, [first open](https://analytics.google.com/analytics/web/?authuser=2&hl=en#/p265787033/reports/dashboard?params=_u..pageSize%3D250%26_u.comparisonOption%3Ddisabled%26_u.date00%3D20250201%26_u.date01%3D20250228%26_r..dimension-value%3D%7B%22dimension%22:%22eventName%22,%22value%22:%22first_open%22%7D&r=events-overview)) (First_open events are logged the first time a new app is launched. So installing on a new device, uninstalling and reinstalling on the same device, or deleting local data for the app would all trigger this.)
- Monthly appointment detail views (Google Analytics event, [vama appt view details](https://analytics.google.com/analytics/web/?authuser=2&hl=en#/p265787033/reports/dashboard?params=_u..pageSize%3D250%26_u.comparisonOption%3Ddisabled%26_u.date00%3D20250201%26_u.date01%3D20250228%26_u..nav%3Dmaui%26_r..dimension-value%3D%7B%22dimension%22:%22eventName%22,%22value%22:%22vama_appt_view_details%22%7D&r=events-overview&collectionId=3022309925))
- Monthly Rx Refill (Google Analytics event, [vama rx refill success](https://analytics.google.com/analytics/web/?authuser=2&hl=en#/p265787033/reports/dashboard?params=_u..pageSize%3D250%26_u.comparisonOption%3Ddisabled%26_u..nav%3Dmaui%26_r..dimension-value%3D%7B%22dimension%22:%22eventName%22,%22value%22:%22vama_rx_refill_success%22%7D%26_u.dateOption%3Dlast30Days&r=events-overview&collectionId=3022309925))
- Monthly Letter Downloads (Google Analytics event, [vama letter download](https://analytics.google.com/analytics/web/?authuser=2&hl=en#/p265787033/reports/dashboard?params=_u..pageSize%3D250%26_u.comparisonOption%3Ddisabled%26_u..nav%3Dmaui%26_r..dimension-value%3D%7B%22dimension%22:%22eventName%22,%22value%22:%22vama_letter_download%22%7D%26_u.dateOption%3Dlast30Days&r=events-overview&collectionId=3022309925))
- Monthly Secure Messages Sent (Google Analytics event, [vama sm send message](https://analytics.google.com/analytics/web/?authuser=2&hl=en#/p265787033/reports/dashboard?params=_u..pageSize%3D250%26_u.comparisonOption%3Ddisabled%26_u..nav%3Dmaui%26_r..dimension-value%3D%7B%22dimension%22:%22eventName%22,%22value%22:%22vama_sm_send_message%22%7D%26_u.dateOption%3Dlast30Days&r=events-overview&collectionId=3022309925))
- Monthly Veteran Status Views (Google Analytics, [pages & screens](https://analytics.google.com/analytics/web/?authuser=2&hl=en#/p265787033/reports/explorer?params=_u..pageSize%3D250%26_u.comparisonOption%3Ddisabled%26_u.date00%3D20250201%26_u.date01%3D20250228%26_u..nav%3Dmaui%26_r.explorerCard..startRow%3D0%26_r.explorerCard..filterTerm%3Dveteran&r=all-pages-and-screens&ruid=85114BBE-2F4B-42D6-AF54-5A24E62195CF&collectionId=3022309925))
- Average App Store Rating ([App store](https://apps.apple.com/us/app/va-health-and-benefits/id1559609596))
- Average Play Store Rating ([Play store](https://play.google.com/store/apps/details?id=gov.va.mobileapp&hl=en_US))

## December 2025

**Date range for metrics**: December 1, 2025 - December 31, 2025

- **Total downloads since launch (01/01/2020)**: 1,562,153(A) + 2,547,955(iOS) = 4,110,108
- **New monthly downloads**: 36,870(A) + 42,672(iOS) = 71,715
- **Monthly active users**: 1,647,628
- **Monthly new users**: 189,284
- **Monthly appointment detail views**: 3,381,724
- **Monthly Rx Refill**: 636,934
- **Monthly Letter Downloads**: 697,931
- **Monthly Secure Messages Sent**: 748,102
- **Monthly Veteran Status Views**: 678,912

### Android

- **Android installs**: 36,870
- **Average Play Store Rating**: 4.7

### iOS

- **iOS Installs**: 42,672
- **Average App Store Rating**: 4.8

## November 2025

**Date range for metrics**: November 1, 2025 - November 30, 2025

- **Total downloads since launch**: 1,525,283(A) + 2,505,355(iOS) = 4,030,638
- **New monthly downloads**: 29,432(A) + 42,283(iOS) = 71,715
- **Monthly active users**: 1,620,480
- **Monthly new users**: 176,216
- **Monthly appointment detail views**: 3,072,383
- **Monthly Rx Refill**: 565,505
- **Monthly Letter Downloads**: 529,253
- **Monthly Secure Messages Sent**: 665,697
- **Monthly Veteran Status Views**: 683,950


### Android

- **Android installs**: 29,432
- **Average Play Store Rating**: 4.7

### iOS

- **iOS Installs**: 42,283
- **Average App Store Rating**: 4.8

## October 2025

**Date range for metrics**: October 1, 2025 - October 31, 2025

- **Total downloads since launch**: 1,494,030(A) + 2,463,052(iOS) = 3,957,082
- **New monthly downloads**: 35,757(A) + 43,977(iOS) = 79,734
- **Monthly active users**: 1,588,896
- **Monthly new users**: 186,676
- **Monthly appointment detail views**: 3,404,680
- **Monthly Rx Refill**: 603,996
- **Monthly Letter Downloads**: 595,190
- **Monthly Secure Messages Sent**: 767,019
- **Monthly Veteran Status Views**: 663,750

### Android

- **Android installs**: 35,757
- **Average Play Store Rating**: 4.7

### iOS

- **iOS Installs**: 43,977
- **Average App Store Rating**: 4.8

## September 2025

**Date range for metrics**: September 1, 2025 - September 30, 2025

- **Total downloads since launch**: ~1.45M (A) + ~2.42M (iOS) = ~3.87M 
- **New monthly downloads**: 41k (A) + 53.3k (iOS) = 94.3k
- **Monthly active users**: 1.6M
- **Monthly new users**: 189k
- **Monthly appointment detail views**: 3,424,973
- **Monthly Rx Refill**: 587,911
- **Monthly Letter Downloads**: 595,948
- **Monthly Secure Messages Sent**: 742,592
- **Monthly Veteran Status Views**: 701,079

### Android

- **Android installs**: 41k
- **Average Play Store Rating**: 4.7

### iOS

- **iOS Installs**: 53.3k
- **Average App Store Rating**: 4.8

## August 2025

**Date range for metrics**: August 1, 2025 - August 31, 2025

- **Total downloads since launch**: ~1.4M (A) + ~2.37M (iOS) = ~3.77M 
- **New monthly downloads**: 52k (A) + 62k (iOS) = 114k
- **Monthly active users**: 1.6M
- **Monthly new users**: 217k
- **Monthly appointment detail views**: 3,311,788
- **Monthly Rx Refill**: 580,585
- **Monthly Letter Downloads**: 601,975 
- **Monthly Secure Messages Sent**: 689,871
- **Monthly Veteran Status Views**: 765,827

### Android

- **Android installs**: 52k
- **Average Play Store Rating**: 4.7

### iOS

- **iOS Installs**: 62k
- **Average App Store Rating**: 4.8

## July 2025

**Date range for metrics**: July 1, 2025 - July 31, 2025

- **Total downloads since launch**: ~1.4M (A) + ~2.3M (iOS) = ~3.7M 
- **New monthly downloads**: 36k (A) + 45.4K (iOS) = 81.5k
- **Monthly active users**: 1.5M
- **Monthly new users**: 172k
- **Monthly appointment detail views**: 2,782,215 
- **Monthly Rx Refill**: 591,144
- **Monthly Letter Downloads**: 564,753 
- **Monthly Secure Messages Sent**: 701,261
- **Monthly Veteran Status Views**: 870,628

### Android

- **Android installs**: 36k
- **Average Play Store Rating**: 4.7

### iOS

- **iOS Installs**: 45.4K
- **Average App Store Rating**: 4.8

## June 2025

**Date range for metrics**: June 1, 2025 - June 30, 2025

- **Total downloads since launch**: ~1.32M (A) + ~2.26M (iOS) = ~3.58M 
- **New monthly downloads**: 37.5k (A) + 49.4K (iOS) = 86.9k
- **Monthly active users**: 1.5M
- **Monthly new users**: 180k
- **Monthly appointment detail views**: 1,929,309
- **Monthly Rx Refill**: 589,419
- **Monthly Letter Downloads**: 518,046
- **Monthly Secure Messages Sent**: 642,340
- **Monthly Veteran Status Views**: 852,531

### Android

- **Android installs**: 37.5k 
- **Average Play Store Rating**: 4.7

### iOS

- **iOS Installs**: 49.4K
- **Average App Store Rating**: 4.8

## May 2025

**Date range for metrics**: May 1, 2025 - May 31, 2025

- **Total downloads since launch**: ~1.23M (A) + ~2.21M (iOS) = ~3.44M 
- **New monthly downloads**: 32.5k (A) + 45.8K (iOS) = 78.3k
- **Monthly active users**: 1.4M
- **Monthly new users**: 162k
- **Monthly appointment detail views**: 2M
- **Monthly Rx Refill**: 595K
- **Monthly Letter Downloads**: 553K
- **Monthly Secure Messages Sent**: 634K
- **Monthly Veteran Status Views**: 874k 

### Android

- **Android installs**: 32.5k 
- **Average Play Store Rating**: 4.7

### iOS

- **iOS Installs**: 45.8K
- **Average App Store Rating**: 4.8

## April 2025

**Date range for metrics**: April 1, 2025 - April 30, 2025

- **Total downloads since launch**: ~1.21M (A) + ~2.16M (iOS) = ~3.37M 
- **New monthly downloads**: 33k (A) + 86.5K (iOS) = 119.5k
- **Monthly active users**: 1.4M
- **Monthly new users**: 161k
- **Monthly appointment detail views**: 2M
- **Monthly Rx Refill**: 563k
- **Monthly Letter Downloads**: 504k
- **Monthly Secure Messages Sent**: 629k
- **Monthly Veteran Status Views**: 557k

### Android

- **Android installs**: 33k 
- **Average Play Store Rating**: 4.7

### iOS

- **iOS Installs**: 86.5K
- **Average App Store Rating**: 4.8

## March 2025

**Date range for metrics**: March 1, 2025 - March 31, 2025

- **Total downloads since launch**: ~1.2M (A) + ~2.07M (iOS) = ~3.17M 
- **New monthly downloads**: 35.5k (A) + 69.5K (iOS) = 105k
- **Monthly active users**: 1.4M
- **Monthly new users**: 169k
- **Monthly appointment detail views**: ~2M
- **Monthly Rx Refill**: 581k
- **Monthly Letter Downloads**: 518k
- **Monthly Secure Messages Sent**: 607k
- **Monthly Veteran Status Views**: 479k

### Android

- **Android installs**: 35.5k 
- **Average Play Store Rating**: 4.7

### iOS

- **iOS Installs**: 69.5K
- **Average App Store Rating**: 4.8

## Februrary 2025

**Date range for metrics**: February 1, 2025 - February 28, 2025

- **Total downloads since launch**: ~1.1M (A) + ~2.05M (iOS) = ~3.15M 
- **New monthly downloads**: 33k (A) + 142k (iOS) = 175k
- **Monthly active users**: 1.3M
- **Monthly new users**: 145k
- **Monthly appointment detail views**: 1.8M
- **Monthly Rx Refill**: 517k
- **Monthly Letter Downloads**: 493k
- **Monthly Secure Messages Sent**: 560k
- **Monthly Veteran Status Views**: 441k

### Android

- **Android installs**: 33k 
- **Average Play Store Rating**: 4.7

### iOS

- **iOS Installs**: 142k (large install spike on 2/9)
- **Average App Store Rating**: 4.8
