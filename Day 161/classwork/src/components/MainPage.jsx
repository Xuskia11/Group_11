import { useState, useEffect } from "react";
import '../mainPage.css'; 

const MainPage = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [visibility, setVisibility] = useState("public");
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handlePostSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      content: postContent,
      visibility: visibility,
      userEmail: user.email
    };

    setPosts([...posts, newPost]);

    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    savedPosts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(savedPosts));

    setPostContent("");
  };
  
  const filteredPosts = posts.filter((post) => (
    post.visibility === "public" || post.userEmail === user.email
  ));

  const handleDelete = (index) => {
    const updatedPosts = filteredPosts.filter((_, i) => i !== index)
    setPosts(updatedPosts)

    localStorage.setItem("posts", JSON.stringify(posts));
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Welcome {user.name} to Your Profile</h1>
        <p>Here you can see your posts and other features.</p>
      </div>

      <form onSubmit={handlePostSubmit} className="form">
        <textarea
          value={postContent}
          name="postContent"
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="What's on your mind..."
          required
          className="textarea"
        />
        <div className="visibilityWrapper">
          <label className="label">
            Visibility: <img/>
            <select
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
              className="select"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </label>
        </div>
        <button className="button">Submit</button>
      </form>

      <h2>Your Posts</h2>
      <div className="postsWrapper">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div key={index} className="postCard">
              <p>{post.content}</p>
              <b className="postVisibility">
                {post.visibility === "public" ? "Public" : "Private"}
              </b> <img/> <img/>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default MainPage;
