import { prisma } from "../lib/prisma";

async function main() {
  const result = await prisma.equipos.deleteMany({});
  console.log("result", result);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
