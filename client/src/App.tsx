import { useState } from 'react';
import './App.css'

import { gql, useMutation, useLazyQuery } from "@apollo/client";

const GET_REPOS = gql`
  query getRepo {
    getRepo {
      id
      name
      url
    }
  }
`;

const CREATE_REPO_MUTATION = gql`
  mutation CreateNewRepo($data: RepoInput!) {
    createNewRepo(data: $data) {
      id
      name
      url
    }
  }
`;

type Repo = {
  id: string,
  name: string,
  url: string
}

function App() {
  const [getRepoList, { loading, error, data, refetch }] = useLazyQuery(GET_REPOS);
  const [repoInput, setRepoInput] = useState({ id: "", name: "", url: "" });
  const [showRepoList, setShowRepoList] = useState(true);

  const [createNewRepo, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(CREATE_REPO_MUTATION);

  if (loading || mutationLoading) return <h1>Loading ...</h1>;
  if (error || mutationError) return <p>Error</p>;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createNewRepo({
        variables: {
          data: {
            id: repoInput.id,
            name: repoInput.name,
            url: repoInput.url,
          },
        },
      });
      console.log('Repo créé avec succès', mutationData);
      refetch();
    } catch {
      console.error('Erreur lors de la création du repo', mutationError);
    }
  };

  const handleClick = () => {
    console.log("get repos list")
    setShowRepoList(true);
    getRepoList();
    refetch();
  }

  return (
    <>
      <div>
        <h1>My Repos</h1>
        {(!data || !showRepoList) && <h2>Clique sur le bouton pour fetch les repos</h2>}
        <button onClick={handleClick}>Get Repo List</button>
        <button onClick={() => setShowRepoList(false)}>Clear Repo List</button>
        {(showRepoList && data) && data.getRepo.map((el: Repo) => {
          return <div key={el.id} className='card'>
            <div><b>id:</b> {el.id}</div>
            <div><b>name:</b> {el.name}</div>
            <div><b>url:</b> <a>{el.url}</a></div>
          </div>
        })}
        <h1>Create new Repo</h1>
        <form onSubmit={submit}>
          <input
            name='id'
            placeholder='id'
            value={repoInput.id}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRepoInput({ ...repoInput, id: e.target.value })}
          />
          <input name='name' placeholder='name' value={repoInput.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRepoInput({ ...repoInput, name: e.target.value })}></input>
          <input name='url' placeholder='url' value={repoInput.url} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRepoInput({ ...repoInput, url: e.target.value })}></input>
          <button type='submit'>Create</button>
        </form>
      </div>
    </>
  )
}

export default App
