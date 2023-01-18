import { spotPicturesBusiness } from "../../business";
import { SpotPictureDto } from "../../dto/spot-pictures-dto";
import { TContext } from "../../graphql/context";
import { throwError, codeErrors } from "../../utils";
const { UNAUTHENTICATED } = codeErrors;

export const spotPicturesMutation = {
  /**
   * @param {SpotPictureDto} data
   */
  addSpotPicture: (_: undefined, data: SpotPictureDto, context: TContext) => {
    const { user } = context;
    const profileId = user?.profile.id;
    if (!profileId) return throwError(UNAUTHENTICATED);
    
    return spotPicturesBusiness.create(data);
  },
};
