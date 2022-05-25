import { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(()=>{
        const name = user?.user?.displayName;
        const email = user?.user?.email;
        const newUser = {
            name:name,
            email:email
            // education:null,
            // location:null,
            // phone:null,
            // linkedInUrl:null
        };
        if (email) {
            fetch(`http://localhost:5000/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type':'application/json'
                },
                body:JSON.stringify(newUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }
    },[user])
    return [token]
};

export default useToken;