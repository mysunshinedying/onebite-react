import React from 'react';
import {useParams} from "react-router";

const Edit = () => {
    const params = useParams();

    return (
        <div>
            {params.id}번
        </div>
    );
};

export default Edit;