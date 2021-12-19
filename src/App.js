import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import Cardlist from "./Cardlist";

const App = () => {
  const [robots, SetRobots] = useState([]);
  const [searchString, SetString] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((users) => {
        SetRobots(users);
      });
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchString.toLowerCase());
  });

  const track = (event) => {
    SetString(event.target.value);
  };

  return (
    <div className="tc">  
      <h1>RoboFriends</h1>
      <SearchBar Change={track} />
      <Cardlist robots={filteredRobots} />
    </div>
  );
};

export default App;
