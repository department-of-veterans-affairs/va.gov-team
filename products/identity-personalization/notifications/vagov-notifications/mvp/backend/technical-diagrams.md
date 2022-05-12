# Backend support for notifications on VA.gov

The notifications endpoint (`/v0/onsite_notifications`) takes the following parameters:
- `va_profile_id`
- `template_id`

The following template ids are stored in `[env].settings.yml`.


### Solution 1
vets-api provides an API for VA Notify to send alerts data to _(determined path forward)_

![Option 1  Notifications on VA gov](https://user-images.githubusercontent.com/45603961/137404176-787d59e6-bb3c-4198-83a9-58bf4a68f48e.png)


### Solution 2
VA Notify provides an API for vets-api to retrieve alerts data

![Option 2  Notifications on VA gov](https://user-images.githubusercontent.com/45603961/137404231-fe123831-d74f-43bf-a198-da5e7142d02f.png)
