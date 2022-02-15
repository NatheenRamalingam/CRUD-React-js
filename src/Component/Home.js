import axios from 'axios';
import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import UserApi from '../API/UserApi';

function Home() {
    const [users,setUsers]=useState([]);
    const [searchValue,setsearchValue] = useState('');
    const[sortValue,setSortValue] = useState('');

    const sortOptions = ["name","email","mobile","address"];
  


    useEffect(()=>{
        readuser()
    },[])


    const readuser = ()=>{
        UserApi.getAll().then(res=>{
            console.log('res.data=',res.data)
            setUsers(res.data);
        }).catch(err=>toast.error(err.message))
    }

    const deleteHandler= (id)=>{
        if(window.confirm("Are You Want to Delete" + ' '+id + " "+ '??')){
            UserApi.delete(id).then(res=>{
                toast.success('User Deleted');
                window.location.href = `/`
            })
        }else{
            toast.warning("Delete Terminated..")
        }
    }
    const handleReset = (e)=>{
        readuser()
    }

    const handleSearch = (e)=>{
        e.preventDefault();
        return axios
            .get(`http://localhost:4000/users?q=${searchValue}`)
            .then(response=>{
                setUsers(response.data);
                setsearchValue('')
                
            }).catch((err)=>console.log(err.message))

    }

    const handleSort = (e)=>{
        let value = e.target.value;
        setSortValue(value);
        return axios
            .get(`http://localhost:4000/users?_sort=${value}&_order=asc`)
            .then(response=>{
                setUsers(response.data);
            }).catch((err)=>console.log(err.message))

    }
    const handleFilter = (value)=>{
        return axios
            .get(`http://localhost:4000/users?mobile=${value}`)
            .then(response=>{
                setUsers(response.data);
            }).catch((err)=>console.log(err.message))
    }


    
   

    
    return (
        <div className='container'>
            <div className='row'>
                <h3 className='text-center'></h3>

            </div>

            <div className='container'>
            <div className="row">
                {
                    users.length === 0 ? (
                        <div className='col-md-12 text-center'>
                            <h2 className='text-center'>No User Data Found </h2>

                        </div>
                    ):(
                        <div className='container'>
                           <input type="text" className='m-2 w-50' placeholder='Search Users...' value={searchValue} onChange={(e)=>setsearchValue(e.target.value)} />
                           <button className='btn btn-outline-success m-1' type='submit' onClick={(e)=>handleSearch(e)}>Search</button>
                            <button type='reset' className='btn btn-outline-danger m-1' onClick={(e)=>handleReset()}>Reset</button><span className='m-2'>Sort By :
                            <select name="" id="" className='w-25' value={sortValue} onChange={(e)=>handleSort(e)}>
                                <option value="">Please select </option>
                                {
                                    sortOptions.map((item,key)=>{
                                        return(
                                            <option value={item}key={key}>{item}</option>
                                        )
                                    })
                                }

                                </select></span><span>Filter By :
                                    <button className='btn btn-success m-3' onClick={()=>handleFilter("9876543210")}>Mobile 9</button>
                                    <button className='btn btn-success'onClick={()=>handleFilter("8778151260")}>Mobile 8</button> </span>
                            <div className="row">
                                
                            {
                            users.map((item,key)=>{
                                return(
                                    <div className='col-md-4 mt-2 mb-2' key={key}>
                                        <div className='card'>
                                            <div className='card-header'>
                                                <h5 className='text-center'>{item.name}</h5>
    
                                            </div>
                                            <div className='card-body'>
                                                <ul className='list-group'>
                                                    <li className='list-group-item'>
                                                        <strong>E-mail :</strong>
                                                        <span className='float-end'>{item.email}</span>
    
                                                    </li>
                                                    <li className='list-group-item'>
                                                        <strong>Mobile :</strong>
                                                        <span className='float-end'>{item.mobile}</span>
    
                                                    </li>
                                                    <li className='list-group-item'>
                                                        <strong>Address :</strong>
                                                        <span className='float-end'>{item.address}</span>
    
                                                    </li>
    
                                                </ul>
    
                                            </div>
                                            <div className='card-footer'>
                                                <Link to={`/update/${item.id}`} className='btn btn-outline-primary' >EDIT</Link>
                                                <button className='btn btn-outline-danger float-end' onClick={()=>{deleteHandler(item.id)}}>DELETE</button>
                                                
    
                                            </div>
    
                                        </div>
    
                                    </div>
                                )
                            })
                        }

                            </div>
                            
                            
                        </div>
                    )

                }
               
            </div>
            
        </div>

        </div>
    )
}

export default Home
