# Description

This project is for a technical test

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## The project

There is two important endpoints, you can take a look in the default port `3000` the swagger docs:

```bash
$ http://localhost:3000/api
```

1. The easy challenge will expect a ses schema and will parse it according to the business rules
2. The hard challege will recieve two optional parameters, one will be the file, this should be the route where the .eml file is located, for testing purpuses I left three test files:

- `./testEmail.eml` -> this file has only a simple json as an attachment
- `./testWithLinkToJson.eml` -> this file has a link that will redirect you to the page with the json (get request)
- `./testWithLinkToPage.eml` -> this file has only a link to a page ( html page), in this case another query param need to be provided, the `url` , for this example use `https://jsonplaceholder.typicode.com/posts`, the code will look for that url inside the email url and return the json if exists

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
