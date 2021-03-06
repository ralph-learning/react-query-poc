import React from 'react'
import { ReactQueryConfigProvider } from 'react-query';

import useGithubUser from "./useGithubUser";
import useRepos  from './useRepos';
import useMutationPost from './usePostTest';

const queryConfig = { refetchAllOnWindowFocus: false }

function App() {
  const { data, isFetching } = useGithubUser('ralfting');
  const { data: dataRepo, isFetching: isFetchingRepo } = useRepos('ralfting')

  const [mutate] = useMutationPost()

  if(isFetching || isFetchingRepo) { return <p>loading...</p> };

  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <div style={{ padding: '10px' }}>
        <img src={data.avatar_url} alt="avatar" />
        <p>Login: {data.login}</p>
        <p>Company: {data.company}</p>
        <p>
          Repo Count: {dataRepo.length}
        </p>

        <button onClick={() => mutate({ title: 'Hello' })}>Click Mutation</button>
      </div>
    </ReactQueryConfigProvider>
  );
}

export default App;
