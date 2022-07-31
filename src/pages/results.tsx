import LeaderboardList from "../components/LeaderboardList";
import Image from "next/image";

import { appRouter } from "../server/router";
import superjson from "superjson";
import { trpc } from "../utils/trpc";
import { createSSGHelpers } from "@trpc/react/ssg";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Navbar from "../components/Navbar";

export async function getStaticProps() {
  const ssg = createSSGHelpers({
    router: appRouter,
    ctx: {},
    transformer: superjson, // optional - adds superjson serialization
  });

  const leaderboard = await ssg.fetchQuery("result.getResults");
  //   console.log(leaderboard);
  return {
    props: { trpcState: ssg.dehydrate(), leaderboard },
    revalidate: 21600,
  };
}

export type leaderBoardType = InferGetStaticPropsType<typeof getStaticProps>;

export default function ResultsPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { leaderboard } = props;
  const resultQuery = trpc.useQuery(["result.getResults"]);

  if (resultQuery.status !== "success") {
    return <>Loading...</>;
  }
  const { data } = resultQuery;
  //   console.log(data);
  return (
    <>
      <Navbar />
      <h1 className="text-3xl p-4 font-bold text-center">Leaderboards 😂</h1>
      <div className="flex justify-center items-center">
      <LeaderboardList data={data} />
      </div>
    </>
  );
}

// export default ResultsPage;
