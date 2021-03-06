# goodbooks API

_REST API for the e-commerce application: [goodbooks](https://github.com/shraddha319/goodbooks)._

Built using this [REST API boilerplate](https://github.com/shraddha319/REST-API-boilerplate)

## Features

- **Error Handling**: centralized error handling mechanism
- **Authentication and Authorization**: using [JWT](https://jwt.io)
- **NoSQL database**: [MongoDB](https://www.mongodb.com)
- **Object Data Modeling**:using [Mongoose](https://mongoosejs.com)
- **Validation**: using [Joi](https://github.com/sideway/joi)
- **CORS**: Cross-Origin Resource Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Environment Variables**: using [dotenv](https://github.com/motdotla/dotenv)
- **Dependency Management**: using [npm](https://www.npmjs.com)
- **Linting**: using [ESLint](https://eslint.org) and [Prettier](https://prettier.io)

## Quick Start

Get started with the below steps:

1. Clone the repo:

```bash
git clone https://github.com/shraddha319/goodbooks-api.git
cd goodbooks-api
```

2. Install the dependencies

```bash
npm install
```

3. Set the environment variables

```bash
cp .env.example .env

# modify the environment variables in .env if required
```

## Environment Varibles

The environment variables can be found and modified in the .env file.

## Commands

The following commands can be found under `scripts` in `package.json`.

Run locally:

```bash
npm run dev
```

Run in production:

```bash
npm run start
```

Testing:

```bash
# run all tests
npm run test

# run all tests in watch mode
npm run test:watch

# run test coverage
npm run test:coverage
```

Linting:

```bash
# run ESLint
npm run lint

# fix ESLint errors
npm run lint:fix
```

## API Documentation

### Product routes:

`GET /products` - get products\
`POST /products` - add products\
`GET /products/:productId` - get product by ID

### Auth routes:

`POST /auth/login` - login user

### User routes:

`POST /users` - create user

(Below routes require user authentication)

`GET /users/:userId` - get user\
`POST /users/:userId` - update user\
`DELETE /users/:userId` - delete user

### Cart routes:

`GET /users/:userId:/cart` - get cart by user ID\
`POST /users/:userId/cart` - create cart\
`POST /users/:userId/cart/:cartId` - update cart by cart ID\
`DELETE /users/:userId/cart/:cartId` - delete cart by cart ID

### Wishlist routes:

`GET /users/:userId:/wishlist` - get wishlist by user ID\
`POST /users/:userId/wishlist` - create wishlist\
`POST /users/:userId/wishlist/:wishlistId` - update cart by ID\
`DELETE /users/:userId/wishlist/:wishlistId` - delete wishlist by ID

## License

[MIT](LICENSE)
