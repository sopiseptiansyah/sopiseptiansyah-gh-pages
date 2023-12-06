import styled, {keyframes} from 'styled-components'


export const ContentHome = styled.div`
    width: max-content;
    margin: auto;
    display: block;
    position: relative;
    z-index: 2;
    .text-animation {
        position: relative;
        color: transparent;
    }

    .text-animation.state-1::before {
        width: 1px;
    }

    .text-animation::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        background: #64CCC5;
        width: 0;
        height: 1.2em;
        -ms-transform: translate(-50%,-55%);
        transform: translate(-50%,-55%);
    }

    .text-animation.state-2::before {
        width: .9em;
    }

    .text-animation.state-3 {
        color: inherit;
    }
    .text-animation.state-3::before {
        display: none;
    }
`

export const Heading = styled.h1`
    font-size: 3.2em;
    font-weight: 600;
    line-height: 1.16em;
    margin-top: 0;
    margin-bottom: 10px;
    color: #64CCC5;
    mix-blend-mode: multiply;
    background-blend-mode: multiply;
`

export const Subline = styled.span`
    display: block;
    font-size: 1em;
`

export const LineHead = styled.div`
    width: 80%;
    height: 1px;
    display: block;
    position: absolute;
    background: rgba(100, 204, 197, 10%);
    transform: rotate(-32deg);
    z-index: 1;
`

const scroll = keyframes`
	0% {
		height: 40px;
	}
	30% {
		height: 60px;
	}
	60% {
		height: 40px;
	}
`



export const Arrow = styled.div`
    width: 0;
	height: 40px;
	border: 1px solid #64CCC5;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 22px;
    margin: auto;
	animation: ${scroll} 1.5s infinite;
	-webkit-animation: ${scroll} 1.5s infinite;
	&::after {
		content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: -5px;
    width: 1px;
    height: 10px;
		
		// triangle
    border-top: 10px solid #64CCC5;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
	}
`