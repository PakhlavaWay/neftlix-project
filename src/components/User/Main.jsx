import React from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import ReplayIcon from '@mui/icons-material/Replay';
import Slider from './Slider';
import movies from '../../images/movies';


const Main = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url(https://occ-0-6-7.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbA2qlM00ASRGw8sEWj8PSS9Z4UbRvLE_USbvlVlevtVhPeWtAX0mSNUEp3caMxYTRQLbwvap21W2eh_ODPD3G-d2UaJFP4R0gOL.webp?r=a97)",
        height: "100vh",
      }} className='w-full'
    >
      <div className="wrapper !w-[42%] !ml-16 flex h-full flex-col gap-4 pt-24">
        <img
          src="https://occ-0-6-7.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcPV633u25Q92B6GL3hINY3berUr0C8HU_6y43aRKSoJsnCYi5h88_HhQ8cbRwLMivM7WijDsR168u8_4M7VtQpv-6k2IOkTeVp3puhReWJ0.webp?r=c5a"
          alt="title"
        />
        <p className="text-[1.2rem] leading-5">From the idyllic shire of the Hobbits to the smoking chasms of Mordor, Frodo Baggins 
            embarks on his epic quest to destroy the ring of Sauron
        </p>
        <div className="flex gap-2 w-1/2">
            <button className="rounded-[4px] text-black !text-lg font-bold px-4 p-2 w-28 gap-2 !bg-white flex items-center"><PlayArrowIcon className="!text-3xl"/>Play</button>
            <button className="rounded-[4px] text-white !text-lg font-bold px-4 py-2 w-36 gap-2 !bg-zinc-500 flex items-center"><InfoIcon />More Info</button>
        </div>
        <div className="flex gap-2 items-center absolute right-0 bottom-[180px]">
            <div className="rounded-full border-white border-2 p-1"><ReplayIcon className="text-white"/></div>
            <div className="!bg-zinc-500 opacity-80 text-white border-l-4 px-2 pr-8 py-1">PG-13</div>
        </div>
      </div>
      <Slider absolute={true} collection={"Popular on Netflix"} moviesImg={movies.popular} />
    </section>
  );
};

export default Main;
