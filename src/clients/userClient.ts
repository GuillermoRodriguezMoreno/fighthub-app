import { UserPageResponseSchema } from "../domains/User";

export async function getUsers() {
  const res = await fetch("http://localhost:8080/api/v1/users");
    return UserPageResponseSchema.parse(await res.json());
}