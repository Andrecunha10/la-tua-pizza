import styled from "styled-components"

type Props = {
    children: React.ReactNode
}

export function TitleH1 ({children}:Props){
    return(
        <Title className="mt-3">{children}</Title>
    )
}

const Title = styled.h2`
    font-weight: 900;
    color: var(--text-color);
    text-align: center;
    font-size: 2rem;
`

export function TitleH2 ({ children }: Props){
    return(
        <SubTitle>{children}</SubTitle>
    )
}

const SubTitle = styled.h2`
    font-weight: 900px;
    color: var(--main-color);
    font-size: 1.75rem;
    text-align: center;
`