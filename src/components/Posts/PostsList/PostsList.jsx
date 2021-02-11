import React, { useState, useEffect, useRef } from "react";
import Post from "./Post/Post";
import Spinner from "../../Spinner/Spinner";

function PostsList({ autoRefresh, rangeValue }) {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const intervalId = useRef(null);

  const sortPostsByComments = (posts) => {
    const sorted = posts.sort(
      (a, b) => b.data.num_comments - a.data.num_comments
    );
    return sorted;
  };

  const filterPostsByRangeValue = (sorted, rangeValue) => {
    const filtered = sorted.filter(
      (el) => el.data.num_comments >= Number(rangeValue)
    );
    setFilteredPosts(filtered);
  };

  const toggleLoading = () => {
    setLoading((prev) => !prev);
  };

  const updatePosts = (posts) => {
    setPosts(posts);
  };

  const getPosts = async () => {
    toggleLoading();
    const posts = await fetch(
      "https://www.reddit.com/r/reactjs.json?limit=100"
    ).then((response) => response.json());
    const sorted = sortPostsByComments(posts.data.children);
    updatePosts(sorted);
    filterPostsByRangeValue(sorted, rangeValue);
    toggleLoading();
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

  useEffect(() => {
    filterPostsByRangeValue(posts, rangeValue);
  }, [rangeValue]);

  return (
    <div className="container d-flex flex-wrap justify-content-between">
      <div className="text-center w-100">
        {filteredPosts.length === 0
          ? "No results found matching your criteria"
          : null}
      </div>

      {loading ? (
        <Spinner />
      ) : (
        filteredPosts.map((el) => {
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
