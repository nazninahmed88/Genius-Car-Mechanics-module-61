import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service , setservice] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res=> res.json())
        .then(data=> setservice(data))
    },[])
   
    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
                <h4> name : {service.name} </h4>
        </div>
        
    );
};

export default Booking;