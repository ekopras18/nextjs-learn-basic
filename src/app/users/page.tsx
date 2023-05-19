"use client"

import * as React from 'react';
import SectionResult from './sectionResult';

export default function User() {

  const [data, setData] = React.useState('');

  const onSubmit = (e: any) => {
    const postdata = Object();
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    postdata.repo = formData.get('repo');

    setData(postdata.repo);
    // console.log(postdata);
  }


  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="repo" id="repo" placeholder='Cari User' />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> Search</button>
      </form>
      {data && <SectionResult query={data} />}
    </div>
  );
}