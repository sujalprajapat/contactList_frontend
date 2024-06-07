import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update(){
    var id = useParams(id);
    var navigate = useNavigate();
    console.log(id.id);
    var [list, setlist] = useState([]);
    var [fname,setfname]= useState('');
    var [lname,setlname]= useState('');
    var [nname,setnname]= useState('');
    var [contact,setcontact]= useState('');
    var [email,setemail]= useState('');
    var [ck,setck] = useState(true);
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
        axios.get('https://contactlist-api.onrender.com/')
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
        setck(false);
        axios.patch('https://contactlist-api.onrender.com/'+id.id, {
            firstName: fname,
            lastName: lname,
            mobileNo: contact,
            email: email,
            nickName: nname,
          })
          .then(function (response) {
            console.log(response);
            navigate('/contact');
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return(
        <div className="form">
        <div className="form1" style={{margin:"auto"}}>
        <h2 style={{textAlign:"center" , textTransform:"uppercase",color:"#712CF9",borderBottom:"1px solid lightgrey",paddingBottom:"20px"}}>update contact</h2>
        <h5>firstName</h5>
        <div className="in">
            <input type="text" onChange={(e)=>{setfname(e.target.value)}} value={fname}></input><br></br>
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
        <button type="submit"  className="submit-btn d-flex justify-content-center mt-2" onClick={()=>{updatedata()}}>
            {
                ck ? "update" : "updating..."
            }</button>
        </div>

    </div>
    )
}
export default Update