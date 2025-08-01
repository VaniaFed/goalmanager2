import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    try {
      await this.$connect();
    } catch (error) {
      console.error('Prisma connection error', error);
      throw error;
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
