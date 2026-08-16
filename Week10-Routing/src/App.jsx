import React, {useState} from "react";
import {BrowserRouter, Routes, Route, Outlet, Link} from "react-router-dom";
import Header from "./Routes/Header"
import Footer from "./Routes/Footer"
import Balance from "./Routes/Balance"
import Profile from "./Routes/Profile"
import {Home} from "./Routes/Home"
import UseRefFocus from "./Routes/useRefFocus"
import UseRefClock from "./Routes/useRefClock"

export default function App(){
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home />}></Route>
                    <Route path="balance" element={<Balance />} />
                    <Route path="profile" element={<Profile/>} />
                    <Route path="useRefFocus" element={<UseRefFocus />} />
                    <Route path="useRefClock" element={<UseRefClock />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
}

function Layout(){
    return <>
    <Header />
    <div style={{height:"80vh"}}>
        <Outlet/>
    </div>
    <Footer />
    </>
}


