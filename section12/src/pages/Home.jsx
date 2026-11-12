import React from 'react';
import {useSearchParams} from "react-router";

const Home = () => {
    const [params, setParams] = useSearchParams();
    console.log(params.get("value"));

    return (
        <div>
            
        </div>
    );
};

export default Home;