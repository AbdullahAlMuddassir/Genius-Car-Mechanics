import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json()
        .then(data => setServices(data)));
    },[])
    const handleDeleteButton=id=>{
            const url=`http://localhost:5000/services/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount){
                    alert("Delete successfully")
                    const remainng=services.filter(service => service._id!== id)
                    setServices(remainng);
                }
            })
    }
    return (
        <div>
            <h2>This is ManageServices</h2>
            {
                services.map(service => <div key={service._id}>
                        <h2>{service.Name}</h2>
                        <button onClick={()=> handleDeleteButton(service._id)}>Remove</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;