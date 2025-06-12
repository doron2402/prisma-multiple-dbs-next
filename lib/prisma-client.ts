import { PrismaClient as UserPrismaClient } from '../prisma-user-database/user-database-client-types';
import { PrismaClient as PostPrismaClient } from '../prisma-post-database/post-database-client-types';

// in the future, we can add more databases here
type DatabaseType = 'users' | 'posts';

class PrismaClientManager {
  private static userClient: UserPrismaClient | null = null;
  private static postClient: PostPrismaClient | null = null;

  static getClient(databaseType: 'users'): UserPrismaClient;
  static getClient(databaseType: 'posts'): PostPrismaClient;
  static getClient(databaseType: DatabaseType): UserPrismaClient | PostPrismaClient {
    switch (databaseType) {
      case 'users':
        if (!this.userClient) {
          this.userClient = new UserPrismaClient();
          this.userClient.$connect();
        }
        return this.userClient;

      case 'posts':
        if (!this.postClient) {
          this.postClient = new PostPrismaClient();
          this.postClient.$connect();
        }
        return this.postClient;

      default:
        throw new Error(`Invalid database type: ${databaseType}`);
    }
  }
}

export default PrismaClientManager;