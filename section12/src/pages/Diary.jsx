import {useParams} from "react-router";
import React from 'react';

const Diary = () => {
    const params = useParams();
    console.log(params);

    return (
        <div>
            {params.id}번 일기입니다
        </div>
    );
};

export default Diary;