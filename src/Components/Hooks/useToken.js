import { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(()=>{
        const email = user?.user?.email;
        const newUser = {
            email:email
        };
        if (email) {
            fetch(`https://power-tools-server-cl9m.onrender.com/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type':'application/json'
                },
                body:JSON.stringify(newUser)
            })
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }
    },[user])
    return [token]
};

export default useToken;