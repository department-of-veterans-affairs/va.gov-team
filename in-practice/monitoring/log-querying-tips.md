---
title: Tips and tricks for examining logs in various monitoring tools
---


# Loki LogQL

## Query the vets-api-server and vets-api-worker JSON logs

```
{app=~"vets-api-.+", filename=~".+json.log"}
```

## Parse JSON log lines

The following expression will parse a log line and store values with the named keys:

```
pattern "<time> <srv> | <json>"
```

## Combining expressions

You will add expressions together, using the `|` pipe to combine:

```
{app=~"vets-api-.+", filename=~".+json.log"}
    | pattern "<time> <srv> | <json>"
```

Separating expressions on different lines increases readability, but is not necessary.


## Parse the JSON, and format the display of log lines

The following can take the JSON field we just extracted and parse the JSON:

```
line_format "{{.json}}" | json
```

Since there may be JSON parsing errors, we can exclude them:

```
__error__ != "JSONParserErr"
```

## Put the pieces so far together

```
{app=~"vets-api-.+", filename=~".+json.log"}
    | pattern "<time> <srv> | <json>"
    | line_format "{{.json}}" | json
    | __error__ != "JSONParserErr"
```

Now we have the JSON payloads for the API server and worker logs.

## Reformat the output

Now that we've parsed the JSON payloads, we can reformat our log lines to be more readable.

Here's how we can display the application, host, log level, and part of the log message:

```
line_format "{{.application}} ; {{.host}} ; {{.level}} ; {{.message | trunc 60 }}"
```

## Filtering out info messages

If we're concerned with errors and warnings, we can filter out 'debug' and 'info' messages:

```
level !~ "(debug|info)"
```

## Putting everything together

```
{app=~"vets-api-.+", filename=~".+json.log"}
    | pattern "<time> <srv> | <json>"
    | line_format "{{.json}}" | json
    | __error__ != "JSONParserErr"
    | level !~ "(debug|info)"
    | line_format "{{.application}} ; {{.host}} ; {{.level}} ; {{.message | trunc 60 }}"
```

## Sometimes a simple search is good, too

If you're searching for text in logs, you can do so with a [line filter expression](https://grafana.com/docs/loki/latest/logql/log_queries/#line-filter-expression). To look for log entries that mention Ruby's NilClass, you can add a line filter like `|= "NilClass"` near the beginning of your query:

```
{app=~"vets-api-.+", filename=~".+json.log"}
    |= "NilClass"
    | pattern "<time> <srv> | <json>"
    | line_format "{{.json}}" | json
    | __error__ != "JSONParserErr"
    | line_format "{{.application}} ; {{.host}} ; {{.level}} ; {{.message | trunc 60 }}"
```


# Prometheus PromQL


# Datadog
