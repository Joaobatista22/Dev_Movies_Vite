import styled from 'styled-components';
import logoImage from '../../assets/logo_hearder.png';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 12px 8px rgba(0, 0, 0, 0.9);

    nav {
        display: flex;
        align-items: center;
        gap: 16px;
        flex-direction: row;
    }
    a {
    color: #ffffff;
    text-decoration: none;
    font-size: 25px;
    line-height: 25px;
    letter-spacing: 0.03em;
    transition: 0.3s;
    position: relative;
    margin-left: 50px;
    margin-right: 20px;

    &:hover {
        color: #FF1500;
    opacity: 0.7;
    }
    &::after {
        content: "" ;
        width: 0;
        height: 3px;
        background-color: #FF1500;
        position: absolute;
        bottom: -4px;
        left: 0;
        transition: 0.3s;
    }
    &:hover::after {
        width: 100%;
    }
    }
`;
export const LogoImage = styled.div`
    width: 190px;
    height: 70px;
    background-image: url(${logoImage});
    background-size: contain;
    background-repeat: no-repeat;
`;
