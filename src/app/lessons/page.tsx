'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCaches, Caches } from '@/components/client-caches';

function Render() {
  const [ holderPage, setHolderPage ] = useState<JSX.Element>(<></>)
  const [ { userState, setUserState }, { q, setQ } ] = useCaches()
  const router = useRouter()

  if(q === undefined) setQ(1);

  useEffect(() => {
    if(userState.lessons === null || userState.lessons.length === 0 || userState.lessons?.every((elem) => elem === '')) {
      setUserState((prevUserState) => ({
        ...prevUserState,
        lessons: []
      }))
      router.push('/lessons/select-lesson')
    }
    if(userState.lessons?.some(elem => elem !== '') && userState.name !== ''){
      setHolderPage(<>hi</>)
    }
  }, [])
  
  return( <>{holderPage}</> );
}

export default function LessonMain() {
  return(
    <Caches>
      <Render />
    </Caches>
  )
}
