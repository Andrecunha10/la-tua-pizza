import { IAddress } from "../entities/address"

export const MyAddress = {
    lat: -23.517943492954103,
    lng: -46.341742228835365
}

export const calculateDistance = async (userAddress: IAddress) => {
    const directionsService = new google.maps.DirectionsService()
    const { routes } = await directionsService.route({
        origin: new google.maps.LatLng(userAddress.lat, userAddress.lng),
        destination: new google.maps.LatLng(MyAddress.lat, MyAddress.lng),
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