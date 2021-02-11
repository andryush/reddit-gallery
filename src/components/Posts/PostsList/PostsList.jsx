import React, { useState, useEffect, useRef, useMemo } from "react";
import Post from "./Post/Post";
import Spinner from "../../Spinner/Spinner";

function PostsList({ autoRefresh, rangeValue }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const intervalId = useRef(null);

  const getPosts = async function () {
    setLoading(true);
    const posts = await fetch(
      "https://www.reddit.com/r/reactjs.json?limit=100"
    ).then((response) => response.json());
    setPosts(posts.data.children);
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (autoRefresh) {
      const id = setInterval(getPosts, 3000);
      intervalId.current = id;
    } else {
      clearInterval(intervalId.current);
    }
  }, [autoRefresh]);

  const computedPosts = useMemo(
    () =>
      posts
        .sort((a, b) => b.data.num_comments - a.data.num_comments)
        .filter((el) => el.data.num_comments >= Number(rangeValue)),
    [posts, rangeValue]
  );

  return (
    <div className="container d-flex flex-wrap justify-content-between">
      {loading ? (
        <Spinner />
      ) : computedPosts.length === 0 ? (
        <div className="text-center w-100">
          No results found matching your criteria
        </div>
      ) : (
        computedPosts.map((el) => {
          return (
            <Post
              key={el.data.id}
              thumbnail={el.data.thumbnail}
              title={el.data.title}
              num_comments={el.data.num_comments}
              permalink={el.data.permalink}
            />
          );
        })
      )}
    </div>
  );
}
export default PostsList;
