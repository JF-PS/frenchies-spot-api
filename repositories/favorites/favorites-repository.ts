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

  update: (favoriteId: string, spotId: string, profileId: string ) => {
    return Spot.update({
      where: {
        id: spotId,
      },
      data: {
        favorites: {
          update: {
            where: {
              id: favoriteId,
            },
            data: {
              profileId,
            }
          },
        },
      },
      include: { favorites: true },
    });
  },

};

export default favoritesRepository;
