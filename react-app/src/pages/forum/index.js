import React,{useEffect, useState} from "react";

import Axios from "axios";
import style from './style.module.scss';

const Forums = () => {

        const [loadingForums, setforum] = useState(true),
        [forum, setPostList] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios('http://localhost:8080/forum');
            setPostList(result.data);
        }

        if (forum) {
            setforum(false);
        }

        const timer = setTimeout(() => {
            !forum && fetchData(); 
        }, 1000);
        return () => clearTimeout(timer);

    }, [forum]);


    

    return (
        <div>
          
            <div >
                
            

            </div>
            {loadingForums ? <h3>Loading Forums ...</h3> :
                <>
                    <h2 className={style.test}>TPM!</h2>
                    
                    
                    <div >
                    {forum.map(forum => (
                        <div className={style.test}>
                            
                            <div key={forum.id}>
                            <p >Title: {forum.title}</p>
                            <p >Content: {forum.body}</p> 
                             
                               
                            </div>    
                            
                        </div>
                    ))}
                    </div>
                </>
            }

        </div>
    );
}

export default Forums;