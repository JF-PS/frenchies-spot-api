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

      console.log("*****************")
      console.log("mutation data", data)

      const { spotId, id: favoriteId } = data;

      console.log("mutation spotId", spotId)
      console.log("mutation favoriteId", favoriteId)
      console.log("mutation profileId", profileId)

      return favoritesBusiness.createOrDelete(spotId, favoriteId, profileId);
    },
};
