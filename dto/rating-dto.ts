import { Profile, Rating, Spot } from "@prisma/client";

export type RatingDto = Pick<Rating, "rate">;

export interface CreateRatingsRepositoryDto
    extends Pick<Rating, "rate"> {
        spot: Pick<Spot, "id">;
        profile: Pick<Profile, "id">;
    }

export type RatingBusinessDto = Pick<Rating, "rate" | "profileId" | "spotId">;
