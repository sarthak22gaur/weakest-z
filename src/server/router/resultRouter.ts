import { createRouter } from "./context";
import { z } from "zod";
import { prisma } from "../db/client";

export const resultRouter = createRouter()
  .query("getResults", {
    async resolve() {
        return true;
      
    },
  });