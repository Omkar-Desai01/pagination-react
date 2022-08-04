import axios from "axios";
import React, { useState, useEffect } from "react";
import Post from "./Post";
import Pagination from "./Pagination";
// import "./app.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setData(response.data);
    });
  }, []);

  console.log(data, loading);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const inputHandler = (e) => {
    setCurrentPage(1);
    if (e.keyCode === 8) {
      console.log("back");
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          setData(
            response.data.filter((da) => da.title.includes(e.target.value))
          );
        });
    }
    console.log(e.target.value);
    setData(data.filter((da) => da.title.includes(e.target.value)));
  };

  const indexOfLastPage = currentPage * 7;
  const indexOfFirstPage = indexOfLastPage - 7;
  const currentPosts = data.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <div>
      <div className="ui fluid icon input ">
        <input
          type="text"
          placeholder="Search a very wide input..."
          id="input"
          onKeyDown={inputHandler}
        />
      </div>
      <Post posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={7}
        totalPosts={data.length}
        paginate={paginate}
      />
    </div>
  );
}
