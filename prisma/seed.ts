import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  //   await prisma.album.deleteMany();
  //   await prisma.artist.deleteMany();

  for (let i = 0; i < 100; i++) {
    const created = faker.date.between('2022-01-01T00:00:00.000Z', '2022-12-31T00:00:00.000Z');
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: faker.random.alphaNumeric(8),
        role: faker.helpers.arrayElement(['user', 'inspector', 'admin']),
        taxpayer: {
          create: {
            frist_name: faker.name.fullName(),
            last_name: faker.name.lastName(),
            gender: faker.name.gender(),
            tin_12: faker.finance.account(12),
            tin_old: faker.finance.account(10),
            nid: faker.random.numeric(10),
            tax_circle: faker.random.numeric(1),
            tax_zone: faker.random.numeric(2),
            residance_status: faker.helpers.arrayElement(['resident', 'non-resident']),
            contact: {
              spouse_name: faker.name.fullName(),
              spouse_tin: faker.finance.account(12),
              father_name: faker.name.fullName(),
            },
            dob: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
          },
        },
        createdAt: created,
        updatedAt: created,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
