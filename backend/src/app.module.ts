import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoalsModule } from './goals/goals.module';
import { TasksModule } from './tasks/tasks.module';
import { PrismaModule } from '@/services/prisma/prisma.module';

@Module({
  imports: [PrismaModule, GoalsModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
