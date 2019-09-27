import React from 'react'
import { useEffect, useRef, useState } from 'react'
import config from '../config'
import Bar from './common/Bar';

const { url } = config;
const socket = io(url);

// TODO: remove it

const App = props => {
    const [inputValue, setInputValue] = useState('');
    const onChange = e => setInputValue(e.target.value);

    useEffect(() => {
        console.log('App is mounted')
        socket.on('broadcast:draw', data => console.log(data))
    }, []);

    useEffect(() => {
        socket.emit('event:draw', inputValue)
    }, [inputValue])


    return <div>
        <Bar />
    </div>
}

export default App