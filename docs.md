Prototype for a Metadata Reflection API for ECMAScript: https://rbuckton.github.io/reflect-metadata

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
Source: https://expressjs.com

Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
Source: https://www.npmjs.com/package/body-parser

Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.
Source: https://github.com/expressjs/multer

TypeDI is a dependency injection tool for JavaScript and TypeScript. Using TypeDI you can build well-structured and easily tested applications.
https://github.com/typestack/typedi

routing-controllers supports a DI container out of the box. You can inject your services into your controllers, middlewares and error handlers. Container must be setup during application bootstrap.


## Install Globally

npm run setup

## Making migrations 

knex migrate:make --knexfile .\develop\knexfile.ts create_users_table