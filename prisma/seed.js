const { prisma } = require("../lib/prisma");

async function main() {
  console.log("ENV", process.env.DATABASE_URL);
  const result = await prisma.info_Partidos.findMany({
    where: {
      Grupo: "A",
    },
    include: {
      Prode_Partido_Usuario: {
        where: {
          AND: [
            {
              userId: "cl86jkdjr0077ckudp9gngh90",
            },
            { grupoId: Number(7) },
          ],
        },
      },
    },
  });
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
