import { createSSGHelpers } from '@trpc/react/ssg';
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

import LeaderboardList from '../components/LeaderboardList';
import { createContext } from '../server/router/context';
import { appRouter } from '../server/router';
import superjson from 'superjson';
import { trpc } from '../utils/trpc';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export async function getServerSideProps() {
  const ssg = createSSGHelpers({
    router: appRouter,
    ctx: createContext(),
    transformer: superjson, // optional - adds superjson serialization
  });

  await ssg.prefetchQuery('result.getResults');
  return {
    props: { trpcState: ssg.dehydrate() },
  };
}



export default function ResultsPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  const resultQuery = trpc.useQuery(['result.getResults']);
  if (resultQuery.status !== 'success') {
    return router.push('/');
  }
  const { data } = resultQuery;
  return (
    <>
      <Navbar />
      <h1 className="text-3xl p-4 font-bold text-center">Leaderboards 🏆</h1>
      <div className="flex justify-center items-center">
        <LeaderboardList data={data} />
      </div>
      <Footer />
    </>
  );
}
