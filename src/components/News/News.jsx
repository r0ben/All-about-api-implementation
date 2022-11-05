import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Route, Routes, useLocation } from "react-router-dom";

const News = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const location = useLocation();

  console.log(location);

  const getWeathers = () => {
    setLoading(true);
    const searchTerm = location.pathname.split("/news/")[1];

    axios({
      url: `https://inshortsapi.vercel.app/news?category=${searchTerm} `,
      method: "get",
    })
      .then((res) => {
        setContent(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  };

  useEffect(() => {
    getWeathers();
  }, [location.pathname]);

  return (
    <>
      {/* <div className="category">
        <button onClick={() => setSelectedCategory("all")}>All</button>
        <button onClick={() => setSelectedCategory("sports")}>Sports</button>
        <button onClick={() => setSelectedCategory("science")}>Science</button>
        <button onClick={() => setSelectedCategory("business")}>
          Business
        </button>
        <button onClick={() => setSelectedCategory("world")}>World</button>
        <button onClick={() => setSelectedCategory("politics")}>
          Politics
        </button>
        <button onClick={() => setSelectedCategory("technology")}>
          Technology
        </button>
        <button onClick={() => setSelectedCategory("startup")}>Startup</button>
        <button onClick={() => setSelectedCategory("entertainment")}>
          Entertainment
        </button>
      </div> */}
      <div className="category">
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            margin: "10px",
            padding: "5px",
          }}
          to="/news/all"
        >
          All
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            margin: "10px",
            padding: "5px",
          }}
          to="/news/sports"
        >
          Sports
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            margin: "10px",
            padding: "5px",
          }}
          to="/news/science"
        >
          Science
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            margin: "10px",
            padding: "5px",
          }}
          to="/news/business"
        >
          Business
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            margin: "10px",
            padding: "5px",
          }}
          to="/news/world"
        >
          World
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            margin: "10px",
            padding: "5px",
          }}
          to="/news/politics"
        >
          Politics
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            margin: "10px",
            padding: "5px",
          }}
          to="/news/technology"
        >
          Technology
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            margin: "10px",
            padding: "5px",
          }}
          to="/news/startup"
        >
          Startup
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            margin: "10px",
            padding: "5px",
          }}
          to="/news/entertainment"
        >
          Entertainment
        </Link>
      </div>

      <div className="row m-0 py-5">
        {loading === true ? (
          <>Loading.....</>
        ) : (
          content.map((val, i) => {
            return (
              <div key={i} className="card h-auto col-4 p-0">
                <h4>{val.title}</h4>
                <img src={val.imageUrl} alt="" />
                <div className="card-body">
                  <h5>{val.author}</h5>
                  <p> {val.content}</p>
                  <p>{val.readMoreUrl}</p>
                  <p>{val.date}</p>
                  <p>{val.time}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default News;
