import {
  usersController,
  itinariesController,
  spotsController,
  spotPicturesController,
  productsController,
} from "../controllers";
import { PrismaClient } from "@prisma/client";
import { ratingsController } from "../controllers/ratings";
import prisma from "../prisma";

const Query = {
  ...usersController.query,
  ...itinariesController.query,
  ...spotsController.query,
  ...spotPicturesController.query,
  ...ratingsController.query,
};

const Mutation = {
  ...usersController.mutation,
  ...itinariesController.mutation,
  ...spotsController.mutation,
  ...spotPicturesController.mutation,
  ...productsController.mutation,
  ...ratingsController.mutation,
  createTest: (parent: any, args: any, ctx: any) => {
    return prisma.test.create({ data: { text: args.text } });
  },
};

const resolvers = { Query, Mutation };

export default resolvers;

//   Mutation: {
//     addBlogPost: (_parent, { text }, _context) => {
//       return prisma.blogPost.create({ data: { text } });
//     },
//     editBlogPost: (_parent, { id, text }, _context) => {
//       return prisma.blogPost.update({ where: { id }, data: { text } });
//     },
//     deleteBlogPost: (_parent, { id }, _context) => {
//       return prisma.blogPost.delete({ where: { id } });
//     },
//   },
