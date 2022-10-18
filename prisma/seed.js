const { prisma } = require("../lib/prisma");

async function main() {
  console.log("ENV", process.env.DATABASE_URL);
  const result = await prisma.grupo
    .findFirst({
      where: {
        id: Number(3) || null || undefined,
      },
    })
    .UsuariosDeGrupo();
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
