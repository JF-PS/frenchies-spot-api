import { Rating } from "@prisma/client";

export type RatingDto = Pick<Rating, "rate" | "profileId" | "spotId">;
