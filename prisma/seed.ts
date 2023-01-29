import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const userData: Prisma.UserCreateInput[] = [
  {
    email: "alice@prisma.io",
    password: "Alice",
    token: "token",
    role: "USER_ADMIN",
    profile: {
      create: {
        pseudo: "Alice231",
        photoUrl: "url",
        gamePoint: 1000,
        spots: {
          create: [
            {
              name: "lac",
              description: "lac",
              isCanPark: false,
              isCanVisit: true,
              isTouristic: true,
              lat: 0,
              lng: 0,
              region: "Rhone-Alpes",
              spotPicture: {},
            },
            {
              name: "montagne",
              description: "montagne",
              isCanPark: true,
              isCanVisit: false,
              isTouristic: false,
              lat: 0,
              lng: 0,
              region: "Rhone-Alpes",
              spotPicture: {},
            },
          ],
        },
      },
    },
  },
  {
    email: "pierre@prisma.io",
    password: "Pierre",
    token: "token2",
    role: "SIMPLE_USER",
    profile: {
      create: {
        pseudo: "Pierre231",
        photoUrl: "url",
        gamePoint: 3000,
        spots: {
          create: [
            {
              name: "rivière",
              description: "petite rivière",
              isCanPark: false,
              isCanVisit: true,
              isTouristic: true,
              lat: 0,
              lng: 0,
              region: "Nouvelle Aquitaine",
              spotPicture: {},
            },
            {
              name: "mont Blanc",
              description: "montagne la plus haute d'Europe",
              isCanPark: true,
              isCanVisit: false,
              isTouristic: false,
              lat: 0,
              lng: 0,
              region: "Rhone-Alpes",
              spotPicture: {},
            },
          ],
        },
      },
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    prisma.user
      .create({
        data: u,
      })
      .then((_user) => {
        console.log(_user);
        console.log(`Created user with id: ${_user.id}`);
      });
  }
  console.log(`Seeding finished.`);
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

// async function main() {
//   const alice = await prisma.user.upsert({
//     where: { email: "alice@prisma.io" },
//     update: {},
//     create: {
//       email: "alice@prisma.io",
//       password: "Alice",
//       token: "token",
//       role: "USER_ADMIN",
//       profile: {
//         create: {
//           pseudo: "Alice231",
//           photoUrl: "url",
//           gamePoint: 1000,
//           spots: {
//             create: {
//               name: "lac",
//               description: "lac",
//               isCanPark: false,
//               isCanVisit: true,
//               isTouristic: true,
//               lat: 0,
//               lng: 0,
//               region: "Rhone-Alpes",
//               spotPicture: {},
//             },
//           },
//         },
//       },
//     },
//   });

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

//   const profilAlice = await prisma.profile.upsert({
//     where: {},
//     update: {},
//     create: {
//       userId: "1",
//       pseudo: "Alice231",
//       photoUrl: "url",
//       gamePoint: 1000,
//       spots: {
//         create: {
//           name: "lac",
//           description: "lac",
//           isCanPark: false,
//           isCanVisit: true,
//           isTouristic: true,
//           lat: 0,
//           lng: 0,
//           region: "Rhone-Alpes",
//           spotPicture: {},
//         },
//       },
//     },
//   });
// }
// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

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

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
