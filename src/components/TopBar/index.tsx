import { FC, useContext, useLayoutEffect } from 'react';
import styled from 'styled-components'
import Container from '../Container';
import LogoImage from '@assets/images/logo-ss.png';
import { ArrowSquareUpRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import ColorContext from '@/libs/colorContext';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 22px 0;
    z-index: 999;
    .nav-container{
        justify-content: space-between;
        display: flex;
    }
`;

const Logo = styled(Link)`

    &:hover{
        img{
            filter: unset;
        }
    }

    img{
        max-width: 120px;
    }
`;


const NavMenu = styled.ul<{ color?: string; }>`
    list-style: none;
    grid-column-gap: 22px;
    grid-row-gap: 22px;
    display: flex;
    flex: 0 auto;
    justify-content: center;
    align-items: center;
    padding-left: 140px;
    li{
        a{
            outline: 0;
            text-decoration: none;
            transition: all .2s ease-in-out;
            &:hover{
                color: ${props => props.color === "primary" ? "#008fff" : "#001C30"};
            }
            &.active{
                color: ${props => props.color === "primary" ? "#008fff" : "#001C30"};
                border-bottom: 2px solid ${props => props.color === "primary" ? "#008fff" : "#001C30"};
                pointer-events: none;
            }
        }
    }
`;

const ContactNav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    a{
        font-weight: 600;
        text-decoration: none;
        border: 1.8px solid #008fff;
        padding: 6px 14px;
        display: flex;
        align-items: center;
        border-radius: 2px;
        svg{
            margin-left: 6px;
        }
        &:hover{
            background-color: #008fff;
            border: 1.8px solid #008fff;
            color: #fff !important;
        }
    }
`


const TopBar: FC = () => {
    const { color } = useContext(ColorContext);
    
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const showAnim = gsap.from(".header", {
                            yPercent: -80,
                            paused: true,
                            duration: 0.4
                        }).progress(1);

        const ctx = gsap.context(() => {
            gsap.timeline({ 
                scrollTrigger: {
                  start: "top top",
                  scrub: true,
                  pin: true,
                  onUpdate: (self) => {
                        self.direction === -1 ? showAnim.play() : showAnim.reverse();
                    }
                } 
              });
        }, []);
        return () => ctx.revert();
    },[])
    
    return (
        <Header className='header'>
            <Container className='nav-container'>
                <Logo to={`/`}>
                    <img src={LogoImage} alt="Logo" />
                </Logo>
                <NavMenu color={color}>
                    {/* <li>
                        <NavLink 
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <NavLink to="#work">
                            Work
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">
                            Services
                        </NavLink>
                    </li> */}
                    <li>
                        <ContactNav>
                            <Link to="https://wa.me/6289663656560?text=Hello Sopi Septiansyah, I Want to ..." target='_blank'>
                                Let`s Talk! <ArrowSquareUpRight size={36} />
                            </Link>
                        </ContactNav>
                    </li>
                </NavMenu>
            </Container>
        </Header>
    )
}

export default TopBar;