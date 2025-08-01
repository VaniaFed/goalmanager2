import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Удаляй в порядке от "детей" к "родителям"
  await prisma.task.deleteMany();
  await prisma.goal.deleteMany();

  console.log('Данные удалены');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
