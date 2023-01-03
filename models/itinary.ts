import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const Itinary = prisma.itinary;

export default Itinary;
