import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin6Fill } from "react-icons/ri";
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
        view();
    },[]);
    useEffect(()=>{
    console.log(props.additionalProp); // "additional data"
    })
    const view = () => {
        axios.get('https://contactlist-api.onrender.com/')
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
        
        axios.delete('https://contactlist-api.onrender.com/'+id)
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
                        {
                list.length == 0 ? <div class="loader">
                <div class="justify-content-center jimu-primary-loading"></div>
              </div> :
            
            <table class="table table-striped table-hover " style={{textAlign:"center"}}>
                <tr>                   
                    <th className="px-0">profile</th>
                    <th>firstname</th>
                    <th className="d-none d-md-table-cell">lastname</th>
                    <th className="d-none d-lg-table-cell">nickname</th>
                    <th className="d-none d-sm-table-cell">contact</th>
                    <th className="d-none d-lg-table-cell">email</th>
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
                                        <td className="px-0 "><div className="profile" key={ind} style={{backgroundColor:[color[count]]}}>{ele.firstName[0]}</div></td>
                                        <td>{ele.firstName}</td>
                                        <td className="d-none d-md-table-cell">{ele.lastName}</td>
                                        <td className="d-none d-lg-table-cell">{ele.nickName}</td>
                                        <td className="d-none d-sm-table-cell">{ele.mobileNo}</td>
                                        <td className="d-none d-lg-table-cell">{ele.email}</td>
                                        <td className="p-0"onClick={()=>{remove(ele._id)}}><Link><RiDeleteBin6Fill /></Link></td>
                                        <td ><Link to={`/update/`+ele._id}><RxUpdate/></Link></td>
                                    </tr>
                            )
                        })
                    }
                    
            
            </table>
}
        </div>
    )
}
export default Contact