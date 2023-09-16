import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import List from './components/List/List'

function App() {
  
  const [list, setList] = useState([]);
  const[creditHr , setCreditHr] = useState(0);
  const [remaining , setRemaining] = useState(20);


 const handleAddToList= (course , time) =>{
  let newCreditHr = creditHr + time;
  setCreditHr(newCreditHr);

  let newRemaining = remaining - time;
  setRemaining(newRemaining);

  const newList = [...list ,course];
  setList(newList);
  

 }
  

  return (
    <><h1 className='text-4xl font-bold mb-6'>Course Registration</h1>
      <div className='flex gap-5'>
      <Courses handleAddToList={handleAddToList}></Courses>
      <List list={list} creditHr={creditHr} remaining={remaining} ></List>
      </div>
    </>
  )
}

export default App
