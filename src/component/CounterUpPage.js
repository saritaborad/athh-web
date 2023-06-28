import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


function CounterUpPage(props) {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <p id="ratingReview">
                    {counterOn && <CountUp start={0} end={props.number} duration={2} delay={0} />}+
                </p>
            </ScrollTrigger>
        </>
    )
}

export default CounterUpPage