import styled from 'styled-components';

export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;
    }

    overflow-x: hidden;

    .react-multi-carousel-list {
        overflow: visible;
    }

    .react-multiple-carousel__arrow--left {
    top: 10px;
    left: 15px;
    }

    .react-multiple-carousel__arrow--right {
    top: 10px;
    }

    padding-left: 40px;
    padding-bottom: 40px;
`

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: ${(props) => props.theme.green};
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin: 70px 0;

    &::after {
        content: '';
        position: absolute;
        width: 56px;
        height: 4px;
        background-color: ${(props) => props.theme.green};
        bottom: 0;
        left: calc(50% - 28px)
    }
`
