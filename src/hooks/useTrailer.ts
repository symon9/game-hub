import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Trailer from "../entities/Trailer";
import APIClient from "../services/api-client";

const useTrailer = (slug: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${slug}/movies`);
  return useQuery({
    queryKey: ["trailer", slug],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useTrailer;
