import { fetchUsersList } from "@/api/users";
import { useQuery } from "@tanstack/react-query";

export const useGroupList = () =>
  useQuery({
    queryKey: ["user-list"],
    queryFn: () => fetchUsersList(),
    enabled: true,
    refetchOnWindowFocus: false,
  });
