import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Update(){
    var id = useParams(id);
    console.log(id.id);
    var [list, setlist] = useState([]);
    var [fname,setfname]= useState('');
    var [lname,setlname]= useState('');
    var [nname,setnname]= useState('');
    var [contact,setcontact]= useState('');
    var [email,setemail]= useState('');
    var data = list.find((ele,ind)=>{
        return ele._id == id.id
    })
    // console.log(data);
    useEffect(()=>{
        view();
    },[])
    useEffect(()=>{
        if(data){
            setfname(data.firstName);
            setlname(data.lastName);
            setnname(data.nickName);
            setcontact(data.mobileNo);
            setemail(data.email);
        }
    },[data])
    const view=()=>{
        var token = localStorage.getItem('token');
        const headers = {
            Authorization: token
        }
        axios.get('https://service.apikeeda.com/contact-book', { headers })
        .then(function (response) {
            // handle success
            console.log(response.data.data);
            setlist(response.data.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    const updatedata=()=>{
        var token = localStorage.getItem('token');
        const headers = {
            Authorization: token
        }
        console.log("id",token);
        axios.patch('https://service.apikeeda.com/contact-book/'+id.id, {
            firstName: fname,
            lastName: lname,
            mobileNo: contact,
            email: email,
            nickName: nname,
          },{headers})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return(
        <div className="form">
        <div style={{width:'500px',margin:"auto"}}>
        <h2 style={{textAlign:"center" , textTransform:"uppercase",color:"#712CF9",borderBottom:"1px solid lightgrey",paddingBottom:"20px"}}>update contact</h2>
        <h5>firstName</h5>
        <div className="in">
            <input type="text" onChange={(e)=>{setfname(e.target.value)}} value={fname} class="form-control" id="validationCustom01" required></input><br></br>
        </div>
        <h5>lastName</h5>
        <div className="in">
        <input type="text" onChange={(e)=>{setlname(e.target.value)}} value={lname}></input>
        </div>
        <h5>contact no.</h5>
        <div className="in">
        <input type="text" onChange={(e)=>{setcontact(e.target.value)}} value={contact}></input>
        </div>
        <h5>email</h5>
        <div className="in">
        <input type="text" onChange={(e)=>{setemail(e.target.value)}} value={email}></input> 
        </div>
        <h5>nickName</h5>
        <div className="in">
        <input type="text" onChange={(e)=>{setnname(e.target.value)}} value={nname}></input>
        </div>
        <div className="submit-btn d-flex justify-content-center" onClick={()=>{updatedata()}}><Link to="/contact">submit</Link></div>
        </div>

    </div>
    )
}
export default Update