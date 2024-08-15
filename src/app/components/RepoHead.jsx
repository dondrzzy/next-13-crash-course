import Link from 'next/link';
import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa';

FaCodeBranch

async function fetchRepo(name) {
  const res = await fetch(`https://api.github.com/repos/dondrzzy/${name}`, {
    next: { revalidate: 60 }
  })
  const repo = await res.json();
  return repo;
}

const RepoHead = async ({ name }) => {
  const repo = await fetchRepo(name);
  return (
    <>
      <h2>{name}</h2>
      <p className="repo-details">{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat"> 
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  )
}

export default RepoHead;
