import { Prisma } from "@prisma/client";
import prisma from "../prisma";

const userData: Prisma.UserCreateInput[] = [
  {
    email: "alice@prisma.io",
    password: "Alice",
    token: "token",
    role: "USER_ADMIN",
    profile: {
      create: {
        pseudo: "AliceMerveille",
        photoUrl: "url",
        gamePoint: 0,
        spots: {
          create: [
            {
              name: "La dune du Pilat",
              description: `La dune du Pilat gardienne du bassin d’Arcachon, mérite son titre de plus haute dune d’Europe. Unique par ses dimensions : 117 m de hauteur, 2,7 km de longueur, 500 m de largeur, son ascension est largement récompensée par la vue que nous réserve le site, il est d’une beauté exceptionnelle.
              Aux couleurs marines, vert des pins, doré du sable s’ajoute le parfum d’iode et d’odeurs balsamiques.`,
              isCanPark: false,
              isCanVisit: true,
              isTouristic: true,
              lat: 44.5889775,
              lng: -1.2142045,
              region: "Nouvelle-Aquitaine, Gironde",
              spotPicture: {
                create: [
                  {
                    url: "https://res.cloudinary.com/db00tntyg/image/upload/v1674996522/travelerSpot/dune_du_pilat.png",
                  },
                ],
              },
            },
            {
              name: "Le pic de la Rhune",
              description: `Au Pays Basque, La Rhune protège jalousement la côte. Ce site est un lieu enchanteur parcouru de pistes pastorales, d’où s’y dégage une ambiance mystérieuse et secrète. On y découvre des cromlechs, ces blocs dressés en cercle orientés vers le soleil, on y entend de nombreuses légendes, on y rencontre des pottoks petits chevaux autochtones à demi sauvages.
              Et puis n’hésitez pas à emprunter le Petit Train de la Rhune, train à crémaillère : un trajet de 30 minutes à 8 km/h.`,
              isCanPark: false,
              isCanVisit: true,
              isTouristic: true,
              lat: 43.30888,
              lng: -1.63507,
              region: "Nouvelle-Aquitaine, Pays-Basque",
              spotPicture: {
                create: [
                  {
                    url: "https://res.cloudinary.com/db00tntyg/image/upload/v1674996742/travelerSpot/pic_de_la_rhune.png",
                  },
                ],
              },
            },
            {
              name: "Parc National Pyrénées",
              description: `Un panorama inouï vous attend en Béarn. Vous êtes en haute montagne, dans le Parc National des Pyrénées. En arrivant à Artouste on assiste à une extraordinaire variété de paysages où alternent une kyrielle d’aiguilles, de vastes pâturages, ou de grandes étendues de forêts de hêtres ou de sapins, de lacs... Une superbe occasion pour voir voler au-dessus de vos têtes : aigles royaux, faucons pèlerins ou vautours fauves veillant sur cette vallée de rêve.
              Impressionnant, le petit train d’Artouste (à 2000 m d’altitude) qui se déplace le long de la ligne ferroviaire la plus haute d’Europe. Visite à faire absolument.`,
              isCanPark: true,
              isCanVisit: false,
              isTouristic: true,
              lat: 42.8962287902832,
              lng: -0.12042045593261719,
              region: "Nouvelle-Aquitaine et Occitanie",
              spotPicture: {
                create: [
                  {
                    url: "https://res.cloudinary.com/db00tntyg/image/upload/v1674997283/travelerSpot/parc_national_des_pyrenees.png",
                  },
                ],
              },
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
        pseudo: "PierrePrésent",
        photoUrl: "url",
        gamePoint: 0,
        spots: {
          create: [
            {
              name: "Falaises Meschers",
              description: `Au sud de Royan, les falaises de Meschers-sur-Gironde longeant la « Côte de beauté » et faisant face au Médoc, surplombent le plus grand estuaire d’Europe à plus de 30 mètres de haut. Un patrimoine inestimable parcouru de grottes et d’habitations troglodytiques sur une distance de 1500 m. Les grottes du Régulus et de Matata sont aménagées et ouvertes au public. Le plus bel endroit, pour observer les falaises blanches de Meschers, se situe dans le magnifique village de Talmont-sur-Gironde.`,
              isCanPark: true,
              isCanVisit: false,
              isTouristic: true,
              lat: 45.557484,
              lng: -0.956417,
              region: "Nouvelle-Aquitaine, Charente-Maritime",
              spotPicture: {
                create: [
                  {
                    url: "https://res.cloudinary.com/db00tntyg/image/upload/v1674997660/travelerSpot/falaises_meschers.png",
                  },
                ],
              },
            },
            {
              name: "Bort en Limousin",
              description: `Au cœur du Massif Central, nous sommes dans la vallée de la Haute Dordogne. A 437 m d’altitude les orgues de Bort sommeillent. C’est une merveille naturelle surgie des entrailles de la Terre.
              Monument naturel composé d’une succession de colonnes verticales qui évoquent l’instrument de musique. `,
              isCanPark: true,
              isCanVisit: true,
              isTouristic: false,
              lat: 45.76667,
              lng: 1.7,
              region: "Nouvelle-Aquitaine, Corrèze",
              spotPicture: {
                create: [
                  {
                    url: "https://res.cloudinary.com/db00tntyg/image/upload/v1674998074/travelerSpot/bort_en_limousin.png",
                  },
                ],
              },
            },
            {
              name: "Forêt des Landes",
              description: `La forêt des Landes de Gascogne est un massif forestier du sud-ouest de la France situé en Nouvelle-Aquitaine. D'une superficie de près d'un million d'hectares, elle est la plus grande forêt artificielle d'Europe occidentale conduite intensivement et majoritairement en une monoculture de pins maritimes. `,
              isCanPark: true,
              isCanVisit: true,
              isTouristic: false,
              lat: 43.9359823,
              lng: -0.9236623,
              region: "Nouvelle-Aquitaine, Les Landes",
              spotPicture: {
                create: [
                  {
                    url: "https://res.cloudinary.com/db00tntyg/image/upload/v1674998414/travelerSpot/foret_des_landes.jpg",
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
  {
    email: "jerome@prisma.io",
    password: "Jerome",
    token: "token3",
    role: "SIMPLE_USER",
    profile: {
      create: {
        pseudo: "JeromeDeLaDrome",
        photoUrl: "url",
        gamePoint: 0,
        spots: {
          create: [
            {
              name: "Golfe du Morbihan",
              description: `Le golfe du Morbihan est une mer intérieure d'une longueur est-ouest de 20 kilomètres environ parsemée de nombreuses îles et îlots. C'est une destination prisée pour la beauté de ses paysages couvrant une centaine de kilomètres carrés, située en Bretagne, dans le département du Morbihan auquel il a donné son nom.`,
              isCanPark: false,
              isCanVisit: false,
              isTouristic: true,
              lat: 47.562968,
              lng: -2.769661,
              region: "Bretagne, Morbihan",
              spotPicture: {
                create: [
                  {
                    url: "https://res.cloudinary.com/db00tntyg/image/upload/v1674999175/travelerSpot/golfe_du_morbihan.png",
                  },
                ],
              },
            },
            {
              name: "Dentelles de Montmirail",
              description: `Les Dentelles de Montmirail, situées dans le département français de Vaucluse, sont une chaîne de montagne qui marque la limite occidentale des monts de Vaucluse. Elles sont situées au nord de Carpentras, au sud de Vaison-la-Romaine et à l'ouest du mont`,
              isCanPark: true,
              isCanVisit: false,
              isTouristic: false,
              lat: 44.179423,
              lng: 5.060538,
              region: "Povence-Alpes-Côte d'Azur, Vaucluse",
              spotPicture: {
                create: [
                  {
                    url: "https://res.cloudinary.com/db00tntyg/image/upload/v1674999260/travelerSpot/dentelles_de_montmirail.png",
                  },
                ],
              },
            },
            {
              name: "Gorges du Toulourenc",
              description: `Gorges boisées où randonner et patauger avec petites plages et bassins naturels au pied du mont Ventoux.`,
              isCanPark: false,
              isCanVisit: true,
              isTouristic: false,
              lat: 44.202515,
              lng: 5.291937,
              region: "AUvergne-Rhône-Alpes, Drôme",
              spotPicture: {
                create: [
                  {
                    url: "https://res.cloudinary.com/db00tntyg/image/upload/v1674999639/travelerSpot/gorges_du_toulourenc.png",
                  },
                ],
              },
            },
            {
              name: "Forêt de Broceliande",
              description: `La forêt de Paimpont, appelée forêt de Brécilien jusqu'au XVᵉ siècle, souvent identifiée à Brocéliande, forêt mythique et enchantée de la légende arthurienne, est située autour de Paimpont dans le département d'Ille-et-Vilaine en Bretagne, à environ 30 km au sud-ouest de Rennes.`,
              isCanPark: false,
              isCanVisit: false,
              isTouristic: false,
              lat: 48.030483,
              lng: -2.132837,
              region: "Bretagne",
              spotPicture: {
                create: [
                  {
                    url: "https://res.cloudinary.com/db00tntyg/image/upload/v1674999852/travelerSpot/foret_de_broceliande.png",
                  },
                ],
              },
            },
            {
              name: "Pic du Canigou",
              description: `Le pic du Canigou est le haut sommet oriental de la chaîne des Pyrénées, sur le massif du Canigou. Il est situé dans le Conflent, département des Pyrénées-Orientales, et culmine à 2 784 mètres d'altitude.`,
              isCanPark: true,
              isCanVisit: true,
              isTouristic: true,
              lat: 42.518597,
              lng: 2.455712,
              region: "76",
              spotPicture: {
                create: [
                  {
                    url: "https://res.cloudinary.com/db00tntyg/image/upload/v1675000410/travelerSpot/pic_du_canigou.png",
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
  {
    email: "`brice`@prisma.io",
    password: "Brice",
    token: "token",
    role: "USER_ADMIN",
    profile: {
      create: {
        pseudo: "BriceDeNice",
        photoUrl: "url",
        gamePoint: 0,
        spots: {
          create: [
            {
              name: "Colorado Provençal",
              description: `Le Colorado provençal est un ancien site industriel, exploité de la fin du XVIIᵉ siècle jusqu'en 1992, quand le dernier ocrier prit sa retraite.`,
              isCanPark: true,
              isCanVisit: true,
              isTouristic: true,
              lat: 43.9195564,
              lng: 5.5005963,
              region: "Provence-Alpes-Côte d'Azur, Vaucluse",
              spotPicture: {
                create: [
                  {
                    url: "https://res.cloudinary.com/db00tntyg/image/upload/v1675335702/travelerSpot/colorado_provencal.jpg",
                  },
                ],
              },
            },
            {
              name: "Calanques de Marseille",
              description: `Les Calanques, connues aussi sous l'appellation calanques de Marseille ou calanques de Cassis ou encore massif des Calanques, sont constituées d'une succession d'anses et de criques s'étendant sur plus de vingt kilomètres de côtes sur la mer Méditerranée`,
              isCanPark: false,
              isCanVisit: true,
              isTouristic: true,
              lat: 43.228732,
              lng: 5.40348,
              region: "Provence-Alpes-Côte d'Azur, Bouches-du-Rhône",
              spotPicture: {
                create: [
                  {
                    url: "https://res.cloudinary.com/db00tntyg/image/upload/v1675336002/travelerSpot/calanques_de_marseille.jpg",
                  },
                ],
              },
            },
            {
              name: "Lac de Serre-Ponçon",
              description: `Au cœur des Alpes du sud, le lac de Serre-Ponçon est une destination de rêve pour les amateurs de loisirs nautiques, de baignade et de bronzage !`,
              isCanPark: true,
              isCanVisit: true,
              isTouristic: false,
              lat: 44.5000426,
              lng: 6.3163021,
              region: "Provence-Alpes-Côte d'Azur, Hautes-Alpes",
              spotPicture: {
                create: [
                  {
                    url: "https://res.cloudinary.com/db00tntyg/image/upload/v1675336306/travelerSpot/lac_de%20_serre-poncon.jpg",
                  },
                ],
              },
            },
            {
              name: "Lafiteria - Saint-Jean de Luz",
              description: `Plage de sable et galets, elle se situe prés des campings du quartier d’Acotz. Cette plage est le coin préféré des surfeurs confirmés qui affronteront la vague gauche de rochers située un peu au large.`,
              isCanPark: true,
              isCanVisit: false,
              isTouristic: false,
              lat: 43.38871,
              lng: -1.66267,
              region: "Nouvelle-Aquitaine, Pays-Basque",
              spotPicture: {
                create: [
                  {
                    url: "https://res.cloudinary.com/db00tntyg/image/upload/v1675336550/travelerSpot/lafiteria_saint-jean_de_luz.jpg",
                  },
                ],
              },
            },
            {
              name: "Guéthary",
              description: `Guéthary est un village typiquement basque, ancien port de pêche à la baleine`,
              isCanPark: true,
              isCanVisit: false,
              isTouristic: false,
              lat: 43.423001,
              lng: -1.6062693,
              region: "Nouvelle-Aquitaine, Pays-Basque",
              spotPicture: {
                create: [
                  {
                    url: "https://res.cloudinary.com/db00tntyg/image/upload/v1675336918/travelerSpot/guethary.jpg",
                  },
                ],
              },
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
