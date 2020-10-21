# Vets API local mock server instructions

## Setup

### Install docker
Install [docker desktop](https://www.docker.com/get-started) for your system.

### Clone the repos
Open a terminal and run the commands below to check out the mobile mock data branches.

```bash
# clone the api
git clone git@github.com:department-of-veterans-affairs/vets-api.git
git checkout mobile-api-mock-data

# clone the mock data repo
git clone git@github.com:department-of-veterans-affairs/vets-api-mockdata.git
git checkout mobile-api-mock-data
```

### First run
Change into the `vets-api` repo and run the `make up` command to download the images and start the API server.

```bash
cd vets-api
make up
```

The server will be ready once you see the `Use Ctrl-C to stop` message.

```
15:24:41 web.1       | started with pid 10
15:24:41 job.1       | started with pid 11
15:24:48 web.1       | Puma starting in single mode...
15:24:48 web.1       | * Version 4.3.5 (ruby 2.6.6-p146), codename: Mysterious Traveller
15:24:48 web.1       | * Min threads: 16, max threads: 16
15:24:48 web.1       | * Environment: development
15:26:07 web.1       | * Listening on tcp://0.0.0.0:3000
15:26:07 web.1       | Use Ctrl-C to stop
```

You can confirm it's running by making a request to `http://localhost:3000/mobile` in a browser or via curl

```bash
curl http://localhost:3000/mobile
{"data":{"attributes":{"message":"Welcome to the mobile API"}}}
```

## Making API calls
When running in dev/stag/prod an access token is sent in the `Authorization` header with each request to authenticate the user. For local development replace the access token with the number appended to the test user's username in their email. e.g. if their email address is `vets.gov.user+14@gmail.com` then their 'access token' will be `14`. To receive back JSON in camelCase rather than snake_case include a `X-Key-Inflection` header with a value of `camel`.

### Example curl request

```bash
curl http://localhost:3000/mobile/v0/user -H 'Authorization: Bearer 14' -H 'X-Key-Inflection: camel'
```

## Updating mock data
The cloned vets-api code is the same code that runs in production. The data being mocked is from the upstream services that feed vets-api. The list below details which files to update in `vets-api-mockdata` for a user within a service.

### User profile - /mobile/v0/user
Name, birth date, email : `vets-api-mockdata/iam_ssoe_oauth`
- Greg Anderson: `1.yml`
- Andrea Mitchell: `2.yml`
- Jerry Brooks: `14.yml`
- Mark Webb: `228.yml`

Addresses and phone numbers: `vets-api-mockdata/va_profile/contact_information`
- Greg Anderson: `1.yml`
- Andrea Mitchell: `2.yml`
- Jerry Brooks: `14.yml`
- Mark Webb: `228.yml`

Note: if you add a user they must also have a MVI entry. MVI returns all the correlation ids for a user so that they can be looked up in VA Profile and other systems (IAM returns this but can be out of date). The `iam_ssoe_oauth` file's `fediam_mviicn` field is used for lookup.

MVI: `vets-api-mockdata/mvi/profile_icn`
- Greg Anderson: `1008596379V859838.yml`
- Andrea Mitchell: `1008714701V416111.yml`
- Jerry Brooks: `1008709435V263289.yml`
- Mark Webb: `1008709396V637156.yml`

### Clearing the redis cache
As it's a full copy of vets-api it includes a copy redis which caches most upstream responses. You can clear the cache (while the docker container is running) by opening a second terminal window and running the following command.

```bash
docker exec -it vets-api_redis_1 redis-cli FLUSHALL
```
