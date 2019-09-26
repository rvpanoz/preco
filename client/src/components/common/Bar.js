import React from 'react'
import styled from 'styled-components';

const BarContainer = styled('div')({

})

const BarContent = styled('div')({
    width: ["25px"],
    height: ["225px"],
    backgroundColor: '#000'
})

const Bar = () => <BarContainer><BarContent></BarContent></BarContainer>

export default Bar