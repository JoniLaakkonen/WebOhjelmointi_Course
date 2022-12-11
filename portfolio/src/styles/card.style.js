import styled from 'styled-components';

export const Card = styled.div`
    margin: 100px auto 0;
    width: 300px;
    height: 700px;
    perspective: 1000px;
`
export const CardInner = styled.div`
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
    
    &.is-flipped {
        transform: rotateY(180deg);
    }
`

export const CardFace_front = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 16px;
    background: linear-gradient(to bottom right, var(--color-main), var(--color-secondary));
`
export const CardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 16px;
    background-color: var(--color-light);
    transform: rotateY(180deg);
`
export const CardName = styled.h2`
    color: #fff;
    font-size: 32px;
    padding: 1rem;
`
export const CardContent = styled.div`
    width: 100%;
    height: 100%;
`
export const CardHeader = styled.div`
    position: relative;
    padding: 10px 10px 20px;

    :after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        border-radius: 0 0 50% 0;
        box-shadow: 1px 1px 10px 1px;
        background-image: linear-gradient(to bottom left, var(--color-main) 10%, var(--color-secondary) 115%);;
    }
`
export const CardImg = styled.img`
    display: block;
    width: 128px;
    height: 128px;
    margin: 0 auto 20px;
    border-radius: 50%;
    background-color: #fff;
    border: 5px solid #fff;
    object-fit: cover;
`
export const HeaderText = styled.h2`
    color: #fff;
    font-size: 24px;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
`
export const CardBody = styled.div`
    padding: 20px;
`
export const BodyHeader = styled.h3`
    color:var(--color-dark);
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
`
export const BodyText = styled.p`
    color: var(--color-dark);
    font-size: 18px;
    line-height: 1.2;
`