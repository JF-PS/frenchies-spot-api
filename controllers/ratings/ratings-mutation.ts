import { ratingsBusiness } from "../../business/ratings";
import { RatingDto } from "../../dto";
import { UpdateRatingDto } from "../../dto/rating-dto";
import { TContext } from "../../graphql/context";
import { codeErrors, GenericError } from "../../utils";

const { UNAUTHENTICATED } = codeErrors;

export const ratingsMutation = {
  createRating: (_: undefined, data: RatingDto, context: TContext) => {
    const { user } = context;
    const profileId = user?.profile.id;
    if (!profileId) throw new GenericError(UNAUTHENTICATED);

    const { spotId, rate } = data;
    return ratingsBusiness.create(rate, spotId, profileId);
  },

  updateRating: (_: undefined, data: UpdateRatingDto, context: TContext) => {
    const { user } = context;
    const profileId = user?.profile.id;
    if (!profileId) throw new GenericError(UNAUTHENTICATED);

    const { spotId, ratingId, rate } = data;

    return ratingsBusiness.update(rate, spotId, profileId, ratingId);
  },
};
