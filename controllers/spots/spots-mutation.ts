import { spotsBusiness } from "../../business";
import { SpotDto } from "../../dto";
import { TContext } from "../../graphql/context";
import { throwError, codeErrors } from "../../utils";
const { UNAUTHENTICATED } = codeErrors;

export const spotsMutation = {
  /**
   * @param {SpotDto} data
   */
  createSpot: (_: undefined, data: SpotDto, context: TContext) => {
    const { user } = context;
    const profileId = user?.profile.id;
    if (!profileId) return throwError(UNAUTHENTICATED);

    return spotsBusiness.create(data, profileId);
  },
};
