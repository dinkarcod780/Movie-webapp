import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './Topnav'
import DropDown from './DropDown'
import axios from '../../utils/axios'

const Trending = () => {
    const navigate = useNavigate()
    const [category, setcategory] = useState("all");
    const [duration, setduration] = useState("day");
    const [trending, settrending] = useState(null);


    const GetTrending =async()=>{
        try {
          const {data} = await axios.get(`/trending/${category}/duration`);
         
          settrending(data.results);
  
        } catch (error){
          console.log("Error:",error);
        }
      };
  
    useEffect(()=>{
        GetTrending()
    },[category,duration]);
    console.log(trending);

    return (
        <div className='w-screen px-[3%] '>

            <div className='w-full  flex items-center justify-between '>

                <h1 className=' text-2xl font-semibold text-zinc-400'>

                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line"></i>Trending
                </h1>
                
                
              <div className='flex items-center w-[80%]'>


              <Topnav />
                <DropDown title='Category' options={["movie", "tv", 'all']}
                    func={(e)=>setcategory(e.traget.value)}
                />

                <div className='w-[2%]'></div>
                <DropDown title='Duration' options={["week", "day"]}
                    func={(e)=>setcategory(e.traget.value)}
                />

              </div>
                
            </div>
           
          






        </div>
    )
}

export default Trending