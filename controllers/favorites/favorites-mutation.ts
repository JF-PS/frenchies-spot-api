import { favoritesBusiness } from "../../business";
import { UpdateFavoriteDto } from "../../dto";
import { TContext } from "../../graphql/context";
import { codeErrors, GenericError } from "../../utils";
const { UNAUTHENTICATED } = codeErrors;

export const favoritesMutation = {
    toggleFavorite: (
      _: undefined,
      data: UpdateFavoriteDto,
      context: TContext
    ) => {
      const { user } = context;
      const profileId = user?.profile.id;
      if (!profileId) throw new GenericError(UNAUTHENTICATED);

      console.log("*******************")
      console.log(data)
      const { spotId, id: favoriteId } = data;
      console.log("spotId mutation:", spotId, "favoriteId:", favoriteId)

      return favoritesBusiness.toggleFavorite(spotId, favoriteId, profileId);
    },
};
