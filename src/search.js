import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Search(){
    var {test} = useParams();
        var [list, setlist] = useState([]);
        var count=0;
        var color=["pink","yellow","lightgreen","darkgreen","aqua","lightgrey","red","orange","gold","black"];
        console.log();
        // console.log(token);
        useEffect(() => {
            axios.get('https://contactlist-api.onrender.com/'+test)
                .then(function (response) {
                    // handle success
                    console.log(response.data.data);
                    setlist(response.data.data)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }, [test])
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
                        <th className="d-none d-sm-table-cell">lastname</th>
                        <th className="d-none d-lg-table-cell">nickname</th>
                        <th>contact</th>
                        <th className="d-none d-md-table-cell">email</th>
                    </tr>
                  
                        {
                            list.map((ele,ind)=>{
                                if(count == color.length-1){
                                    count=0;
                                }
                                count++;
                                return(
                                        <tr>
                                            <td className="px-0 px-sm-3"><div className="profile" key={ind} style={{backgroundColor:[color[count]]}}>{ele.firstName[0]}</div></td>
                                            <td>{ele.firstName}</td>
                                            <td className="d-none d-sm-table-cell">{ele.lastName}</td>
                                            <td className="d-none d-lg-table-cell">{ele.nickName}</td>
                                            <td>{ele.mobileNo}</td>
                                            <td className="d-none d-md-table-cell">{ele.email}</td>
                                        </tr>
                                )
                            })
                        }
                        
                
                </table>
                }
            </div>
        )
}
export default Search;