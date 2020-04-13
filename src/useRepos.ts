import { useQuery } from "react-query";
import axios from "axios";

async function getRepoByUser(_: any, user: string) {
  const { data } = await axios.get(
    `https://api.github.com/users/${user}/repos`
  );

  return data;
};

export default function useRepo(user: string) {
  return useQuery(["repo", user], getRepoByUser);
}
