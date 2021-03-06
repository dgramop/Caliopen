# CaliOpen development tools

Here you will find tools for CaliOpen development. There is many possibles
scenarios for setup of an environment development, depending on what you
want to do.

_For complete documentation, see the [doc/for-developers](../doc/for-developers) directory._

# Development scenarios

## Client development

**Requirements:**

* You need the API running under vagrant/docker/manual install, cf. Environment setup. Obviously, you don't need to run frontend service.
* You need [node](https://nodejs.org/en/) v6 or later
* You need [yarn](https://yarnpkg.com/en/docs/install) to manage dependencies.

Then develop locally using your normal practices:

```
cd src/frontend/web_application
yarn install
npm start
```

It's a bit long to compile. Notice that running client on both vagrant and locally will not work
since it uses the same port.

> You can develop using the box, the code will be immediatly updated. The first compilation is still
> long, up to 1 min. You can use tail to see when it's ready:

```
tail -f src/frontend/web_application/kotatsu.log
```

> [kotatsu] Serving your app on port 4000... //<- ready

## Api development

at least 2 scenarios:

- running the vagrant box, it's a pserve with --reload option started
  in it, so your changes will immediatly update the api code.

- running in a python virtual environment with storage services running locally

## Backend development

It's better to run all storage services locally and develop inside a python virtual
environment for such development, at the moment.

# Environment setup

## Setup vagrant box

You need to have [virtualbox](https://www.virtualbox.org/) and [vagrant](https://vagrantup.com) installed on your machine.

Just run inside this directory a ``vagrant up`` command, and you will have a debian
VM running these services visible on your guest machine:

- 4025 for LMTP (ingest mail)
- 6543 for ReST API
- 4000 for the web client

## Setup docker compose stack

you need to have [docker](https://docs.docker.com/engine/installation/) and [docker compose](https://docs.docker.com/compose/) installed on your machine.

Services available in the docker compose stack are:

- redis
- elasticsearch (v2.x)
- cassandra
- caliopen ReST API
- caliopen cli

You can start daemon services using these commands:

```
cd devtools
docker-compose build
docker-compose up -d redis cassandra elasticsearch
```

Then you can setup storage, create an user and import email using caliopen cli tool:
```
cd devtools
docker-compose run cli setup
docker-compose run cli create_user -e dev -p 123456
docker-compose run cli import -e dev@caliopen.local -f mbox -p devtools/fixtures/mbox/dev@caliopen.local
```

Finally start the api and the frontend:

```
cd devtools
docker-compose up -d api
docker-compose up -d frontend
```

You will have a CaliOpen instance filled with data, accessible using API on port 6543

## Setup local storage services

You need to have installed locally:
- cassandra (2.x series for the moment)
- elasticsearch (< 5.0)
- redis (any version)

Installation method depend on your habits, but elasticsearch and cassandra are just
java .jar files to launch. If your OS distribution doesn't support them, don't panic
if you have a jvm >= 7.x available.

We experiment many problems with cassandra and docker container (with persistent
data accros container restart), so we don't encourage it for running storage services.
