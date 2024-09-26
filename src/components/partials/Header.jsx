import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({data}) => {

    // console.log(data)
  return (
    <div style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(
        https://image.tmdb.org/t/p/original/${
      
      data.backdrop_path || data.profile_path
         })`,
         backgroundPosition:'top 10%',
         backgroundSize:'cover',
         backgroundRepeat:'no-repeat',

       
    }}
     className='h-[58vh] w-full  flex flex-col justify-end items-start p-[3.7%]'>
      <h1 className=' w-[70%] text-5xl  font-black text-white '>
      {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className='w-[70%] mt-3 mb-3 text-white'>{data.overview.slice(0,200)}...<Link className='text-blue-400'>more</Link></p>
      <p className='text-white flex'>
      <i className="text-yellow-500 ri-megaphone-line"></i>{""}{data.release_date || "No Information"}
      <i className="ml-5 text-yellow-500 ri-album-fill"></i>{""}{data.media_type.toUpperCase()}

      </p>
      <Link className='mt-5 p-4 rounded text-white  bg-[#6556CD]'>Watch Trailer</Link>
     </div>
  )
}

export default Header