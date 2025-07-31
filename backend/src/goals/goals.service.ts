import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';

@Injectable()
export class GoalsService {
  constructor(private readonly prismaService: PrismaService) {}
  findMany() {
    return this.prismaService.goal.findMany({
      include: {
        tasks: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.goal.findUnique({
      where: { id: Number(id) },
    });
  }
}
