import { ratingsBusiness } from "../../business/ratings";
import { CreateRatingsRepositoryDto, RatingBusinessDto } from "../../dto/rating-dto";
import { TContext } from "../../graphql/context";
import { codeErrors, throwError } from "../../utils";

const { UNAUTHENTICATED } = codeErrors;

export const ratingsMutation = {

  createRating: (_: undefined, data: RatingBusinessDto, context: TContext) => {
    const { user } = context;
    const profileId = user?.profile.id;
    if (!profileId) return throwError(UNAUTHENTICATED);
    const { spotId } = data;

    return ratingsBusiness.create(data, profileId, spotId);
  },
}