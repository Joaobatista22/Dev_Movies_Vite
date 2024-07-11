import styled from 'styled-components';

export const BackgroundImage = styled.div`
height: 100vh;
background-image: url(${(props) => props?.bgImage});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`;
export const BackgroundLinear = styled.div`
    background: 
    linear-gradient(to top, rgba(0, 0, 0, 1) 28%, transparent 65%),linear-gradient(to right, rgba(0, 0, 0, 1) 14%, transparent 44%)
`;
