import React from 'react'
import { TagCloud } from 'react-tagcloud';
import "./Skills.css";

const data = [
  { value: 'jQuery', count: 25 },
  { value: 'JavaScript ', count: 18 },
  { value: 'Bootstrap', count: 38 },
  { value: 'SAAS', count: 30 },
  { value: 'Nodejs', count: 18 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS3', count: 40 },
  { value: 'Wordpress', count: 22 },
  { value: 'MUI', count: 17 },
  { value: 'Symfony', count: 15 },
  { value: 'PHP', count: 15 },
  { value: 'GIT', count: 17 },
  { value: 'React', count: 27 },
  { value: 'Figma', count: 30 },
  { value: 'Trello', count: 15 },
  { value: 'TailwindCSS', count: 30 },
  { value: 'Photoshop', count: 21 },
]



// minSize, maxSize - font size in px
// tags - array of objects with properties value and count
// shuffle - indicates if data should be shuffled (true by default)
// onClick event handler has `tag` and `event` parameter

// custom random color options
// see randomColor package: https://github.com/davidmerfield/randomColor


export default () => (
  
  <TagCloud
    minSize={24}
    maxSize={55}
    tags={data}
    
    className="myTagCloud"
    onClick={(tag) => alert(`'${tag.value}' was selected!`)}
  />
  
)