import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from '@/tasks/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  findMany() {
    return this.tasksService.findMany();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tasksService.findOne(id);
  }
}
