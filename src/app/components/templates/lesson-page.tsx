import { useStage, Stage } from '@/components/client-caches'


export default function LessonBody({ children }){
  const [ {}, { clp, nextCLP }, { maxPage } ] = useStage()
  function nextBtn() {
    if(clp <= maxPage) nextCLP(prevPage => prevPage + 1);
    else return 
  }
  function prevBtn(){
    if(clp > 1) nextCLP(prevPage => prevPage - 1)
  }
  return(
    <div className='prev-next'>
                <button onClick={prevBtn} >
                    <Image src="/imgs/icons/prev.png" width={50} height={50} alt="Previous Page" />
                </button>
                <button onClick={nextBtn} disabled={availability.disable} style={availability.cssStyle}>
                    <Image src="/imgs/icons/next.png" width={50} height={50} alt="Next Page" />
                </button>
            </div>
  )
}