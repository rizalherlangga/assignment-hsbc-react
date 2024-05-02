import React from 'react'
import Navbar from '../components/Navbar'
import PHome from '../assets/img/home-photo.png'

const Home = () => {
  return (
    <>
      <Navbar/>
      <br />
      <main className="max-w-[1120px] h-full mx-auto mt-[20px] flex relative">
        <div className="max-w-2xl flex flex-col gap-[42px] box-border relative z-10">
          <div className="font-bold text-[45px] ">
            <h1>Hi <span className="text-pink-600">Woters48</span>,</h1>
            <h1>Welcome To The Website</h1>
            <h1>About JKT48 News</h1>
          </div>
          <div className="flex gap-[10px]">
            <div className="w-[60px] bg-pink-600 h-[10px] rounded-[5px]"></div>
            <div className="w-[40px] bg-pink-600 h-[10px] rounded-[5px]"></div>
            <div className="w-[20px] bg-pink-600 h-[10px] rounded-[5px]"></div>
          </div>
          <div className="font-normal text-[15px]">
            <p>Platform yang memberikan</p>
            <p>informasi tentang JKT48. Mulai</p>
            <p>dari berita tentang idol,</p>
            <p>show atau jadwal panggung jkt48,</p>
            <p>dan lainnya</p>
          </div>
        </div>
        <div className="max-w-[650px] max-h-[500px] absolute top-0 right-0 p-0">
          <img src={PHome} alt=""/>
        </div>
    </main>
    </>
  )
}

export default Home
