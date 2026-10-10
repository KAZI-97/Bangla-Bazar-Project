// import Link from 'next/link';
// import React from 'react';
// import { BsFillTriangleFill } from 'react-icons/bs';

// const Decrement_Price_Promise = async() =>{
//     const res = fetch('https://api.api-store.workers.dev/api/bazardor/products')
//     return (await res).json()

// }

// const Price_Decrement = async() => {
//      const Price_Data_Decrement = await Decrement_Price_Promise()
//     return (
//         <>
//             <div className='flex max-w-5xl mx-auto gap-2.5 p-2.5 mt-4 items-center'>
//                  <BsFillTriangleFill size={25}className="text-red-700 rotate-180" />
//                  <h1 className='font-extrabold text-3xl'>আজ দাম কমেছে</h1>
//             </div>
//             <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-2.5'>
//                 {
//                     Price_Data_Decrement.filter((reduce_price)=>(
//                         reduce_price.change.dir == 'down'
                        
//                     )).sort((a, b) => a.change.pct - b.change.pct).slice(0,6).map((reduce_price) => (
//                         <Link key={reduce_price.id} href={`ProductDetails/${reduce_price.id}`} className='block bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition'>
//                             <div className='flex items-center gap-3'>
//                                 <div className='w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-2xl'>
//                                     {reduce_price.image}
//                                 </div>
//                                 <div>
//                                     <h2 className='font-bold text-lg leading-tight'>{reduce_price.nameBn}</h2>
//                                     <p className='text-sm text-gray-500'>{reduce_price.unit}</p>
//                                 </div>
//                             </div>

//                             <div className='flex items-end justify-between mt-4'>
//                                 <div>
//                                     <p className='text-xs text-gray-500'>আজকের দাম</p>
//                                     <p className='font-extrabold text-lg'>{reduce_price.today} টাকা</p>
//                                 </div>
//                                 <span className='flex items-center gap-1 bg-red-50 text-red-600 text-sm font-bold px-2.5 py-1 rounded-full'>
//                                     <BsFillTriangleFill size={9} className='rotate-180' />
//                                     {Math.abs(reduce_price.change.pct)}%
//                                 </span>
//                             </div>
//                         </Link>
//                     ))
//                 }
//             </div>
        
//         </>
//     );
// };



// export default Price_Decrement;

// After Responsive
import Link from 'next/link';
import React from 'react';
import { BsFillTriangleFill } from 'react-icons/bs';

const Decrement_Price_Promise = async() =>{
    const res = fetch('https://api.api-store.workers.dev/api/bazardor/products')
    return (await res).json()

}

const Price_Decrement = async() => {
     const Price_Data_Decrement = await Decrement_Price_Promise()
    return (
        <>
            <div className='flex max-w-5xl mx-auto gap-2 sm:gap-2.5 p-2.5 mt-4 items-center'>
                 <BsFillTriangleFill className="h-5 w-5 sm:h-6 sm:w-6 text-red-700 rotate-180" />
                 <h1 className='font-extrabold text-xl sm:text-2xl lg:text-3xl'>আজ দাম কমেছে</h1>
            </div>
            <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-2.5'>
                {
                    Price_Data_Decrement.filter((reduce_price)=>(
                        reduce_price.change.dir == 'down'
                        
                    )).sort((a, b) => a.change.pct - b.change.pct).slice(0,6).map((reduce_price) => (
                        <Link key={reduce_price.id} href={`ProductDetails/${reduce_price.id}`} className='block bg-white rounded-2xl border border-gray-100 shadow-sm p-3 sm:p-4 hover:shadow-md transition'>
                            <div className='flex items-center gap-3'>
                                <div className='w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-orange-50 flex items-center justify-center text-xl sm:text-2xl'>
                                    {reduce_price.image}
                                </div>
                                <div className='min-w-0'>
                                    <h2 className='font-bold text-base sm:text-lg leading-tight truncate'>{reduce_price.nameBn}</h2>
                                    <p className='text-xs sm:text-sm text-gray-500'>{reduce_price.unit}</p>
                                </div>
                            </div>

                            <div className='flex items-end justify-between gap-2 mt-3 sm:mt-4'>
                                <div>
                                    <p className='text-xs text-gray-500'>আজকের দাম</p>
                                    <p className='font-extrabold text-base sm:text-lg'>{reduce_price.today} টাকা</p>
                                </div>
                                <span className='flex shrink-0 items-center gap-1 bg-red-50 text-red-600 text-xs sm:text-sm font-bold px-2 sm:px-2.5 py-1 rounded-full'>
                                    <BsFillTriangleFill size={9} className='rotate-180' />
                                    {Math.abs(reduce_price.change.pct)}%
                                </span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        
        </>
    );
};



export default Price_Decrement;