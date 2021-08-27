# Architecture

## Event Ingress
The system writes events to a Redis stream which is an in-memory log data structure. We chose Redis because vets-api already uses Redis in production. The expected throughput is thousands rather than millions of events per hour. We may reach a higher threshold in the future. Until then we won't need the capacity and operational complexity of an alternative such as Kafka.

The VA systems producing events are not within the same AWS VPC and some systems still live in legacy data centers. Also not all VA systems have the technical experience of writing to a distributed log. An API endpoint provides remote systems are familiar path to get events into the system. 

To reduce the complexity of exposing, securing, and documenting this endpoint we'd like to host it on VA Lighthouse. 

## Event Storage
Event producing systems are the source of truth for their data. The event stream is not designed to be a long term data store. Events will be backed up to vets-api's PostgreSQL database in should they need to be debugged or replayed due to error. This will also allow non-real time systems to query for recent events. 

The time to live for events will be one week. The system will store each day's events in a partitioned table. This will reduce the load on the database when deleting events.

## Event Consumers
Event consumers will run 'rules' on the event stream. When an event trigger's a consumer's rule it will stage an output action. An example rule could be; events with a sourceSystem of MHV_SECURE_MESSAGING, an eventType of NEW_MESSAGE, and a user.icn which matches a registered mobile user.

## Actions
Actions are Sidekiq jobs. In most cases they will call a 3rd party API to deliver the notification to a veteran.

## Flow Chart

