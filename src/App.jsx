import './App.css'
import * as Yup from "yup";
import {useFormik} from "formik";
import {useState} from "react";

const users = [
    {
        username: "admin",
        password: "123"
    }
]
const validateLogIn = Yup.object({
    username: Yup
        .string()
        .required("username is required"),
    password: Yup
        .string()
        .min(3,"Too short")
        .max(10,"Too long")
})

function App() {
    const [form,setForm] = useState({
        username: "",
        password: ""
    })
    const formLogIn = useFormik({
        initialValues:form,
        validationSchema:validateLogIn,
        onSubmit: (values)=>{
            console.log(values)
        }
    })
    return (
        <>
            <table>
                <tr>
                    <td>Username:</td>
                    <td><input type="text" name="username" value={formLogIn.values.username} onChange={formLogIn.handleChange}/></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="password" name="password" value={formLogIn.values.password} onChange={formLogIn.handleChange}/></td>
                </tr>
            </table>
            <button onClick={()=>formLogIn.handleSubmit()} type="submit">Log In</button>
        </>
    )
}

export default App
