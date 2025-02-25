import React from 'react'

//An interface is used to define the structure that na objecvt must follow
//CardProps is the name of the interface, and it contains two properties: title, content

interface CardProps{
  title: string,
  content: string
}

const Card: React.FC <CardProps> = ({title, content}) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{content}</p>

    </div>
  )
}

export default Card