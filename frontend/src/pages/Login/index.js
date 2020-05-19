import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import api from '../../services/api';



export default function Login() {
    const [search] = useState("")
    const [ remedios, setRemedios ] = useState([]);
    const history = useHistory();

    // useEffect(()=>{
    //     api.get('search', remedios).then(response=>{
    //         setIncidents(response.data);
    //     })
    // }, [remedios]);

    async function handleRemedios(search){
        try{
            await api.get('search', search).then(response=>{
                setRemedios(response.data.name);
                history.push('/remedios');
            })
        }catch (err){
            alert(err);
        }
    }

    return(
        <div>
            <input 
                placeholder="Buscar" 
                value={search}
                //onChange={handleRemedios(search)}
            />

        </div>
    );
}