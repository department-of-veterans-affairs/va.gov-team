# VA Notify debugging

We can connect failure logs to Notifications as follows:

- See the failure in Datadog: `https://vagov.ddog-gov.com/logs?query=env%3A%22eks-prod%22%20service%3Avets-api%20%40message_content%3A%2A%20%22va_notify%20callbacks%20-%20Updating%20notification%3A%22%20%2A%20%40payload.template_id%3A785c5bd6-b6e8-4497-88b4-9de1984a6885%20-%40payload.status%3Adelivered&agg_m=count&agg_m_source=base&agg_t=count&clustering_pattern_field_path=message&cols=host%2Cservice%2Cpayload.callback_metadata%2C%40payload.status&fromUser=true&graphType=waterfall&messageDisplay=inline&refresh_mode=sliding&sort=time&source=monitor_notif&storage=hot&stream_sort=time%2Cdesc&viz=stream&from_ts=1750427398887&to_ts=1750686598887&live=true`
- find the log message content, e.g., `va_notify callbacks - Updating notification: 1234567`
- in Argo, get the `notification_id` from the DB entry: `VANotify::Notification.find(1234567).notification_id`
- VA-Notify can look up the `notifications` table in their API using this UUID as the `id`.
