This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Purpose

In MobX 6.1.0, a production build cannot be created due to strange handling of Symbols when `NODE_ENV=production`. This does not occur in any `6.0.X` versions.

## Getting Started

First, run the development server. You can do this natively:

```bash
npm run dev
# or
yarn dev
```

Or with `docker-compose`:

```bash
docker-compose up --build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result, which should just say `MobX Symbol Error example application`.

## Reproducing the error

With no modifications, run `yarn build`. You will receive the following error during the build process: `TypeError: Cannot convert a Symbol value to a string` - and the traceback points to the minified MobX production bundle.

## Bypassing the error

Change the `build` command in `package.json` to be `NODE_ENV=development next build`. The application will build successfully, but not using the minified production runtime.
