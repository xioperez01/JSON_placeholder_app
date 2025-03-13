import { fetchUsersList } from "@/api/users";
import { ListPageSearchParams } from "@/types/shared";
import { User } from "@/types/users";
import { useQuery } from "@tanstack/react-query";

export const useUsersList = ({
  searchParams,
  initialData,
}: {
  searchParams: ListPageSearchParams;
  initialData: User[];
}) =>
  useQuery({
    queryKey: ["user-list", searchParams],
    queryFn: () => fetchUsersList(searchParams),
    initialData,
  });
