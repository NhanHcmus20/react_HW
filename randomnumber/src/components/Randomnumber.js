import React from 'react'
import { useState , useEffect } from "react";
import Header from './Header'
import Body from './Body'


export default function Randomnumber() {
    const [Randomnumber, setRandomnumber] = useState(0)
    const [Userinput, setUserinput] = useState(0)

    
    const randomFunction = () => {
        let tmp = Math.floor(Math.random()*100 + 1);
        setRandomnumber(tmp);
    };
    
    const mouting = () => {randomFunction()}
    useEffect(mouting,[])


    return (
    <div>
        <Header/>
        <Body/>
        {Randomnumber}
        </div>
  )
}
