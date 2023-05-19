import Link from 'next/link';
import * as React from 'react';
import useSWR from 'swr';

const fetcher = (url:string) => fetch(url).then(res => res.json())

interface Props {
  query: string
}

export default function Result({query}: Props) {

  const {data, error} = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher)
  var loading = !data && !error;
  return (
    <div>
      <p>Hasil Pencarian dengan username : {query}</p>
      <div>
        {loading && <p>Tunggu Sebentar...</p>}
        <table border={1}>
          <thead>
            <tr>
              <th>No</th>
              <th>Avatar</th>
              <th>Username</th>
              <th>Blog</th>
            </tr>
          </thead>
          <tbody>
            {data && data.items.map((item: any, index:number) => {
              // console.log(item);
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td><img width={50} src={item.avatar_url} alt={item.login} /></td>
                  <td><Link href={`/users/${item.login}`}>{item.login}</Link></td>
                  <td><Link href={item.html_url}>{item.html_url}</Link></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}