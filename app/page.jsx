import React from 'react'
import Form from './addToDoForm';
import { TodoItem } from '@/components/Server';
const page = () => {
  return (
 <div className="container">
    <Form />
    <section>
        <TodoItem title={"Sample title"} description={"dljjfhj csbu "} id={"sampleID"} complete={true}/>
        <TodoItem title={"Sample title"} description={"dljjfhj csbu "} id={"sampleID"} complete={true}/>
    </section>
 </div>
  )
}

export default page