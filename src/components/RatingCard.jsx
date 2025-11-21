import star from '../imgs/icon-star.svg';
const RatingCard = () =>{
    return(
    <>
        <section className="max-w-[400px] w-full bg-neutral-grey-950 rounded-3xl py-10 px-4 flex flex-col gap-6">
            <div className="w-12 h-12 rounded-full bg-neutral-grey-900 flex justify-center items-center">
                <img src={star} alt="" className='w-4 h-4 object-cover'/>
            </div>

            <div className='w-full flex flex-col gap-3 justify-between'>
                <h2 className='text-[32px] font-bold text-white'>How did we do?</h2>
                <p className='text-neutral-500'>Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!</p>
            </div>
            <div className='-w-full flex items-center justify-between'>
                {Array.from({length: 5},(_,i)=>{
                    return(<div className='w-12 h-12 rounded-full flex items-center justify-center py-6 bg-neutral-grey-900 border border-neutral-grey-900 hover:bg-primary-orange-500 hover:text-neutral-white active:bg-neutral-white active:text-neutral-white'>
                        <p className='text-neutral-grey-500 font-light'>{i+1}</p>
                    </div>)
                })}
            </div>
            <button type="button" className='w-full flex items-center justify-center bg-primary-orange-500 text-neutral-grey-950 font-bold rounded-4xl py-2 hover:bg-neutral-white'>SUBMIT</button>
        </section>
    </>)
}
export default RatingCard;