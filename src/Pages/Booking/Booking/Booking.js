import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    const [service,setService]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data=> setService(data));
    },[])
    return (
        <div>
            <h1>Details:{service.Name}</h1>
            <h2>this is booking: {serviceId}</h2>
            <Link to="/manageServices">ManageServices</Link>
        </div>
    );
};

export default Booking;