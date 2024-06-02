import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Contact(props){
    var [list, setlist] = useState([]);
    var token = localStorage.getItem('token');
    var count = 0;
    const headers = {
        Authorization: token
    }
    var color=["pink","yellow","lightgreen","darkgreen","aqua","lightgrey","red","orange","gold","black"];
    console.log();
    // console.log(token);
    useEffect(()=>{
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MTcyNTI4ODQyMDEtODEyOTE0ODc3IiwiaWF0IjoxNzE3MjUyODg0LCJleHAiOjE3MTc0MjU2ODR9.ZFsENsHd9kCjpUzEAj_he7psCGj7CVVX3bTZbIyS02E');
        view();
    },[]);
    useEffect(()=>{
    console.log(props.additionalProp); // "additional data"
    })
    const view = () => {
        axios.get('https://service.apikeeda.com/contact-book', { headers })
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setlist(response.data.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    const remove=(id)=>{
        
        axios.delete(' https://service.apikeeda.com/contact-book/'+id, { headers })
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                // setlist(response.data.data)
                view();
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    return (
        <div>
            <table class="table table-striped table-hover " style={{textAlign:"center"}}>
                <tr>
                    <th>profile</th>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>nickname</th>
                    <th>contact</th>
                    <th>email</th>
                    <th>delete</th>
                    <th>update</th>
                </tr>
              
                    {
                        list.map((ele,ind)=>{
                            if(count == color.length-1){
                                count=0;
                            }
                            count++;
                            return(
                                    <tr>
                                        <td ><div className="profile" key={ind} style={{backgroundColor:[color[count]]}}>{ele.firstName[0]}</div></td>
                                        <td>{ele.firstName}</td>
                                        <td>{ele.lastName}</td>
                                        <td>{ele.nickName}</td>
                                        <td>{ele.mobileNo}</td>
                                        <td>{ele.email}</td>
                                        <td onClick={()=>{remove(ele._id)}}><Link>delete</Link></td>
                                        <td ><Link to={`/update/`+ele._id}>update</Link></td>
                                    </tr>
                            )
                        })
                    }
                    
            
            </table>
        </div>
    )
}
export default Contact