import { Log } from "@prisma/client";
import fastify from "fastify";
import prisma from "./prisma";

const server = fastify();

server.get("/logs", async () => {
  return prisma.log.findMany();
});

server.get<{ Params: { id: string } }>("/logs/:id", async (req) => {
  const { id } = req.params;
  return prisma.log.findUnique({ where: { id } });
});

server.post<{}, { body: any }>("/logs", async (req) => {
  const log = await prisma.log.create({
    // data: req.body as Log,
    data: req.body as any,
  });
  return log;
});

server.put<{ Params: { id: string } }>("/logs/:id", async (req: any) => {
  const { id } = req.params;
  const log = await prisma.log.update({
    where: {
      id: String(id),
    },
    data: req.body as any,
  });
  return log;
});

server.delete<{ Params: { id: string } }>("/logs/:id", async (req: any) => {
  const { id } = req.params;
  await prisma.log.delete({
    where: {
      id: String(id),
    },
  });
});

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
