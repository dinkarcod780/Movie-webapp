import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';
import axios from '.././utils/axios';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';
import DropDown from './partials/DropDown';
import Loading from './partials/Loading';

const Home = () => {

    document.title = "MOVIE APP | Homepage";
    const [wallpaper, setwallpaper] = useState(null)

    const [trending, settrending] = useState(null);

    const [category, setcategory] = useState("all")

    const GetHeaderWallpaper =async()=>{
      try {
        const {data} = await axios.get(`/trending/all/day`);
       
     

       let rendomdata = data.results[ (Math.random()*data.results.length).toFixed()];
        setwallpaper(rendomdata);

      } catch (error){
        console.log("Error:",error);
      }
    };

  

    const GetTrending =async()=>{
      try {
        const {data} = await axios.get(`/trending/${category}/day`);
       
        settrending(data.results);

      } catch (error){
        console.log("Error:",error);
      }
    };



    useEffect(() =>{
    GetTrending();
   ! wallpaper && GetHeaderWallpaper();
    },[category])

    // console.log(trending)

  return wallpaper && trending ? (
    <>
     <Sidenav />
     <div className='w-[80%] h-full overflow-auto overflow-x-hidden  '>
        <Topnav />
        <Header data={wallpaper} />

        <div className='flex justify-between p-5'>

<h1 className=' text-3xl font-semibold text-zinc-400'>Tranding</h1>

<DropDown title='Filter' options={['tv','movie','all']}
  func={(e) => setcategory(e.target.value)}  />
</div>
        <HorizontalCards data={trending}   />
        </div>   
    </>
  ):<Loading />
};

export default Home