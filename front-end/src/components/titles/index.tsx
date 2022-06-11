import styled from "styled-components"

type Props = {
    children: React.ReactNode
    className?: string
}

export function TitleH1 ({children, ...props}:Props){
    return(
        <Title className="mt-3" {...props}>{children}</Title>
    )
}

const Title = styled.h2`
    font-weight: 900;
    color: var(--text-color);
    font-size: 2rem;
`

export function TitleH2 ({ children, ...props }: Props){
    return(
        <SubTitle {...props}>{children}</SubTitle>
    )
}

const SubTitle = styled.h2`
    font-weight: 900px;
    color: var(--main-color);
    font-size: 1.75rem;
    text-align: center;
`