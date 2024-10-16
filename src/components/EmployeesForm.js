import React, { useEffect, useState } from 'react'

function EmployeesForm() {

    let [employees,setEmployees] = useState([]);
    let [countriesList,setCountriesList] = useState([]);
    let [departmentsList,setDepartmentsList] = useState([]);
    let [gendersList,setGendersList] = useState([]);



    useEffect(()=>{
      getCountriesList();
      getDepartmentsList();
      getGendersList();
    },[]);

    let getCountriesList = async ()=>{
    let reqOptions = {
      method:"GET",
    };

      let JSONData = await fetch("http://localhost:2222/countriesList",reqOptions);

      let JSOData = await JSONData.json();
      setCountriesList(JSOData);
    };

    let getDepartmentsList = async ()=>{
      let reqOptions = {
        method:"GET",
      };
  
        let JSONData = await fetch("http://localhost:2222/departmentsList",reqOptions);
  
        let JSOData = await JSONData.json();
        setDepartmentsList(JSOData);
      };

      let getGendersList = async ()=>{
        let reqOptions = {
          method:"GET",
        };
    
          let JSONData = await fetch("http://localhost:2222/gendersList",reqOptions);
    
          let JSOData = await JSONData.json();
          setGendersList(JSOData);
        };

let getEmployeesFromServer = async()=>{
    let reqOption = {
        method:"GET"
    }

    let JSONData = await fetch("http://localhost:2222/employees", reqOption);
    let JSODATA = await JSONData.json();
    setEmployees(JSODATA);

    console.log(JSODATA);
};

  return (
    <div>
  <form>
    <div>
      <label>Country</label>
      <select>
        {countriesList.map((ele,i)=>{
          return <option>{ele}</option>
        })}
      </select>
    </div>

    <div>
      <label>Department</label>
      <select>
        {departmentsList.map((ele,i)=>{
          return <option>{ele}</option>
        })}
      </select>
    </div>

    <div>
      <label>Gender</label>
      <select>
        {gendersList.map((ele,i)=>{
          return <option>{ele}</option>
        })}
      </select>
    </div>
<button type="button" onClick={()=>{
    getEmployeesFromServer()
}}
>
    Get Employees
    </button>
    </form>
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>ID</th>
          <th>Profile Pic</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Department</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
      {employees.map((ele,i)=>{
     return(
     <tr key={i}>
          <td>{i+1}</td>
          <td>{ele.id}</td>
          <td>
            <img src={ele.profilePic}></img>
            </td>
          <td>{ele.firstName}</td>
          <td>{ele.lastName}</td>
          <td>{ele.gender}</td>
          <td>{ele.age}</td>
          <td>{ele.email}</td>
          <td>{ele.salary}</td>
          <td>{ele.department}</td>
          <td>{ele.country}</td>
        </tr>
    );
    })}
      </tbody>
      <tfoot></tfoot>
    </table>
    
    </div>
  ) ;
}

export default EmployeesForm;