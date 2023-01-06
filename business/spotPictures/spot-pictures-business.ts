import { spotPicturesRepository } from "../../repositories";
import { SpotPictureDto } from "../../dto";

const spotPicturesBusiness = {
  /**
   * @param {SpotPictureDto} data
   */
  create: (data: SpotPictureDto) => {
    //TODO verify id spot (spot.getById)
    return spotPicturesRepository.create(data);
  },
};

export default spotPicturesBusiness;
