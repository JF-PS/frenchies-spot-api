import { spotsBusiness } from "../../business";
import { CoordinateSpotDto } from "../../dto/spot-dto";
import { TContext } from "../../graphql/context";
import { throwError, codeErrors } from "../../utils";
const { UNAUTHENTICATED } = codeErrors;

export const spotsMutation = {
  /**
   * @param {CoordinateSpotDto} data
   */
  createSpot: (_: undefined, data: CoordinateSpotDto, context: TContext) => {
    const { user } = context;
    const profileId = user?.profile.id;
    if (!profileId) return throwError(UNAUTHENTICATED);

    return spotsBusiness.create(data, profileId);
  },
};
