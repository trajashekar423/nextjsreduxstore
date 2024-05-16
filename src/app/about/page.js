"use client"

import { useSelector } from "react-redux";
import Image from "next/image";
import React from 'react'

function About() {
    const Aboutitems = useSelector(state => state.data);
    return (
        <div className="container">
            <div className="row">
            {Aboutitems.map(Aboutitems => (
                <div key={Aboutitems.id} className="col-4 mb-4">
                    <div class="card">                   
                            <div class="card-body">
                                <h5 class="card-title">{Aboutitems.title}</h5>
                                <p class="card-text">{Aboutitems.description}</p>
                                <a href="#" class="btn btn-primary">{Aboutitems.price}</a>
                            </div>
                    </div>
                </div>
                  ))}
            </div>
        </div>

    )
}

export default About


    
