## Current State
Current Sentry Version = `9.1.2` 

### Simplified Deployment
![image](https://user-images.githubusercontent.com/3077884/79146240-0a500380-7d90-11ea-9ead-aa6303d5082d.png)


## Sentry 9
For Sentry 9, there exists 3 docker containers:

- web
- worker
- cron

We have a single `cron` instance with a number of "web-worker" instances (named because each instances runs 2 containers: web & worker) within an autoscaling group.

## Sentry 10
For Sentry 10, there are 18 docker containers.
```
sentry_onpremise_clickhouse_1               /entrypoint.sh                   Up      8123/tcp, 9000/tcp, 9009/tcp
sentry_onpremise_cron_1                     /bin/sh -c exec /docker-en ...   Up      9000/tcp                    
sentry_onpremise_kafka_1                    /etc/confluent/docker/run        Up      9092/tcp                    
sentry_onpremise_memcached_1                docker-entrypoint.sh memcached   Up      11211/tcp                   
sentry_onpremise_post-process-forwarder_1   /bin/sh -c exec /docker-en ...   Up      9000/tcp                    
sentry_onpremise_postgres_1                 docker-entrypoint.sh postgres    Up      5432/tcp                    
sentry_onpremise_redis_1                    docker-entrypoint.sh redis ...   Up      6379/tcp                    
sentry_onpremise_sentry-cleanup_1           /entrypoint.sh 0 0 * * * g ...   Up      9000/tcp                    
sentry_onpremise_smtp_1                     docker-entrypoint.sh exim  ...   Up      25/tcp                      
sentry_onpremise_snuba-api_1                ./docker_entrypoint.sh api       Up      1218/tcp                    
sentry_onpremise_snuba-cleanup_1            /entrypoint.sh */5 * * * * ...   Up      1218/tcp                    
sentry_onpremise_snuba-consumer_1           ./docker_entrypoint.sh con ...   Up      1218/tcp                    
sentry_onpremise_snuba-replacer_1           ./docker_entrypoint.sh rep ...   Up      1218/tcp                    
sentry_onpremise_symbolicator-cleanup_1     /entrypoint.sh 55 23 * * * ...   Up      3021/tcp                    
sentry_onpremise_symbolicator_1             /bin/bash /docker-entrypoi ...   Up      3021/tcp                    
sentry_onpremise_web_1                      /bin/sh -c exec /docker-en ...   Up      0.0.0.0:9000->9000/tcp      
sentry_onpremise_worker_1                   /bin/sh -c exec /docker-en ...   Up      9000/tcp                    
sentry_onpremise_zookeeper_1                /etc/confluent/docker/run        Up      2181/tcp, 2888/tcp, 3888/tcp
```

The [Sentry 10 onpremise project](https://github.com/getsentry/onpremise) is written for simplicity and not scale.

## Proposed Migration Path

Standup a parallel Sentry 10 deployment side-by-side with the existing Sentry 9.1.2 deployment. Reason being, that since Sentry 10 is so different from 9, it would help mitigate the
risk of downtime.

### Specifics

Replace the [`install.sh` script included with the onpremise github project](https://github.com/getsentry/onpremise) with a custom written ansible deployment script. The script would:

- use an external RDS instead of the postgres container
- use an external EC instead of the redis container

[The `vagov-utility` VPC only has a limited amount of remaining ip addresses](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1402). An AWS ELB requires that each subnet have at least 8 available ip addresses:

![image](https://user-images.githubusercontent.com/3077884/79232599-b861b900-7e35-11ea-8c5b-63b46f67cca4.png)

As a compromise, we proposed placing the ELB & EC2 instances inside the `vetsgov-utility` VPC and keeping RDS & EC in `vagov-utility`:

![image](https://user-images.githubusercontent.com/3077884/78701455-1130cf00-78d5-11ea-90ee-dfb30691abed.png)

Related PR's:
- https://github.com/department-of-veterans-affairs/devops/pull/6685
- https://github.com/department-of-veterans-affairs/devops/pull/6675
- https://github.com/department-of-veterans-affairs/devops/pull/6608

## Conclusion
- the “temporary” side deployment of Sentry 10 in the vetsgov-utility VPC is… “meh”
- Nomad could be available somewhat soon’ish (2-3 months maybe?) and sentry 10 could be a guinea pig as one of the first apps to be deployed using it
- Sentry 10 is still fairly new (Jan 2020)
  - We don't desperately require any of the new features
