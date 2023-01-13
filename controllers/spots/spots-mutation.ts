import { spotsBusiness } from "../../business";
import { SpotDto, UpdateSpotDto } from "../../dto/spot-dto";
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

  updateSpot: (_: undefined, data: UpdateSpotDto, context: TContext) => {
    const { user } = context;
    const profileId = user?.profile.id;
    if (!profileId) return throwError(UNAUTHENTICATED);
    const { id: spotId } = data;

    return spotsBusiness.update(data, profileId, spotId);
  },

  deleteSpot: (_: undefined, data: UpdateSpotDto, context: TContext) => {
    const { user } = context;
    const profileId = user?.profile.id;
    if (!profileId) return throwError(UNAUTHENTICATED);
    const { id: spotId } = data;

    return spotsBusiness.delete(data, profileId, spotId);
  },
};
