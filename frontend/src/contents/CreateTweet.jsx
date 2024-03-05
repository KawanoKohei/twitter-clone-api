import React from 'react'

const CreateTweet = (props) => {
  return (
    <div>
        <input type="text" onChange={props.onChange} />
        <button onClick={props.onClick}>保存</button>
    </div>
  )
}

export default CreateTweet