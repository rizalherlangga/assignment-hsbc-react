import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Article = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/rizalherlangga/backend-placeholder/data")
      .then(res => {
        setArticle(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(article);

  return (
    <div>
      <Navbar />
      <br />
      <main className="max-w-[1120px] h-full mx-auto mt-[20px] flex flex-col gap-[15px] mb-[50px]">
        <div className="flex items-center gap-[15px]">
          <h1 className="font-bold text-[32px] text-pink-700">ARTICLE</h1>
          <div className="w-[50px] bg-pink-600 h-[8px] rounded-[5px]"></div>
        </div>
        {article.map((user, id) => (
          <div
            key={id}
            className="py-[12px] px-[16px] flex flex-col gap-[12px] rounded-[12px] border border-solid border-[#D1D5DB]"
          >
            <p className="text-13px text-neutral-500">{user.title}</p>
            <p className="text-[15px]">{user.content}</p>
            <div className="flex gap-[10px] justify-end">
              <Link
                to={`/edit/${user.id}`}
                className="px-[20px] bg-pink-600 rounded-[5px] text-white hover:text-pink-800"
              >
                Edit
              </Link>
              <button onClick={handleDelete(user.id)}
                to={`/delete/${user.id}`}
                className="px-[20px] bg-pink-600 rounded-[5px] text-white hover:text-pink-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );

  function handleDelete(id) {
    const conf = window.confirm("Do You Want To Delete?")
    if(conf) {
      axios.delete(`https://my-json-server.typicode.com/rizalherlangga/backend-placeholder/data/${id}`, )
        .then(res => {
          alert("Record Has Deleted");
          navigate('/article');
        })
        .catch(error => {
          console.error("Error updating data:", error);
          alert("Failed to update data");
        });
    }
  }

};

export default Article;
