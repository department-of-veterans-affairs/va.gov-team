## Current Status
### 03/08/2024
I am currently in the process of removing the UI code needed to support the EVSS claim details response from `vets-website`. This work is being done component-by-component in order to avoid any risks involved with changing large chunks of code at the same time

#### Next Steps
Once the UI code has been removed, the feature toggle can also be removed. I am planning on removing the feature toggle for the index route at the same time as well. Once these two things have been done and the other teams that are doing the same migration work have confirmed that they are ready, it will be time to remove the BE code from `vets-api` as well.

## Previous Statuses
