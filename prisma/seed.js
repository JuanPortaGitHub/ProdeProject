const { prisma } = require("../lib/prisma");

async function main() {
  console.log("ENV", process.env.DATABASE_URL);
  const result = await prisma.prode_Partido_Usuario.updateMany({
    where: {
      userId: "cl86jkdjr0077ckudp9gngh90",
      grupoId: 3,
      info_PartidosId: 1543895,
    },
    data: {
      Puntos: 55,
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
