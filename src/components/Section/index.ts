import styled, {css} from 'styled-components'

const Section = styled.div<{$flex?: boolean; background?: string}>`
    position: relative;
    width: 100%;
    height: auto;
    padding: 50px 0;
    ${({background}) => background && css`
        background-color: ${background}
    `}

    ${({$flex}) => $flex && css`
        display: flex;
        align-items: center;
        justify-content: center;
    `}
`;

export default Section;