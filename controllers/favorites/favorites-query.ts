import { favoritesBusiness } from "../../business/favorites";

export const favoritesQuery = {
  favorites: () => {
    return favoritesBusiness.getAll();
  },
};
