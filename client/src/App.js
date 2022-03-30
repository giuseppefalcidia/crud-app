import { useState, useEffect } from 'react'
import Axios from 'axios';
import './App.scss';

function App() {
const [name, setName] = useState('');
const [age, setAge] = useState(0);
const [country, setCountry] = useState('');
const [position, setPosition] = useState('');
const [wage, setWage] = useState(0);

const [employeeList, setEmployeeList] = useState([]);

useEffect(() => {
Axios.get("http://localhost:3001/read").then((response) => {
setEmployeeList(response.data)
})
}, [])

const addToList = () => {
Axios.post("http://localhost:3001/insert", 
{name: name,
 age: age,
 country: country,
 position: position,
 wage: wage
});
};

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type="text" 
        onChange={(event) => {setName(event.target.value)}}/>
        <label>Age:</label>
        <input type="number"
         onChange={(event) => {setAge(event.target.value)}} />
        <label>Country:</label>
        <input type="text"
         onChange={(event) => {setCountry(event.target.value)}} />
        <label>Position:</label>
        <input type="text" 
           onChange={(event) => {setPosition(event.target.value)}}
        />
        <label>Wage (year):</label>
        <input type="number" 
           onChange={(event) => {setWage(event.target.value)}}
        />
        <button onClick={addToList} className="btn btn--stripe">
         Add Employee</button>
         </div>
        
        {employeeList.map((val, key) => {
          return <div className="information-table" key={key}> 
                       <h4>{val.name}</h4>
                       <h4>{val.age}</h4>
                       <h4>{val.country}</h4>
                       <h4>{val.position}</h4>
                       <h4>{val.wage}</h4>
          </div>
        })}

     
    </div>
  );
}

export default App;
