import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Game from "../entities/Game";
import ms from "ms";

const apiClient = new APIClient<Game>(`/games`);

const useGameDetail = (slug: string) => {
  return useQuery({
    queryKey: ["gameDetail", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });
};

export default useGameDetail;
