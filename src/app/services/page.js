"use client"

import React from 'react'
import { useSelector } from 'react-redux'

function Services() {
    const datas = useSelector(state => state.data);
    return (
        <div>
            <div className='container'>
            <div className='row'>
            <ul class="list-group">
                {datas.map(datas => (
                 <li key={datas.id} class="list-group-item">{datas.category},{datas.price},{datas.title}</li>
                ))}
            </ul>
            </div>
            </div>
         
        </div>
    )
}

export default Services



