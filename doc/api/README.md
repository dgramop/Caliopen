# Full swagger Caliopen ReST API definition

## WARNING

This file is not directly edited, but generated using JSON schema definitions.

## Generate the swagger.json from definitions

Documentation definitions are splits in [objects definitions](https://github.com/CaliOpen/Caliopen/tree/master/src/backend/defs/rest-api/objects) and [route paths ones](https://github.com/CaliOpen/Caliopen/tree/master/src/backend/defs/rest-api/paths).

To generate a single swagger.json file from theses definition, you need to install [swagger-cli](https://www.npmjs.com/package/swagger-cli) tool

```
# Go where objects and paths for API are defined
cd src/backend/defs/rest-api

# Install npm swagger-cli
npm install swagger-cli
alias swagger="node `pwd`/node_modules/swagger-cli/bin/swagger.js"


# Generate swagger.json
swagger bundle -r swagger-root.json -o ../../../../doc/api/swagger.json

```
