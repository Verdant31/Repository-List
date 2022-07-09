import { useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  const initialRepositories = [
    {
      name: 'The React Universe',
      description: 'A study of React',
      url: 'https://github.com/Verdant31/Cleaned-React-Project'
    },
    {
      name: 'Unform',
      description: 'Forms in React',
      url: '/'
    }
  ]
  const [repositories, setRepositories ] = useState(initialRepositories);
  
  function addRepository() {
    const newRepository ={
      name: 'New Repository',
      description: 'New description',
      url: 'New url'
    }
    setRepositories([...repositories, newRepository]);
  }
  return (
    <section>
      <h1>Repositories List</h1>
      <ul>
        {repositories.map(repository => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
      <button onClick={addRepository}>
        Add Repository
      </button>
    </section>
  )
}
