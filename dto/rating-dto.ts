import { Rating } from "@prisma/client";

export type RatingDto = Pick<Rating, "rate" | "spotId" | "userId">;
