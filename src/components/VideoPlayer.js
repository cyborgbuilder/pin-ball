import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'


function VideoPlayer() {
  return (
    <Container>
        <ReactPlayer  url='/images/banner.mp4' config={{ file: { attributes: {autoPlay: true,muted: true  }}}} playing='playing' loop='true' height='' width=''  />
    </Container>
  )
}

const Container = styled.div`
    width: 100%
    min-height: 100vh;


`
export default VideoPlayer