import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  // const alice = await prisma.user.upsert({
  //     where: { email: 'alice@prisma.io' },
  //     update: {},
  //     create: {
  //         email: 'alice@prisma.io',
  //         password: 'Alice',
  //         token: 'token',
  //         role: 'USER_ADMIN',
  //     },
  // })

  // const pierre = await prisma.user.upsert({
  //     where: { email: 'pierre@prisma.io' },
  //     update: {},
  //     create: {
  //         email: 'pierre@prisma.io',
  //         password: 'Pierre',
  //         token: 'token',
  //         role: 'SIMPLE_USER',
  //     },
  // })

  // const jerome = await prisma.user.upsert({
  //     where: { email: 'jerome@prisma.io' },
  //     update: {},
  //     create: {
  //         email: 'jerome@prisma.io',
  //         password: 'Jerome',
  //         token: 'token',
  //         role: 'SIMPLE_USER',
  //     },
  // })

  console.log({});

  const profilAlice = await prisma.profile.upsert({
    where: {},
    update: {},
    create: {
      userId: "1",
      pseudo: "Alice231",
      photoUrl: "url",
      gamePoint: 1000,
      spots: {
        create: {
          name: "lac",
          description: "lac",
          // rating: 5,
          isCanPark: false,
          isCanVisit: true,
          isTouristic: true,
          lat: 0,
          lng: 0,
          region: "Rhone-Alpes",
          spotPicture: {},
        },
      },
    },
  });
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

// itinaries: {
//     create: [
//       {
//         name:'itinéraire des Alpes',
//         description:'itinéraire des Alpes',
//         gamePoint: 200,
//         photoUrl: "url",

//         spots: {
//             create: {
//                 name: 'montagne',
//                 description: 'montagne',
//                 rating: 4,
//                 isCanPark: false,
//                 isCanVisit: true,
//                 isTouristic: false,
//                 lat: 0,
//                 lng: 0,
//             },
//         },
//       },
//     ],
// },
