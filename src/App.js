import React , {useState,useEffect} from 'react';
import './App.css';
import Students from './Data.js';
export default function App() {
  const [searchStudent, setSearchStudent] = useState("");
  const [studentArray, setStudentArray] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchStudent(e.target.value);

  }
  const handleSelect = (ele) => {
    setSearchStudent(ele)

  }
  useEffect(()=>{
    setStudentArray(Students.filter((ele)=>ele.trim().toLowerCase().includes(searchStudent.trim().toLowerCase())))
  },[searchStudent])
  return (
    <>
    <div>
      <form>
        <input className='searchBar' placeholder='Search here...' onChange={handleChange} value={searchStudent}/>
        <div className='StudentLists'>{studentArray.map((ele)=><div onClick={()=>handleSelect(ele)}>{ele}</div>)}</div>
      </form>
    </div>
    </>
  )
}
