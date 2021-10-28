import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Manageservic = () => {
    const [services , setservices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=> setservices(data))
    }, [])

    const handeldelet = (id) =>{
            const url = `http://localhost:5000/services${id}`
            fetch(url , {
                method : 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                // if(data.deletedCount){
                //     alert('deleted')
                //     const remaining = services.filter(service => service._id !== id);
                //     setservices(remaining)
                    
                // }
                
            })
    }
    return (
        <div>
         <h2> manage service</h2>   
        {
            services.map(service => <div key = {service._id}>
                 <h5>{service.name}</h5>
                 <br />
             <button onClick={ ()=>handeldelet(service._id)}>delate</button>
                 </div>)
        }
        </div>
    );
};

export default Manageservic;