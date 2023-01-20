import { ratingsBusiness } from "../../business/ratings";
import { RatingDto } from "../../dto";
import { TContext } from "../../graphql/context";
import { codeErrors, throwError } from "../../utils";

const { UNAUTHENTICATED } = codeErrors;

export const ratingsMutation = {

  createRating: (_: undefined, data: RatingDto, context: TContext) => {
    const { user } = context;
    const profileId = user?.profile.id;
    if (!profileId) return throwError(UNAUTHENTICATED);

    return ratingsBusiness.create(data, profileId);
  },
}