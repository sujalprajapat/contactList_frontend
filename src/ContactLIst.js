import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ContactLIst() {
    var perpage= 4;
    const [currentpage,setcurrentpage]=useState(0);
    var [list, setlist] = useState([]);
    // var count=0;
    const handlepage=(pageno)=>{
        setcurrentpage(pageno);
    }
    var color=["pink","yellow","lightgreen","darkgreen","aqua","lightgrey","red","orange","gold","black"];
    console.log();
    // console.log(token);
    useEffect(() => {
        axios.get('https://contactlist-api.onrender.com/')
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                const newList = response.data.data.map((item, index) => ({
                    ...item,
                    color: color[index % color.length] // Assign color from the color array based on index
                }));
                setlist(newList);
                // setlist(response.data.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    var numberofpages = Math.ceil(list.length/perpage);
    var pageindex = Array.from({length : numberofpages},(_,ind)=>ind+1)
    var rows = list.slice(currentpage*perpage,(currentpage+1)*perpage);
    return (
        <div>
            {
                rows.length == 0 ? <div class="loader">
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
                        rows.map((ele,ind)=>{
                            return(
                                    <tr>
                                        <td className="px-0 px-sm-3"><div className="profile" key={ind} style={{backgroundColor:[ele.color]}}>{ele.firstName[0]}</div></td>
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
            <div className="list1">
            <Link style={currentpage < 1 ? {display:"none"} : {display:"block"}} onClick={()=>{handlepage(currentpage-1)}}>&lt;</Link>
            {
                    pageindex.slice(Math.max(0,currentpage -2),Math.min(numberofpages,currentpage+1)).map((ele,ind)=>{
                        return <Link className={currentpage == ele ? "active" : ""} onClick={()=>{handlepage(ele-1)}}>{ele}</Link>
                    })
            }
            <Link  style={currentpage >= numberofpages-1 ? {display:"none"} : {display:"block"}} onClick={()=>{handlepage(currentpage+1)}}>&gt;</Link>
            </div>
        </div>
    )
}
export default ContactLIst;