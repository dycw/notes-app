import type { Star } from "@prisma/client";
import prisma from "./lib/prisma.js";

export default async function getStars(): Promise<Star[] | void> {
  try {
    return await prisma.star.findMany();
  } catch (error) {
    console.error(error);
  }
}
