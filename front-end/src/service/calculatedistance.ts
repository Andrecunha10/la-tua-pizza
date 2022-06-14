import { IAddress } from "../entities/address"


export const calculateDistance = async (userAddress: IAddress) => {
    const directionsService = new google.maps.DirectionsService()
    const { routes } = await directionsService.route({
        origin: new google.maps.LatLng(userAddress.lat, userAddress.lng),
        destination: 'Av. Nove de Julho - Poá',
        travelMode: google.maps.TravelMode.DRIVING
    })
    if(!routes[0]?.legs[0]?.distance || !routes[0]?.legs[0]?.duration){
        throw new Error('Falha ao calcular estimativa. Tente novamente.')
    }
    return {
        distance: routes[0].legs[0].distance.value,
        duration: routes[0].legs[0].duration.value
    }
}