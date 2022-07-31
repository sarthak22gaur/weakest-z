// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { votingRouter } from "./votingRouter";
import { resultRouter } from "./resultRouter";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("voting.", votingRouter)
  .merge("result.", resultRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
