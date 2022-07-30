import Image from "next/image";
import { trpc } from "..//utils/trpc";
import {
  inferMutationInput,
  inferMutationOutput,
  inferQueryOutput,
} from "../utils/trpc";

type fighterFromServer =
  inferQueryOutput<"voting.getFighter">["firstFighter"];


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
        <ul className="flex flex-row gap-16  mt-12 justify-around items-center text-5xl">
          <FighterItem
            fighter={props.firstFighter}
            vote={() => castVote(props.firstFighter.id)}
            disabled={voteMutation.isLoading}
          />
          <li>
            <button>vs</button>
          </li>
          <FighterItem
            fighter={props.secondFighter}
            vote={() => castVote(props.secondFighter.id)}
            disabled={voteMutation.isLoading}
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
      <button onClick={() => props.vote()}>
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
