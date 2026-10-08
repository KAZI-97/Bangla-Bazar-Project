import React from 'react';
import Link from 'next/link';
import { BsFillTriangleFill } from 'react-icons/bs';

const Increment_Price_Promise = async() =>{
    const res = fetch('https://api.api-store.workers.dev/api/bazardor/products')
    return (await res).json()

}

const Price_Increment = async() => {
    const Price_Data = await Increment_Price_Promise()
    return (
        <>
            <div className='flex max-w-5xl mx-auto gap-2.5 p-2.5 mt-4 items-center'>
                 <BsFillTriangleFill size={25}className="text-green-700" />
                 <h1 className='font-extrabold text-3xl'>আজ দাম বেড়েছে</h1>
            </div>
            <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-2.5'>
                {
                    Price_Data.filter((price)=>(
                        price.change.dir == 'up'
                        
                    )).sort((a, b) => b.change.pct - a.change.pct).slice(0,6).map((price) => (
                        <Link key={price.id} href={`/products/${price.slug}`} className='block bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition'>
                            <div className='flex items-center gap-3'>
                                <div className='w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-2xl'>
                                    {price.image}
                                </div>
                                <div>
                                    <h2 className='font-bold text-lg leading-tight'>{price.nameBn}</h2>
                                    <p className='text-sm text-gray-500'>{price.unit}</p>
                                </div>
                            </div>

                            <div className='flex items-end justify-between mt-4'>
                                <div>
                                    <p className='text-xs text-gray-500'>আজকের দাম</p>
                                    <p className='font-extrabold text-lg'>{price.today} টাকা</p>
                                </div>
                                <span className='flex items-center gap-1 bg-red-50 text-green-600 text-sm font-bold px-2.5 py-1 rounded-full'>
                                    <BsFillTriangleFill size={9} />
                                    {price.change.pct}%
                                </span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        
        </>
    );
};

export default Price_Increment;