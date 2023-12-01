import { Flex } from '@chakra-ui/react'
import React from 'react'
import "./Home.css";
import {  useNavigate } from 'react-router-dom'
import logo from "../images/logo.png"

const Home = () => {
    const navigate=useNavigate()
  return (
    <div>
        <h2 className="mt-5" style={{color:"red",fontSize:"50px"}}>Welcome To</h2>
        <div justifyContent={"center"} mt="3%">
            <img width={" 400px"}   src={logo}/>
        </div>
        <Flex justifyContent={"space-around"} mt={"10px"} alignItems={"center"}>
            
                <button className="subscribers" onClick={()=>navigate("/subscriber")}     >
                Subscriber
                    </button>
                    <div style={{ borderLeft: '1px solid #000', height: '200px' }}></div>
                <button className="advertiser" onClick={()=>navigate("/advertiser")} size={"lg"}>
                Advertiser
                    </button>
                    
        </Flex>
        
    </div>
  )
}

export default Home