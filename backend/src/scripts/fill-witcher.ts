import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const created = await prisma.goal.create({
    data: {
      title: 'Ведьмак',
      tasks: {
        create: [
          { title: 'Последнее желание', total: 320 },
          { title: 'Меч предназначения', total: 384 },
          { title: 'Кровь эльфов', total: 320 },
          { title: 'Час презрения', total: 352 },
          { title: 'Крещение огнем', total: 384 },
          { title: 'Башня ласточки', total: 448 },
          { title: 'Владычица озера', total: 544 },
        ],
      },
    },
    include: {
      tasks: true,
    },
  });

  console.dir(created, { depth: null }); // ⬅️ Обязателен для вложенности
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
