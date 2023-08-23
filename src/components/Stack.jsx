import React from 'react'

const Stack = ({techs}) => {
  return (
    <ul>
        {techs.map((tech, index) => (
            <li key={index}>{tech}</li>
        ))}
    </ul>
  );
};

export default Stack;