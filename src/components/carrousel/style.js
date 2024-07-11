import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 20px 60px;

    .react-multi-carousel-list {
        background: rgba(103, 101, 113, 0.34);
        border: 1px solid rgba(255, 255, 255, 0.14);
        backdrop-filter: blur(1px);
        border-radius: 24px;

        & li {
            display: flex;
            padding: 8px;
            align-items: center;
        }
    }
`;
export const Text = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    margin: 12px 0;
`;
export const MovieImage = styled.img`
    width: 200px;
    height: 290px;
    cursor: pointer;
    border-radius: 20px;
    transform: scale(0.9);
    transform: 0.3s;
    border: 1px solid #3f3f3f;
    box-shadow: 0 12px 8px rgba(0, 0, 0, 0.9);
    &:hover {
        transform: scale(1);
    }
`;
