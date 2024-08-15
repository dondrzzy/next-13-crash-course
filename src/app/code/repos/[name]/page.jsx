
import { Suspense } from 'react';
import RepoDirs from '@/app/components/RepoDirs';
import RepoHead from '@/app/components/RepoHead';
import Link from 'next/link';
import React from 'react'

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className='btn btn-back'>&#9664; back</Link>
      <Suspense fallback={<div>Loading repo</div>}>
        <RepoHead name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  )
}

export default RepoPage;
