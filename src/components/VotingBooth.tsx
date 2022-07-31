import Image from "next/image";
import { trpc } from "..//utils/trpc";
import {
  inferMutationInput,
  inferMutationOutput,
  inferQueryOutput,
} from "../utils/trpc";

type fighterFromServer = inferQueryOutput<"voting.getFighter">["firstFighter"];

const VotingBooth: React.FC<{
  firstFighter: fighterFromServer;
  secondFighter: fighterFromServer;
  refetch: () => void;
}> = (props) => {
  const voteMutation = trpc.useMutation(["voting.vote"]);

  const castVote = (id: number) => {
    if (!props.firstFighter || !props.secondFighter) {
      return;
    }

    if (props.firstFighter.id === id) {
      voteMutation.mutate({
        voteAgainst: props.secondFighter.id,
        voteFor: props.firstFighter.id,
      });
    } else {
      voteMutation.mutate({
        voteAgainst: props.firstFighter.id,
        voteFor: props.secondFighter.id,
      });
    }
    props.refetch();
  };

  return (
    <>
      {props.firstFighter && props.secondFighter && (
        <div className="flex flex-col md:flex-row gap-4 h-fit justify-center mt-12 text-white items-center text-5xl">
          <FighterItem
            fighter={props.firstFighter}
            vote={() => castVote(props.firstFighter.id)}
            disabled={voteMutation.isLoading}
          />
          <span className="text-black">vs</span>
          <FighterItem
            fighter={props.secondFighter}
            vote={() => castVote(props.secondFighter.id)}
            disabled={voteMutation.isLoading}
          />
        </div>
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
    <>
      <li className="flex flex-col md:grayscale-[60%] hover:grayscale-0 md:hover:text-orange-500 md:hover:scale-[1.05] transition-all justify-center items-center gap-4 text-2xl rounded font-regular w-80 text-center cursor-pointer">
        <div className="relative w-36 md:w-72 h-48 md:h-96">
          <Image
            className="rounded-2xl relative"
            layout="fill"
            onClick={() => props.vote()}
            src={props.fighter?.img_url}
            alt=""
          />
        </div>
        <div>
          <h2>{props.fighter?.name}</h2>
        </div>
      </li>
    </>
  );
};

export default VotingBooth;
