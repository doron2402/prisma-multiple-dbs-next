import { PrismaClient } from "../prisma-post-database/post-database-client-types";

const getPrisma = () => new PrismaClient()

const globalForPostDBPrismaClient = global as unknown as {
  postDBPrismaClient: ReturnType<typeof getPrisma>;
};

export const postDBPrismaClient =
  globalForPostDBPrismaClient.postDBPrismaClient || getPrisma();

if (process.env.NODE_ENV !== "production")
  globalForPostDBPrismaClient.postDBPrismaClient = postDBPrismaClient;