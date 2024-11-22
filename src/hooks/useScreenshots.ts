import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Screenshots from "../entities/Screenshots";
import APIClient from "../services/api-client";

const useScreenshots = (slug: number) => {
  const apiClient = new APIClient<Screenshots>(`/games/${slug}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", slug],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useScreenshots;
