import * as React from 'react';

async function getUsers(param: string) {
  const response = await fetch(`https://api.github.com/users/${param}`);
  return response.json();
}

async function getRepos(param: string) {
  const response = await fetch(`https://api.github.com/users/${param}/repos`);
  return response.json();
}

export default async function DetailUser({params}: {params: {slug: string}}) {
  const datauser = await getUsers(params.slug);
  const datarepo = await getRepos(params.slug);

  // wait until both API requests are ready
  const [user, repo] = await Promise.all([datauser, datarepo]);

  return (
    <div>
      <h1>Detail User : {params.slug}</h1>
      <div>
        {JSON.stringify(user)}
      </div>
      <br />
      <h1>Detail Repo : {params.slug}</h1>
      <div>
        {JSON.stringify(repo)}
      </div>
    </div>
  ); 
}