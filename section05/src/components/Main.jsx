import React from 'react';
import './Main.css';

const Main = () => {
    const user = {
        name: 'bize',
        isLogin: true,
    }

    return (
        <>
            {user.isLogin ?
                <div className="logout">로그아웃</div> :
                <div>로그인</div>
            }
        </>
    );
};

export default Main;
