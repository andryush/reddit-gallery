import React from "react";
import Post from "./Post/Post";
import Spinner from "../../Spinner/Spinner";

class PostsList extends React.Component {
  state = {
    posts: [],
    loading: false,
  };

  componentDidMount() {
    this.updateLoading();
    fetch("https://www.reddit.com/r/reactjs.json?limit=100")
      .then((response) => response.json())
      .then((data) => {
        const sorted = this.sortByComments(data.data.children);
        this.setState({
          posts: sorted,
          loading: false,
        });
      });
  }

  sortByComments = (posts) => {
    const sorted = posts.sort(
      (a, b) => b.data.num_comments - a.data.num_comments
    );
    return sorted;
  };

  updateLoading = () => {
    this.setState((prevState) => ({
      loading: !prevState.loading,
    }));
  };

  render() {
    const { posts, loading } = this.state;

    return (
      <div className="container d-flex flex-wrap justify-content-between">
        {loading ? (
          <Spinner />
        ) : (
          posts.map((el) => {
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
}
export default PostsList;
