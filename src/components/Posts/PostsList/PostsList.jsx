import React from "react";
import Post from "./Post/Post";
import Spinner from "../../Spinner/Spinner";

class PostsList extends React.Component {
  state = {
    posts: [],
    loading: false,
    intervalId: 0,
  };

  sortPostsByComments = (posts) => {
    const sorted = posts.sort(
      (a, b) => b.data.num_comments - a.data.num_comments
    );
    return sorted;
  };

  toggleLoading = () => {
    this.setState((prevState) => ({
      loading: !prevState.loading,
    }));
  };

  getPosts = async () => {
    this.toggleLoading();
    const posts = await fetch(
      "https://www.reddit.com/r/reactjs.json?limit=100"
    ).then((response) => response.json());

    const sorted = this.sortPostsByComments(posts.data.children);
    this.updatePosts(sorted);
    this.toggleLoading();
  };

  updatePosts = (posts) => {
    this.setState({
      posts: posts,
    });
  };

  componentDidMount() {
    this.getPosts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.autoRefresh !== prevProps.autoRefresh) {
      let intervalId = setInterval(this.getPosts, 3000);
      if (this.state.intervalId === prevState.intervalId) {
        this.setState({
          intervalId: intervalId,
        });
      }
    }
    if (!this.props.autoRefresh) {
      clearInterval(this.state.intervalId);
    }
  }

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
