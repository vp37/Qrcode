import { useState } from "react"



export const Table = () => {
    let [table,settable]=useState({
        name:"Enter your Name",
        age:21,
        gender:"none",
        ismarried:true,
        country:"India",
        description:"Write your own Words"

    })
    function handler(e){
        let name=e.target.name
        // console.log(name)
        let value=e.target.type==="checkbox" ? e.target.checked:e.target.value;
        settable({...table,[name]:value})
    }
  return (
    <>
    <div className="tablecreation">
        <table>
            <tbody>
            <tr>
                <td>Name:</td>
                <td>{table.name}</td>
            </tr>
            <tr>
                <td>Age:</td>
                <td>{table.age}</td>
            </tr>
            <tr>
                <td>gender</td>
                <td>{table.gender}</td>
            </tr>
            <tr>
                <td>Married Status: </td>
                <td>{table.ismarried ? "Married": "Single"}</td>
            </tr>
            <tr>
                <td>Country</td>
                <td>{table.country}</td>
            </tr>
            <tr>
                <td>Description</td>
                <td>{table.description}</td>
            </tr>
            </tbody>
        </table>
        <form action="">
            <input type="text" placeholder="Full Name" value={table.name} onChange={handler} name="name"/>
            <input type="number" placeholder="Age" value={table.age} onChange={handler} name="age"/>
            <div className="gender">
                <label htmlFor="male">
                    <input type="radio" name="gender" onChange={handler} id="male" checked={table.gender==="Male"} value="Male"/>Male</label>
                <label htmlFor="female"><input type="radio" onChange={handler} name="gender" checked={table.gender==="female"} id="female" value="female"/>Female</label>

            </div>

            <label htmlFor="isMarried"><input type="checkbox" name="ismarried" onChange={handler} checked={table.ismarried} id="isMarried" />is Married</label>
            <div className="select">
                <label htmlFor="">Select Country:</label>
                <select name="country" id="country" value={table.country} onChange={handler}>
                    <option value="India">India</option>
                    <option value="Australia">Australia</option>
                    <option value="America">America</option>

                </select>
            </div>
            <div className="description">
            <label htmlFor="">Description:</label>
            <textarea name="description" id="description" cols="30" rows="5" value={table.description} onChange={handler}></textarea>
            </div>
        </form>
    </div>
    </>
  )
}
