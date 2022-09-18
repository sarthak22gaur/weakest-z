import Image from 'next/image';
import { inferQueryOutput } from '../utils/trpc';

type result = inferQueryOutput<'result.getResults'>;
const LeaderboardList: React.FC<{
  data: result;
}> = (props) => {
  const scoreData = props.data.map((item) => {
    let score = 0;
    if (item._count.votesAgainst + item._count.votesFor !== 0) {
      score =
        (100 * item._count.votesFor) /
        (item._count.votesAgainst + item._count.votesFor);
    }
    return {
      name: item.name,
      url: item.img_url,
      score: score,
    };
  });
  scoreData.sort((a, b) => b.score - a.score);
  const podium = scoreData.slice(0, 3);
  const lb = scoreData.slice(3);

  return (
    <div className="grid border-2 max-w-2xl justify-center items-center ">
      <ResultsPodium fighter={podium} />
      {lb.map((curr, index) => {
        return (
          <ListItem
            name={curr.name}
            url={curr.url}
            score={curr.score}
            key={index}
          />
        );
      })}
    </div>
  );
};

export const ResultsPodium: React.FC<{
  fighter: Array<{ name: string; url: string; score: number }>;
}> = (props) => {
  return (
    <div className="flex justify-center items-end">
      <div className="flex flex-col justify-center text-center">
        <PodPlace
          url={
            props.fighter[1]?.url
              ? props.fighter[1].url
              : 'https://cdn.myanimelist.net/images/characters/10/238647.jpg'
          }
          name={props.fighter[1]?.name ? props.fighter[1].name : '!'}
          position="🥈"
        />
        <div className="h-12 bg-orange-400"></div>
      </div>
      <div className="flex flex-col justify-start text-center">
        <PodPlace
          url={
            props.fighter[0]?.url
              ? props.fighter[0].url
              : 'https://cdn.myanimelist.net/images/characters/10/238647.jpg'
          }
          name={props.fighter[0]?.name ? props.fighter[0].name : '!'}
          position="🥇"
        />
        <div className="h-24 bg-orange-400"></div>
      </div>
      <div className="flex flex-col justify-end text-center">
        <PodPlace
          url={
            props.fighter[2]?.url
              ? props.fighter[2].url
              : 'https://cdn.myanimelist.net/images/characters/10/238647.jpg'
          }
          name={props.fighter[2]?.name ? props.fighter[2].name : '!'}
          position="🥉"
        />
        <div className="h-4 bg-orange-400"></div>
      </div>
    </div>
  );
};

const PodPlace: React.FC<{ position: string; name: string; url: string }> = (
  props
) => {
  return (
    <div className="p-2 w-fit">
      <p className="text-3xl pb-2">{props.position}</p>
      <Image
        className="rounded-full"
        width="100px"
        height="150px"
        src={props.url}
        alt=""
      />
      <p className="text-xl font-medium">{props.name}</p>
    </div>
  );
};

const ListItem: React.FC<{ score: number; name: string; url: string }> = (
  props
) => {
  return (
    <div className="relative flex justify-between items-center border-b-2 p-4 text-white">
      <div className="flex gap-8 items-center">
        <Image
          className="rounded-2xl justify-start"
          width="50px"
          height="50px"
          src={props.url}
          alt=""
        />
        <p className="justify-center">{props.name}</p>
      </div>
      <p className="text-xl font-medium justify-end">
        {props.score.toFixed(2)}
      </p>
    </div>
  );
};

export default LeaderboardList;
