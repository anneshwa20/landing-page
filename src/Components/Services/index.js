import React from 'react'
import icon1 from '../../Images/undraw_Online_learning_re_qw08.svg'
import icon2 from '../../Images/undraw_off_road_9oae (1).svg'
import icon3 from '../../Images/undraw_Credit_card_re_blml.svg'
import {ServicesContainer, ServicesCard , ServicesH1 ,ServicesH2 ,ServicesIcon , ServicesP ,ServicesWrapper} from './ServiceElement'

function Services() {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={icon1} />
                <ServicesH2>Reduce Expences</ServicesH2>
                <ServicesP>We help reduces your fees and increase your overall revenue.</ServicesP>     
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={icon2} />
                <ServicesH2>Virtual Offices</ServicesH2>
                <ServicesP>You can access our platform online anywhere in the world.</ServicesP>     
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={icon3} />
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>     
            </ServicesCard>
        </ServicesWrapper>            
        </ServicesContainer >
    )
}

export default Services
