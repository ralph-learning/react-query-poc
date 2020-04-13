import { useQuery } from "react-query";
import axios from "axios";

async function getGithubByUser(_: any, user: string) {
  const { data } = await axios.get(
    `https://api.github.com/users/${user}`
  );

  return data;
};

export default function useUser(user: string) {
  return useQuery(["githubUser", user], getGithubByUser);
}
