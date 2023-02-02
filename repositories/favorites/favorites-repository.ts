import { Favorite, Spot } from "../../models";

const favoritesRepository = {
  getAll: () => {
    return Favorite.findMany();
  },

  getById: (id: string) => {
    return Favorite.findUnique({
      where: {
        id,
      },
    });
  },

  create: (spotId: string, profileId: string) => {

    console.log("*****************")
    console.log("repo create spotId", spotId)
    console.log("repo create profileId", profileId)

    return Spot.update({
      where: {
        id: spotId,
      },
      data: {
        favorites: {
          create: {
            profileId,
          },
        },
      },
      include: { favorites: true },
    });
  },

  delete: (spotId: string, favoriteId: string) => {

    console.log("*****************")
    console.log("repo spotId", spotId)
    console.log("repo favoriteId", favoriteId)

    return Spot.update({
      where: {
        id: spotId,
      },
      data: {
        favorites: {
          delete: {
            id: favoriteId,
          },
        },
      },
      include: { favorites: true },
    });
  }
};

export default favoritesRepository;
