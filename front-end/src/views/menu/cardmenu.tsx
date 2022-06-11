import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { CustomButton } from "../../components/button"
import { TitleH1 } from "../../components/titles"
import { IProduct } from "../../entities/product"
import { addToCart } from "../../store/slices/cardslices"
import { selectIsUserLoggedIn } from "../../store/slices/userslices"

type ICardProdutcs ={
    products: IProduct[]
}

export function CardMenu({products}:ICardProdutcs) {
    const userIsLoggedIn = useSelector(selectIsUserLoggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleAddToCart = (product:IProduct) => {
        dispatch(addToCart(product))
        navigate('/carrinho')
    }

    return (
        <>
            <TitleH1 className="text-start my-3">Pizzas</TitleH1>
            <GridDiv>
                {products.map((item) => (
                    <CardProduct className="d-flex flex-column align-items-center" key={item.name}>
                        <img src={item.image} alt={item.name} width={220} height={220} />
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        <div className="d-flex flex-row justify-content-between align-items-center w-100 mt-auto">
                            <Price className="mb-0">{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Price>
                            {userIsLoggedIn && 
                                <CustomButton 
                                    padding="sm" 
                                    variant="danger" 
                                    onClick={() => handleAddToCart(item)}
                                >Comprar</CustomButton>
                            }
                        </div>
                    </CardProduct>
                ))}
            </GridDiv>
        </>
    )
}

const GridDiv = styled.div`
    display: grid;
    justify-content: center;
    gap: 25px;
    grid-template-columns: 1fr;
    @media(min-width: 576px){
        grid-template-columns: 1fr 1fr;
    }
    @media(min-width: 992px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media(min-width: 1200px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`

const CardProduct = styled.div`
    border: 1px solid #E0E0E0;
    border-radius: 50px;
    padding: 50px 30px;
    max-width: 320px;
    display: grid;
    justify-content: space-between;
    margin: 0 auto;
    &:hover{
        box-shadow: 0px 4px 30px rgba(71, 85, 114, 0.30);;
        border-color: #fff;
    }
    > p{
        font-size: .625rem;
    }
    img{
        object-fit: contain;
        border-radius: 30px;
    }
`
const Price = styled.p`
    font-size: 1.25rem;
    font-weight: 500;
`