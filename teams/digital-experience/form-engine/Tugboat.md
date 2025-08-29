# Tugboat

## How to reset a Tugboat build

Access the PHP terminal (via Tugboat web interface) and issue the following command:
```
drush va-gov:content-release:reset-state
```

Importantly, this will _not_ re-start the build. This will reset the state to a ready state, and then you need to re-initiate the content release manually (via the Drupal web interface at `admin/content/deploy`):
![image](https://github.com/user-attachments/assets/069fe85a-9b3f-484d-9c64-3838b7511a3a)
