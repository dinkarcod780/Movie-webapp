import React from 'react'
// import { Link } from 'react-router-dom'
import DropDown from './DropDown'

const HorizontalCards = ({ data  }) => {
    return (
     
            
        

            <div className='w-[100%]  flex mb-5 overflow-y-hidden p-5 '>

                {data.map((d, i) => (
                    <div key={i} className='min-w-[20%] mr-5 bg-zinc-900 mb-5'>
                        <img className='w-full h-[45%] object-cover'
                            src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path
                                })`} alt="" />

                        <div className=' text-white p-3 h-[45%]'>
                            <h1 className='  text-xl  font-semibold '>
                                {d.name || d.title || d.original_name || d.original_title}
                            </h1>
                            <p className='  '>{d.overview.slice(0, 40)}...<span className='text-zinc-500'>more</span></p>
                        </div>
                    </div>

                ))}

            </div>

       
    )
}

export default HorizontalCards