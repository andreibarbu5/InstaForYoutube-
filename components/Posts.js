import React from "react";
import profile from "../assets/profile.jpg";
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: "123",
      username: "Joe Doe",
      profilePic: profile,
      postPhoto: profile,
      caption: "Hellow from the caption!",
    },
    {
      id: "234",
      username: "Mike Doe",
      profilePic: profile,
      postPhoto: profile,
      caption: "Second Hellow from the caption!",
    },
  ];

  return (
    <div className="mt-1 mx-1">
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          profilePic={post.profilePic}
          postPhoto={post.postPhoto}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
