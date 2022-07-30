import { createRouter } from "./context";
import { getContestants } from "../../utils/getContestants";
import { z } from "zod";
import { prisma } from "../db/client";

export const votingRouter = createRouter()
  .query("getFighter", {
    async resolve() {
      const [firstFighter, secondFighter] = getContestants();

      if(firstFighter && secondFighter) {
        const fighters = await prisma.dbz.findMany({
          where: { id: { in: [firstFighter, secondFighter] } },
        });
  
        if (fighters.length !== 2 || !fighters[0] || !fighters[1]) {
          throw new Error("Fighter not found");
        }
        return { firstFighter: fighters[0], secondFighter: fighters[1] };
      }
      else {
        throw new Error("Fighter not found");
      }
    },
  })
  .mutation("vote", {
    input: z.object({
      voteFor: z.number(),
      voteAgainst: z.number(),
    }),
    async resolve({ input, ctx }) {

      if(!input){
        throw new Error("Send vote data");
      }
      const { voteFor, voteAgainst } = input;
      const result = await prisma.vote.create({
        data: {
          votedAgainstId: voteAgainst,
          votedForId: voteFor,
        },
      })
      return {vote: result};
    },
  });
