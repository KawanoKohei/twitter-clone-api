import React from 'react'

const Tweet = (props) => {
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

export default Tweet