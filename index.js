"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const prisma_1 = __importDefault(require("./prisma"));
const server = (0, fastify_1.default)();
server.get("/logs", () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.log.findMany();
}));
server.get("/logs/:id", (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    return prisma_1.default.log.findUnique({ where: { id } });
}));
server.post("/logs", (req) => __awaiter(void 0, void 0, void 0, function* () {
    const log = yield prisma_1.default.log.create({
        // data: req.body as Log,
        data: req.body,
    });
    return log;
}));
server.put("/logs/:id", (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const log = yield prisma_1.default.log.update({
        where: {
            id: String(id),
        },
        data: req.body,
    });
    return log;
}));
server.delete("/logs/:id", (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield prisma_1.default.log.delete({
        where: {
            id: String(id),
        },
    });
}));
server.listen(8080, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
