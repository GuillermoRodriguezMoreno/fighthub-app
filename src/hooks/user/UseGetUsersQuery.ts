import { getUsers } from "@/clients/userClient";
import { useQuery } from "@tanstack/react-query";

export function UseGetUsersQuery() {
  return useQuery({queryKey: ["users"], queryFn: async () => getUsers()});
}