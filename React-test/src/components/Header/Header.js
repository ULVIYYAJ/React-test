import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AccountCircle } from '@mui/icons-material';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import logo from '../../img/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { toast } from 'react-toastify';

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-left: -1rem;
  }
`;


const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 27px 87px;
  height: 125px;
  background-color: #172A4F;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 25px 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 30px;
    height: auto;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-family: "DMSans-Regular", sans-serif;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;



const NavLink = styled.li`
  margin: 0 1rem;
  font-size: 26px;
  color: white;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
`;



const UserSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const UserLink = styled.li`
  margin: 0 1rem;
  font-size: 27px;
  color: white;
  list-style-type: none;
  font-family: "Inter", sans-serif;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 1rem auto;
  }
`;

const WhiteIcon = styled(AccountCircle)`
  color: white;
  width: 73px !important;
  height: 75px !important;
`;

const WhiteNotificationIcon = styled(NotificationAddIcon)`
  color: white;
  width: 30px !important;
  height: 27px !important;
`;

const HamburgerMenu = styled(MenuIcon)`
  color: white;
  position: absolute;
  top: 20px;
  left: 30px;
`;

const CloseMenu = styled(CloseIcon)`
  color: white;
  position: absolute;
  top: 20px;
  left: 30px;
`;

const Logo = styled.img`
  width: 206px;
  height: 72px;
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  useEffect(() => {
    const timer = setTimeout(() => {
      toast.success('Logged in successfully', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
<HeaderWrapper>
      <Logo src={logo} alt="logo" />
      {!isMobile || menuOpen ? (
        <LinksWrapper>
        <MenuWrapper>
          <NavLinks style={{ flexDirection: isMobile && menuOpen ? 'column' : 'row' }}>
            <NavLink>Market</NavLink>
            <NavLink>Trade</NavLink>
            <NavLink>Dashboard</NavLink>
          </NavLinks>
          <UserSection style={{ flexDirection: isMobile && menuOpen ? 'column' : 'row' }}>
            <UserLink>Wallet</UserLink>
            <UserLink>Orders</UserLink>
            <WhiteNotificationIcon />
            <WhiteIcon />
          </UserSection>
        </MenuWrapper>
        </LinksWrapper>
      ) : null}
      {isMobile && (
        <div onClick={toggleMenu}>
          {menuOpen ? <CloseMenu /> : <HamburgerMenu />}
        </div>
      )}
    </HeaderWrapper>
  );
};

export default Header;
