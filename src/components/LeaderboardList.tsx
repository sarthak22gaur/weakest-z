import Image from "next/image";
import type { leaderBoardType } from "../pages/results";

const LeaderboardList: React.FC<{
  data: {
    id: number;
    name: string;
    img_url: string;
    _count: {
      votesFor: number;
      votesAgainst: number;
    };
  }[];
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
  console.log(podium);

  return (
    <div className="grid border-2 max-w-2xl justify-center items-center ">
      {scoreData.map((curr, index) => {
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
  fighter: leaderBoardType["leaderboard"][number];
}> = (props) => {
  return (
    <div className="flex justify-center gap-16 h-96 pt-16">
      <div className="flex flex-col justify-center text-center">
        <PodPlace
          url="https://cdn.myanimelist.net/images/characters/10/238647.jpg"
          name="Test 1"
          position="👑👑"
        />
      </div>
      <div className="flex  flex-col justify-start text-center">
        <PodPlace
          url="https://cdn.myanimelist.net/images/characters/10/238647.jpg"
          name="Test 2"
          position="👑👑👑"
        />
      </div>
      <div className="flex flex-col justify-end text-center">
        <PodPlace
          url="https://cdn.myanimelist.net/images/characters/10/238647.jpg"
          name="Test 3"
          position="👑"
        />
      </div>
    </div>
  );
};

const PodPlace: React.FC<{ position: string; name: string; url: string }> = (
  props
) => {
  return (
    <>
      <p>{props.position}</p>
      <Image
        className="rounded-2xl"
        width="150px"
        height="200px"
        src={props.url}
        alt=""
      />
      <p className="pt-4 text-xl font-medium">{props.name}</p>
    </>
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
      <p className="text-xl font-medium justify-end">{props.score.toFixed(2)}</p>
    </div>
  );
};

export default LeaderboardList;
