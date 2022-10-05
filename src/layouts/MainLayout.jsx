import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout (props){
    return(
        <main>
            <Navbar />

            <div style={{
                width:'100%',
                minHeight :'450px',
                maxWidth:900,
                margin:'0 auto'
            }}>
                {props.children}
            </div>

            <Footer />
        </main>
    )
}