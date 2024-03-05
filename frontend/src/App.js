import React, { useEffect, useState } from "react";
import axios from "axios";
import Index from "./contents/Index";
import CreateTweet from "./contents/CreateTweet";

const App = () => {

  const [tweets,setTweets] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/tweets')
      .then((response) => setTweets(response.data))
      .catch((error) => console.log(error));
  },[]);

  const [tweet, setTweet] = useState('');
  const handleCreateTweet = (event) => {
    setTweet(event.target.value);
  }

  const handleSaveTweet = () => {
    axios
      .post('http://127.0.0.1:8000/api/tweets', {
        content: tweet
      })
      .then((response) => setTweets(response.data))
      .then(() => setTweet(''))
      .catch((error) => console.log(error));
  }
  
  return (
    <>
      <h1>ツイート機能</h1>
      <CreateTweet onChange={handleCreateTweet} onClick={handleSaveTweet}/>
      <h1>ツイート一覧</h1>
      <Index tweets={tweets} />
    </>
  );
}

export default App;