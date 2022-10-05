import React from "react";
import MainLayout from "../layouts/MainLayout";
export default function About(){

    return(
        <MainLayout>
            <h1>About Page</h1>
            <img src="https://images.pexels.com/photos/599708/pexels-photo-599708.jpeg?auto=compress&cs=tinysrgb&w=600"
             alt="" style={{//{{}}place holder jsx, object
                width:100,
                height:200,
                objectFit:"cover",
             }} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quasi? Laboriosam, iure suscipit nesciunt autem numquam sapiente eaque exercitationem excepturi. Omnis nam officia obcaecati exercitationem.</p>
        </MainLayout>
    )
}