import React from 'react'

const Index = (props) => {
  
  return (
    <>
        {props.tweets.map((tweet) => 
            <div key={tweet.id}>
                <li>ユーザーID:{tweet.user_id}</li>
                <p>{tweet.content}</p>
            </div>
        )}
    </>
  )
}

export default Index