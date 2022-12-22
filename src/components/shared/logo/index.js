import React from "react";
import logo from "../../../assets/logo/logo.png"

export default function Logo({isSmall}){
    return(
        <img className="logo" src={logo} alt='ringtone logo' width={isSmall ? 50 : 80}></img>
    );
}