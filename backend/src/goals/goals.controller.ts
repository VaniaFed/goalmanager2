import { Controller, Get, Param } from '@nestjs/common';
import { GoalsService } from '@/goals/goals.service';

@Controller('goals')
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}
  @Get()
  findMany() {
    return this.goalsService.findMany();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.goalsService.findOne(id);
  }
}
