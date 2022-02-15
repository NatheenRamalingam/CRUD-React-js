import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { toast } from 'react-toastify';
import UserApi from '../API/UserApi';


function Update() {

    const[user,setUser] = useState({
        name : "",
        email : "",
        mobile : "",
        address : ""
    });
    const params = useParams();



    useEffect(()=>{
        UserApi.getById(params.id).then(res=>{
            setUser(res.data)
        }).catch(err=>toast.error(err.message))
    },[]);



    const changeText = (e)=>{
        const{name,value} = e.target;
        setUser({...user,[name]:value});

    }


    const submitHandler = (e)=>{
        e.preventDefault();
        UserApi.update(user,params.id).then(res=>{
            toast.success("User Updated Successfully");
            window.location.href = `/`;
        }).catch(err=>toast.error(err.message))
    }
    return (
        <div className='container'>
        <div className="row">
            <div className='col-md-12 text-center'>
            <h1 className='display-3'>Update</h1>

            </div>
        </div>
        <div className="row">
            <div className='col-md-6 offset-md-3'>

                <div className='card'>
                    <div className='card-body'>
                    <form action="" onSubmit={(e)=>{submitHandler(e)}}>
                    <div className='form-group'>
                    <label htmlFor="name">Name :</label><br />
                    <input type="text" name="name" id="name" value={user.name} onChange={(e)=>{changeText(e)}} placeholder='Enter Your Name' className='form-control'/>

                    </div>
                    <div className='form-group'>
                    <label htmlFor="email">Email :</label><br />
                    <input type="email" name="email" id="email" value={user.email} onChange={(e)=>{changeText(e)}} placeholder='Email Address' className='form-control'/>

                    </div>
                    <div className='form-group'>
                    <label htmlFor="mobile">Mobile :</label><br />
                    <input type="number" name="mobile" id="mobile" value={user.mobile} onChange={(e)=>{changeText(e)}} placeholder='Enter Mobile Number' className='form-control'/>

                    </div>
                    <div className='form-group'>
                    <label htmlFor="address">Address :</label><br />
                    <input type="address" name="address" id="address" value={user.address} onChange={(e)=>{changeText(e)}} placeholder='Enter Address' className='form-control'/>

                    </div><br />
                    <div>
                        <input type="submit" name="submit" id="" className='btn btn-outline-success'/>
                       
                    </div>
                    
                </form>

                    </div>

                </div>
                

            </div>
        </div>
        
    </div>
    )
}

export default Update
