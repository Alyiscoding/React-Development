import { Data } from "./EmployeData"
import React ,{ useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [data, setData] = useState([" "])

  const [firstName, setFirstname] = useState("")
  const [lastName, setLastname] = useState("")
  const [age, setAge] = useState(0)
 
  const [id, setId] = useState(0)


  const [update, setUpdate] = useState(false)
  console.log(update);
//here use effect is used to fethch data from employeData file 
//or is ka link usestate data and set data wali k sath ha.
  useEffect(() => {
    setData(Data)
  }, []);



  // for edit
  const handleEdit = (id) => {
    alert(id);
    setUpdate(true)
    const dt = data.filter(item => item.id === id);
    if (dt !== undefined) {
      setUpdate(true);
      setId(id)
      setFirstname(dt[0].firstName);
      setLastname(dt[0].lastName);
      setAge(dt[0].age)
    }

  }


  // for delete
  const handleDelete = (id) => {
    alert(id);
    if (id > 0) {
      if (window.confirm("Are you sure to delete this record?")) {
        const dt = data.filter(item => item.id !== id); //ye feature ha array filter method ka jo k filter rke dhond k b deta or delete b sath he krke deta hai
        setData(dt);

      }
    }
  }


  // for save
  const handleSave = (e) => {
   
    let error = '' ;
    if(firstName === '')
    error += `first name is requierd`
    if(lastName === '')
    error += `last name is requierd`
    if(age <=  0 )
    error += `age is requierd`
  if (error === '') {

    alert("Record Saved");
  e.preventDefault();  //ye page refresh hony se rokta ha

  const dt =[...data];
 
  const newObject = {
 
    id:Data.length+1,
    firstName:firstName,
    lastName:lastName,
    age: age
  }
  dt.push(newObject)
  setData(dt)
  }
  else{
    alert(`Error : ${error}`);
  }
  handleClear();
  }


  // for clear
  const handleClear = () => {
    alert("Record Clear");
    setAge(0)
    setFirstname('');
    setLastname('');
    setAge('')
    setUpdate(false)
  }



  //  for update
  const handleUpdate = () => {
    const index = data.map((item) => {
      return item.id
    }).indexOf(id);
    const dt = [...data];
    dt[index].firstName = firstName;
    dt[index].lastName = lastName;
    dt[index].age=age;
    setData(dt);
  handleClear()
   
   
  }
  // coonect with jsx
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: "center", marginTop: "15px", marginBottom: "20px" }} >
        <div>

     
         
          <label>First Name
            <input type='text' placeholder="Enter your first Name" onChange={(e) => setFirstname(e.target.value)} value={firstName} />
          </label>
        </div>

        <div>
          <label>Last Name
            <input type='text' placeholder="Enter your Last Name" onChange={(e) => setLastname(e.target.value)} value={lastName} />
          </label>
        </div>

        <div>
          <label> Age
            <input type='text' placeholder="Enter your Age" onChange={(e) => setAge(e.target.value)} value={age} />
          </label>
        </div>

        <div>
{/* logic update save btn */}
          {

!update ?

              <button className="btn btn-primary" onClick={(e) => handleSave(e)}>Save </button> :
              <button className="btn btn-primary" onClick={() => handleUpdate()}>Update </button>

          }
{/* 
if(update=== false){
  <button className="btn btn-primary" onClick={(e) => handleSave(e)}>Save </button>
}
else{
  <button className="btn btn-primary" onClick={() => handleUpdate()}>Update </button>
} */}


          <button className="btn btn-danger " onClick={() => handleClear()}>Clear</button>

        </div>

      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <td>sr.no</td>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {/* data show */}
          {
            data.map((item, index) => {
              return (
                <tr key={index +1 }>
                  <td>{index + 1}</td>
                  <td>{item.id +1}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => handleEdit(item.id)}>Edit </button> &nbsp;
                    <button className="btn btn-danger " onClick={() => handleDelete(item.id)}>Delete</button>

                  </td>

                </tr>
              )

            })
          }
        </tbody>
      </table>



    </div>
  )
}
export default App

