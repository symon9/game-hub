import { Spinner } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: game, error, isLoading } = useTrailer(gameId);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  const first = game?.results[0];

  return first ? <video src={`${first.data[480]}`} controls poster={`${first.preview}`} /> : null;
};

export default GameTrailer;
