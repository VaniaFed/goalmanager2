import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prismaService: PrismaService) {}
  findMany() {
    return this.prismaService.task.findMany();
  }

  findOne(id: number) {
    return this.prismaService.task.findUnique({
      where: { id: Number(id) },
    });
  }
}
