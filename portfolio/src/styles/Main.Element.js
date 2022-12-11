import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
`

export const CardStack = styled.div`
    display: grid;
    position: relative;
    padding: 100px 0;
    background: var(--color-lshadow);
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    width: 100%;
    height: 100%;
    min-height: 100vh;
`