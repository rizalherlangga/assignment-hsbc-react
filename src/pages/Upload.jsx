import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Upload = () => {
  const [inputData, setInputData] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    axios.post('https://my-json-server.typicode.com/rizalherlangga/backend-placeholder/data', inputData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        alert("Data Added Successfully");
        console.log(res.data); // Log data yang diterima dari API
        navigate('/article');
      })
      .catch(err => {
        console.log(err); // Log pesan kesalahan jika permintaan gagal
        alert("Failed to add data"); // Tampilkan pesan kesalahan kepada pengguna
      });
  };

  return (
    <div>
      <Navbar />
      <br />
      <main className="max-w-[1120px] h-full mx-auto mt-[20px] flex flex-col gap-[15px] mb-[50px]">
        <div className="flex items-center gap-[15px]">
          <h1 className="font-extrabold text-[32px] text-pink-700">UPDATE</h1>
          <div className="w-[50px] bg-pink-600 h-[8px] rounded-[5px]"></div>
        </div>
        <br />
        <form onSubmit={handleSubmit} className='w-[800px] flex flex-col mx-auto bg-pink-500 text-white px-[15px] py-[30px] gap-4 rounded-[15px] shadow-[7px_9px_8px_0px_rgba(171,8,124,0.75)]'>
          <h1 className='flex flex-col items-center font-bold text-[30px]'>Article</h1>
          <div className='flex flex-col gap-[6px]'>
            <label htmlFor="">Judul Article</label>
            <input type="text" name="" id="" className='rounded-[5px] bg-white px-[10px] py-[6px] text-[#9FB3D6]' placeholder='Text' onChange={e => setInputData({ ...inputData, title: e.target.value })} />
          </div>
          <div className='flex flex-col gap-[6px]'>
            <label htmlFor="">Deskripsi Article</label>
            <textarea name="" id="" cols="10" rows="5" className='rounded-[5px] bg-white px-[10px] py-[6px] resize-none text-[#9FB3D6]' placeholder='Text' onChange={e => setInputData({ ...inputData, content: e.target.value })}></textarea>
          </div>
          <div className='flex gap-[10px] justify-end'>
            <button type="submit" className='w-[100px] px-[20px] py-[7px] bg-pink-600 rounded-[5px] text-white hover:text-pink-800'>Submit</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Upload;
