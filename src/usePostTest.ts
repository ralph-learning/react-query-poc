import { useMutation } from "react-query";
import axios from "axios";

async function newPost(postItem: any) {
  console.log(postItem);
  const { data } = await axios.post('http://localhost:4000/api/v1/something');
  return data;
};

export default function usePostSomething() {
  return useMutation(newPost, {
    onSuccess: (data, mutationVariables) => {
      console.log("onSuccess", data, mutationVariables);
    },
    onError: (error, mutationVariables) => {
      console.log('trigger toast', error, mutationVariables);
    },
  });
}
