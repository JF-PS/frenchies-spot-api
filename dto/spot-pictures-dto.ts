import { Spot_Picture } from "@prisma/client";

export type SpotPictureDto = Pick<Spot_Picture, "url" | "spotId">;