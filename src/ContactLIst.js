import axios from "axios";
import { useEffect, useState } from "react";

function ContactLIst() {
    var [list, setlist] = useState([]);
    var token = localStorage.getItem('token');
    var count=0;
    const headers = {
        Authorization: token
    }
    var color=["pink","yellow","lightgreen","darkgreen","aqua","lightgrey","red","orange","gold","black"];
    console.log();
    // console.log(token);
    useEffect(() => {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MTcyNTI4ODQyMDEtODEyOTE0ODc3IiwiaWF0IjoxNzE3MjUyODg0LCJleHAiOjE3MTc0MjU2ODR9.ZFsENsHd9kCjpUzEAj_he7psCGj7CVVX3bTZbIyS02E')
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
    }, [])
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
                                    </tr>
                            )
                        })
                    }
                    
            
            </table>
        </div>
    )
}
export default ContactLIst;