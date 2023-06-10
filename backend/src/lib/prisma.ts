import { PrismaClient } from "@prisma/client";
import env from "../env.js";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (env.NODE_ENV === "development") {
  global.prisma = prisma;
  env.isDevelopment;
}

export default prisma;
