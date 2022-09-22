import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setStories(
      [...Array(30)].map((profile) => ({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
      }))
    );
  }, []);

  console.log(stories);

  return (
    <div>
      <div className="flex space-x-4 bg-white border overflow-x-scroll  mx-1 rounded-lg scrollbar-thin scrollbar-thumb-gray-300 p-5">
        {stories.map((profile) => (
          <Story
            key={profile.userId}
            username={profile.username}
            avatar={profile.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default Stories;
