import { createRouter } from "./context";
import { z } from "zod";
import { prisma } from "../db/client";

export const resultRouter = createRouter()
  .query("getResults", {
    async resolve() {
      return await prisma.dbz.findMany({
        select: {
          id: true,
          name: true,
          img_url: true,
          _count: {
            select: {
              votesFor: true,
              votesAgainst: true,
            },
          },
        },
      });      
    },
  });