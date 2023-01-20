import { Profile, Rating, Spot } from "@prisma/client";

export type RatingDto = Pick<Rating, "rate">;

export type RatingBusinessDto = Pick<Rating, "rate" | "profileId" | "spotId">;
