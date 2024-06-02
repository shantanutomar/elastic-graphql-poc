# Project Title
POC on how to use ElasticSearch and GraphQL with NestJS

## Description
Simple POC to show how to use ElasticSearch and GraphQL with NestJS. 

Tech stack:
- NestJS with TypeScript
- ElasticSearch with ElasticSearchJS client
- GraphQL
- Apollo Server
- PostgreSQL using Supabase
- TypeORM

Thr project has mainly 3 modules in `src` directory:
- `books` - Handles the GraphQL queries and mutations for books using Apollo Server
The data is stored in the PostgreSQL database using Supabase.
- `elastic-books` - Handles the REST API for ElasticSearch to store and retrieve books indices and documents.
Does not use PostgreSQL and TypeORM and directly uses the ElasticSearchJS client to interact with ElasticSearch. 
- `database` - Handles the database connection using TypeORM

## Getting Started

### Dependencies
* Make sure Elastic Search is running locally and running on `http://localhost:9200` and get the username and 
password for the same.
* Make sure the Kibana is running locally on `http://localhost:5601/app/dev_tools#/console`
* Create a Supabase account and create a new project to get the database URL

### Installing & Running the program

* Clone the [repository](https://github.com/shantanutomar/elastic-graphql-poc)
* Run `npm install` to install all the dependencies
* Create a `.env` file in the root directory and add the following environment variables:
```
SUPABASE_DATABASE_URL
ELASTICSEARCH_URL=http://localhost:9200
ELASTICSEARCH_USERNAME=elastic
ELASTICSEARCH_PASSWORD
```
* Run `npm run start:dev` to start the server.
* The table should be created in the database. Verify in Supabase console.
* The elastic search should be running on `http://localhost:9200`
* Open `http://localhost:3000/graphql` to access the GraphQL playground
* The Rest API for elastic search is available at `http://localhost:3000/elastic-books`


## Help

## Authors

Contributors names

Shantanu Tomar  

## Version History

## License

## Acknowledgments
