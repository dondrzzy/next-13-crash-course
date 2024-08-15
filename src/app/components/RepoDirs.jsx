import Link from "next/link";

async function fetchContent(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`https://api.github.com/repos/dondrzzy/${name}/contents`, {
    next: { revalidate: 60 }
  })
  return await res.json();
}

const RepoDirs = async ({ name }) => {
  console.log('name=', name);
  const contents = await fetchContent(name);
  const dirs = contents.filter(content => content.type === 'dir')
  console.log('dirs', dirs);
  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map(dir => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default RepoDirs
