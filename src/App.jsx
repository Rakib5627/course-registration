import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Courses from './components/Courses/Courses'
import List from './components/List/List'

function App() {
  
  const [list, setList] = useState([]);
  const[creditHr , setCreditHr] = useState(0);
  const [remaining , setRemaining] = useState(20);


 const handleAddToList= (course) =>{
  const time =course.credit_hour;
  let newCreditHr = creditHr + time;
  let newRemaining = remaining - time;



  if (newCreditHr <= 20 ){
  const newList = [...list ,course];
  let unique= [];

  newList.forEach(element => {
    if (unique.includes(element)) {
      toast("You cannot add an item twice");
      setCreditHr(creditHr);
      setRemaining(remaining)
    }
    else{
        unique.push(element);
        setList(unique);
        
        setCreditHr(newCreditHr);
        setRemaining(newRemaining);
    }
  });

  
  }
  else{toast("You don't have enough credit hour")}

 }
  

  return (
    <><h1 className='text-4xl font-bold mb-6'>Course Registration</h1>
      <div className='flex gap-5'>
      <Courses handleAddToList={handleAddToList}></Courses>
      <List list={list} creditHr={creditHr} remaining={remaining} ></List>
      </div>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
