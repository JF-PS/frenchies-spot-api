import {
  usersController,
  itinariesController,
  spotsController,
  spotPicturesController,
  productsController,
  favoritesController,
} from "../controllers";
import { ratingsController } from "../controllers/ratings";
import prisma from "../prisma";

const Query = {
  ...usersController.query,
  ...itinariesController.query,
  ...spotsController.query,
  ...spotPicturesController.query,
  ...ratingsController.query,
  ...favoritesController.query,
};

const Mutation = {
  ...usersController.mutation,
  ...itinariesController.mutation,
  ...spotsController.mutation,
  ...spotPicturesController.mutation,
  ...productsController.mutation,
  ...ratingsController.mutation,
  ...favoritesController.mutation,

  createTest: (parent: any, args: any, ctx: any) => {
    return prisma.test.create({ data: { text: args.text } });
  },
};

const resolvers = { Query, Mutation };

export default resolvers;
