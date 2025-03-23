import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const FavrouriteMovies = () => {

    const [movies, setMovies] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        fetch('http://localhost:5000/favouriteall', {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({email: user.email})
        }).then(res => res.json())
        .then(data => {
            setMovies(data);
        })
    }, [user.email])


    return (
        <div>
            
        </div>
    );
};

export default FavrouriteMovies;