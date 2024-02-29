import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {

  const [value,setValue] = useState([]);

  const url = "http://localhost:8000/api/test";

  useEffect(()=>{
    (async ()=>{
      try{
        const res = await axios.get(url);
	      setValue(res.data.post);
        return;
      }catch (e){
        return e;
      }
    })();
  },[]);
  
  return (
    <>
      {value.map((article)=>{
        return (
          <div key={article.id}>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
          </div>
        )
      })}
    </>
  );
}

export default App;