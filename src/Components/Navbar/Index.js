import React , {useState , useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {Nav , NavbarContainer , NavbarLogo , MobileIcon,NavMenu, NavItems, NavLink , NavBtn , NavBtnLink   } from './NavbarElements'

function Navbar({toggle}) {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
      window.addEventListener('scroll', changeNav)
    },[])
    const toggleHome = () =>{
        scroll.scrollToTop()
    }
    return (
       <>
       <Nav scrollNav={setScrollNav}>
           <NavbarContainer>
               <NavbarLogo to= "/" onClick={toggleHome}>
                  YOUR VANDORE SHOP
               </NavbarLogo>
               <MobileIcon onClick={toggle}>
                   <FaBars />
               </MobileIcon>
               <NavMenu >
                   <NavItems>
                       <NavLink to="about"
                       smooth={true}
                       duration={500}
                       spy={true}
                       exact='true'
                       offset={-80}
                       > About </NavLink>
                   </NavItems>
                   <NavItems>
                       <NavLink to="discover" 
                       smooth={true}
                       duration={500}
                       spy={true}
                       exact='true'
                       offset={-80}> Discover </NavLink>
                   </NavItems>
                   <NavItems>
                       <NavLink to="services"
                        smooth={true}
                       duration={500}
                       spy={true}
                       exact='true'
                       offset={-80}> Services </NavLink>
                   </NavItems>
                   <NavItems>
                       <NavLink to="signup"
                        smooth={true}
                       duration={500}
                       spy={true}
                       exact='true'
                       offset={-80}> Sign Up </NavLink>
                   </NavItems> 
               </NavMenu>
               <NavBtn>
                   <NavBtnLink to="/signin" > Sign In </NavBtnLink>

               </NavBtn>
           </NavbarContainer>
       </Nav>
       </>
    )
}

export default Navbar
