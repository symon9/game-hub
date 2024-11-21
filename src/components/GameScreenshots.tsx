import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshot, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;

  if (error || !screenshot) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {screenshot.results.map((img) => (
        <Image key={img.id} src={img.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
