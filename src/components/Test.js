import React from 'react'
import { useState, useEffect } from 'react'

const Test = () => {

    const [loading, setLoading] = useState(true);
    const [span1, setSpan1] = useState(false);
    const [span2, setSpan2] = useState(false);
    const [span3, setSpan3] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    })

    useEffect(() => {
        setTimeout(()=>{
            setSpan1(true)
        },500)
    })

    useEffect(() => {
        setTimeout(()=>{
            setSpan2(true)
        },1000)
    })

    useEffect(() => {
        setTimeout(()=>{
            setSpan3(true)
        },1500)
    })

    return (
        <div>
            {loading ? (<center style={{marginTop: 300}}><h1>Loading{span1 ? <span>.</span> : <div></div>}{span2 ? <span>.</span> : <div></div>}{span3 ? <span>.</span> : <div></div>}</h1></center>) : (
                <center>
                    <h1>This is home page</h1>
                </center>
            )}

        </div>
    )
}

export default Test