import React from 'react'
import {getDateObj} from '../../utility'
import "./date.css"

export default function Data(props) {
    const {createdOn} = props
    const dateObj = {...getDateObj(createdOn)}
    
    return (
        <div>
            <p className="dateTitle">{dateObj.date}</p>
            <p className="date">{dateObj.message}</p>
        </div>
    )
}
