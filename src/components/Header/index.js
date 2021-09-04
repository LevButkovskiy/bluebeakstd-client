import React from 'react';
import './styles.css';

import Button from "../Button";

export default function Header(props) {
    return (
        <>
            <div className="header">
                <div className="title">BlueBeakStd.ru</div>
                <div className="authButtons">
                    <Button id="login">Log In</Button>
                    <Button id="register">Register</Button>
                </div>
            </div>
            <div className="menu">
                <div className="api">Api</div>
                <div className="api">Api</div>
                <div className="api">Api</div>
                <div className="api">Api</div>
            </div>
        </>

    )
}
