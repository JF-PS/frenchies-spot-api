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

  delete: (favoriteId: string, spotId: string) => {
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
    });
  }
};

export default favoritesRepository;
