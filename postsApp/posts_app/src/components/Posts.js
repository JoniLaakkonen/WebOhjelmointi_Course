import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

export default function Posts() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      try {
        axios
          .get("http://localhost:3001/posts")
          .then((res) => {
            setData(res.data.posts);
            console.log(res.data.posts);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
    console.log(data);
  }, []);


  return <div className="child-div">
    {!loading && (
      <div>
        <h2>Posts</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <Fragment>
                <Post post={item}/>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
  )}
  </div>
}
