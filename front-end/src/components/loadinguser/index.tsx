import { useSelector } from "react-redux"
import { selecIsLoadingUser} from "../../store/slices/userslices"
import { Loading } from "../loading"

type Props = {
    children: JSX.Element
}

export function LoadingUser ({children} : Props){
    const isLoadingUser = useSelector(selecIsLoadingUser)
    if (isLoadingUser) {
        return <Loading />        
    }
     return children
}