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
                <Heroh1>Virtual Banking Made Easy</Heroh1>
                <HeroP>Sign up for a new account today and receive 
                    $250 in credit towrads your next payment 
                    </HeroP>
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
                       offset={-80} > Get Strated {hover ? <ArrowForward /> : <ArrowRight />} </ButtonC>
                    </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer >
    )
}

export default HeroSection
