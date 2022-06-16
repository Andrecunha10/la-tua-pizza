import styled from "styled-components"
import { IEstimate } from "../../entities/estimante"

type IProps = {
    currentEstimate: IEstimate
}

export function EstimateNumbers ({ currentEstimate }: IProps) {
    return (
        <StyledEstimateNumberDiv className="d-flex flex-row justify-content-around p-2">
            <p className="mb-0 text-center">
                <span className="d-block">Tempo</span>
                {`${currentEstimate.time} min`}
            </p>
            <p className="mb-0 text-center">
                <span className="d-block">Distância</span>
                {`${currentEstimate.distance.toLocaleString('pt-BR')} km`}
            </p>
            <p className="mb-0 text-center">
                <span className="d-block">Frete</span>
                {currentEstimate.value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
            </p>
        </StyledEstimateNumberDiv>
    )
}

const StyledEstimateNumberDiv = styled.div`
    background-color: #e9ecef;
    span {
        font-size: .75rem;
        font-weight: 900;
    }
`