import React from 'react'
import Block1 from './components/Block1'
import Block2 from './components/Block2'
import Block3 from './components/Block3'
import CommentsBlock from './components/CommentsBlock'


function page() {
  return (
    <div>
      <Block1/>
      <Block2/>
      <Block3/>
      <CommentsBlock/>
    
    </div>
  )
}

export default page