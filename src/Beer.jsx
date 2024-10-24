import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {routes} from "./utils/routes"
import Card from './components/Card';

//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const [beer, setBeer] = useState({});
    const navigate = useNavigate();

    const getBeer = async () => {
        const res = await fetch(`https://api.sampleapis.com/beers/ale/${params.id}`);
        const data = await res.json();
        setBeer(data);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    useEffect(() => {
        getBeer();
    }, [params.id]);

    return (
        <div>
            {loading ? (
                "Hagamos de cuenta que soy un spinner..."
            ) : (
                <>
                    <h2>Cerveza numero... {beer.id}</h2>
                    <div className='card'>
                        <Card key={beer.id} data={beer} />
                    </div>
                    
                </>
            )}
        </div>
    );
};

export default Beer;