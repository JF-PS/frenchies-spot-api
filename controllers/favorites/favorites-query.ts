import { favoritesBusiness } from "../../business/favorites";

export const favoritesQuery = {
  favorites: (_, data: { profileId: string }) => {
    const { profileId } = data;
    return favoritesBusiness.getProfileFavorites(profileId);
  },
};
