import Image from "next/image";
import { trpc } from "..//utils/trpc";
import {
  inferMutationInput,
  inferMutationOutput,
  inferQueryOutput,
} from "../utils/trpc";

type fighterFromServer =
  inferQueryOutput<"fighters.getFighter">["firstFighter"];


const VotingBooth: React.FC<{
  firstFighter: fighterFromServer;
  secondFighter: fighterFromServer;
}> = (props) => {
  const voteMutation = trpc.useMutation(["fighters.vote"]);

  const castVote = (id: number) => {
    if (!props.firstFighter || !props.secondFighter) {
      return;
    }

    if (props.firstFighter.id === id) {
      voteMutation.mutate(["fighters.vote", { fighterId: props.firstFighter.id }]);
     
    } else {
    }
  };

  // const fetchingNext = voteMutation.isLoading || isLoading;

  return (
    <>
      {props.firstFighter && props.secondFighter && (
        <ul className="flex flex-row gap-16 justify-around items-center text-5xl">
          <FighterItem
            fighter={props.firstFighter}
            vote={() => castVote(props.firstFighter.id)}
            disabled={true}
          />
          <li>
            <button>vs</button>
          </li>
          <FighterItem
            fighter={props.secondFighter}
            vote={() => castVote(props.secondFighter.id)}
            disabled={true}
          />
        </ul>
      )}
    </>
  );
};

const FighterItem: React.FC<{
  fighter: fighterFromServer;
  vote: () => void;
  disabled: boolean;
}> = (props) => {
  return (
    <li className="flex flex-col flex-shrink items-center gap-4 text-2xl rounded font-regular w-80 h-96 text-center">
      <button>
        <Image
          className="rounded-2xl"
          width="250px"
          height="350px"
          src={props.fighter?.img_url}
          alt=""
        />
      </button>
      <span>{props.fighter?.name}</span>
    </li>
  );
};

export default VotingBooth;
