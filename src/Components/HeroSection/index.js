import React , {useState} from 'react'
import  video from'../../Videos/video.mp4'
import {ButtonC} from '../ButtonElement'
import {HeroContainer, Herobg ,Videobg , HeroContent ,Heroh1 ,HeroP, HeroBtnWrapper, ArrowForward ,ArrowRight} from './HeroElements'

function HeroSection() {
    const [hover, setHover] =useState(false)

    const onHover =()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer id="home"  >
            <Herobg>
                <Videobg autoPlay loop muted src={video} type='video/mp4'/>
            </Herobg>
            <HeroContent>
                <Heroh1>LET'S DRIVE THE MARKET</Heroh1>
                <HeroP>Start your own e-commerce website accompanied by resourceful tools that help you make sales, manage marketing and engage with costomers.</HeroP>
                    <HeroBtnWrapper >
                        <ButtonC
                         to='sighup'
                          onMouseEnter={onHover}
                         onMouseLeave={onHover}
                         primary={true}
                         dark={true}
                         smooth={true}
                       duration={500}
                       spy={true}
                       exact='true'
                       offset={-80} > Start Free Trial {hover ? <ArrowForward /> : <ArrowRight />} </ButtonC>
                    </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer >
    )
}

export default HeroSection
