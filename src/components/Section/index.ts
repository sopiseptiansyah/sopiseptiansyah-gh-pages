import styled, {css} from 'styled-components'

const Section = styled.div<{$flex?: boolean; background?: string}>`
    position: relative;
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 50px 0;
    overflow-x: hidden;
    ${({background}) => background && css`
        background-color: ${background}
    `}

    ${({$flex}) => $flex && css`
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    `}
`;

export default Section;