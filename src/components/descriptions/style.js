import styled from 'styled-components';

export const Container = styled.div`
    width: 620px;
    padding: 50px 60px 20px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-weight: 700;
    font-size: 40px;
    color: #ffffff;
`;

export const Description = styled.p`
    font-weight: 500;
    font-size: 21px;
    color: #ffffff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

export const Button = styled.button`
    width: 194px;
    height: 56px;
    margin-top: 16px;
    background: #fa4776;
    border-radius: 40px;
    border: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    font-weight: 600;
    font-size: 22px;
    color: #ffffff;
    transition: 0.3s;
    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
    &:active {
        opacity: 0.5;
    }
`;
