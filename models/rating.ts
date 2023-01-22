import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const Rating = prisma.rating;

export default Rating;
