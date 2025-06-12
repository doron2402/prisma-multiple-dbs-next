This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Scripts

- `postinstall`: Runs immediately after installing dependencies to generate Prisma Clients for both the user and post databases using their respective schema files.
- `generate`: Manually triggers the generation of Prisma Clients for both schemas, ensuring your client code reflects the latest models.
- `migrate`: Applies pending migrations in development mode for both databases using Prisma Migrate, updating their schemas based on changes in your Prisma files.
- `deploy`: Executes migrations in a production environment, synchronizing your live databases with your Prisma schemas.
- `studio`: Opens Prisma Studio for both databases simultaneously on different ports (5555 for the user database and 5556 for the post database) for visual data management.

