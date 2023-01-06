import { SpotPictureDto } from "../../dto";
import SpotPicture from "../../models/spotPicture";

const spotPicturesRepository = {
    /**
   * @param {SpotPictureDto} data
   */
    create: (data: SpotPictureDto) => {
        return SpotPicture.create({
            data: {
            ...data
            }
        });
    },
};

export default spotPicturesRepository;
