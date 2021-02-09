import React, {useEffect} from 'react';
import Typed from 'typed.js';

const Typing = (props) => {

    const options = {
        strings: props.typing,
        backSpeed: 80,
        typeSpeed: 80,
        loop: true,
        startDelay: 100,
        backDelay: 500,
    };

    useEffect(() => {
        const typed = new Typed('#typing', options);
        return () => typed.destroy();
    }, []);

    return (
        <span id="typing"/>
    )
};

export default Typing;
