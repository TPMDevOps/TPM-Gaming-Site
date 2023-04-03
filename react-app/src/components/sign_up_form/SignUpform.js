import React, { useState } from 'react';

import User from '.';
import axios from 'axios';
import style from './style.module.scss';

const SignUpForm = ({signUpForm }) => {

    

    const [formInfo, setFormInfo] = useState({
        username: "",
        email: "",
        password: ""
       
        
       
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setFormInfo({
            ...formInfo,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const authorData = {
            username: formInfo.username,
           email: formInfo.email,
           password: formInfo.password
            
            
        };

        axios.post('http://localhost:8080/api/signup/new-user', authorData).then((response) => {
            console.log(response.status);
            console.log('DATA', response.data);
            setFormInfo(response.data);
        });
        window.location.reload();
    };


    return (
   <div>
    
   </div>
           
           
       

    );
}

export default SignUpForm;