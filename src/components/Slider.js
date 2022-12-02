import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      accessibility: false,
      arrows: false
    };
    return (
        <Container>

            <Header>
                <Image>
                <img src="/images/txt_GamePlay.png" />
                </Image>
            </Header>
                <Slider {...settings}>
                    <Wrap>
                        <img src="/images/gamePlay1.png" />
                    </Wrap>

                    <Wrap>
                        <img src="/images/gamePlay2.png" />
                    </Wrap>

                    <Wrap>
                        <img src="/images/gamePlay3.png" />
                    </Wrap>

                    <Wrap>
                        <img src="/images/gamePlay4.png" />
                    </Wrap>

                    <Wrap>
                        <img src="/images/gamePlay5.png" />
                    </Wrap>

                    <Wrap>
                        <img src="/images/gamePlay6.png" />
                    </Wrap>
                </Slider>
        </Container>
    );
  }
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #320b03;

`

const Wrap = styled.div`
    width: 100%;
    border: none;

    img{
        width: 100%;
    }

`

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 100px 0;

`

const Image = styled.div`
    width: 30%;

    img{
        width: 100%;
    }

`