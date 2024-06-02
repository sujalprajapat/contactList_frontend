import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useFormik } from 'formik'
const validationSchema = Yup.object({
    firstname: Yup.string().required('enter firstname ..!'),
    lastname: Yup.string().required('enter lastname ..!'),
    nickname: Yup.string().required('enter nickname ..!'),
    email: Yup.string().required('enter email ..!'),
    contact: Yup.number().required('enter your contact number ..!').max(9999999999, "max 10 digit are allowed ..!"),
})
function ContactForm(){
    var [fname,setfname]= useState('');
    var [lname,setlname]= useState('');
    var [nname,setnname]= useState('');
    var [contact,setcontact]= useState('');
    var [email,setemail]= useState('');
    var [first,setfirst] = useState(false);
    var [last,setlast] = useState(false);
    var [con,setcon] = useState(false);
    var [em,setem] = useState(false);
    var [nick,setnick] = useState(false);
    var [check,setcheck] = useState('');
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: { firstname:'' ,lastname:'',nickname:'',contact:'',email:''},
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => { 
            var token = localStorage.getItem('token');
            const headers = {
                Authorization: token
            }
            axios.post('https://service.apikeeda.com/contact-book', {
                firstName: values.firstname,
                lastName: values.lastname,
                mobileNo: values.contact,
                email: values.email,
                nickName: values.nickname,
              },{headers})
              .then(function (response) {
                console.log(response);
                resetForm();
                navigate('/');
              })
              .catch(function (error) {
                console.log(error);
                setcheck('check email');
              });
        }
    })
    
    return(
        <div className="form">
            
            <div style={{width:'500px',margin:"auto"}}>
            <h2 style={{textAlign:"center" , textTransform:"uppercase",color:"#712CF9",borderBottom:"1px solid lightgrey",paddingBottom:"20px"}}>add contact</h2>
            <form onSubmit={formik.handleSubmit}>
            <h5>firstName</h5>
            <div className="in">
                <input type="text" name="firstname" onChange={formik.handleChange} value={formik.values.firstname} onBlur={formik.handleBlur}></input><br></br>
                {
                                formik.errors.firstname && formik.touched.firstname ? (
                                    <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.firstname}</span>
                                ) : null
                            }
            </div>
            <h5>lastName</h5>
            <div className="in">
            <input type="text" name="lastname" onChange={formik.handleChange} value={formik.values.lastname} onBlur={formik.handleBlur}></input>
            {
                                formik.errors.lastname && formik.touched.lastname ? (
                                    <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.lastname}</span>
                                ) : null
                            }
            </div>
            <h5>contact no.</h5>
            <div className="in">
            <input type="text" name="contact" onChange={formik.handleChange} value={formik.values.contact} onBlur={formik.handleBlur}></input>
            {
                                formik.errors.contact && formik.touched.contact ? (
                                    <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.contact}</span>
                                ) : null
                            }
            </div>
            <h5>email</h5>
            <div className="in">
            <input type="text" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}></input> 
            {  em!= false ? <><br></br><span style={{color:"red"}}>enter email address</span></> : null}
            {
                                formik.errors.email && formik.touched.email ? (
                                    <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.email}</span>
                                ) : null
                            }
            </div>
            <h5>nickName</h5>
            <div className="in">
            <input type="text" name="nickname" onChange={formik.handleChange} value={formik.values.nickname} onBlur={formik.handleBlur}></input>
            {
                                formik.errors.nickname && formik.touched.nickname ? (
                                    <span style={{ color: "red", textTransform: "capitalize" }}>{formik.errors.nickname}</span>
                                ) : null
                            }
            </div>
            <button type="submit"  className="submit-btn d-flex justify-content-center mt-2" onClick={()=>{}}>submit</button>
            </form>

            </div>

        </div>
    )
}
export default ContactForm;