import React, { useEffect, useState } from "react";
import axios from "axios";
import Tweet from "./contents/Tweet";

const App = () => {

  const [tweets,setTweets] = useState([]);

  // const url = "http://localhost:8000/api/test";

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/tweets/')
      .then((response) => setTweets(response.data))
      .catch((error) => console.log(error));
  },[]);
  
  return (
    <>
      <h1>ツイート</h1>
      <h1>ツイート一覧</h1>
      <Tweet tweets={tweets}/>
    </>
  );
}

export default App;