import { LoadGoogleScript } from "../../components/loadgooglescript";
import { GoogleMap, MarkerF } from "@react-google-maps/api"
import { useSelector } from "react-redux";
import { selectCurrentEstimanete } from "../../store/slices/estimateslice";
import { MyAddress } from "../../service/calculatedistance";
import pinB from "../../assts/img/point_b.svg"
import  pinPizza from "../../assts/img/pin_pizza.svg"

export function EstimateMap () {
    const currentEstimate = useSelector(selectCurrentEstimanete)
    const handleLoadMap = (map: google.maps.Map) => {
        if (!currentEstimate) {
            return
        }
       const bounds = new google.maps.LatLngBounds()
       bounds.extend({
            lat: MyAddress.lat,
            lng: MyAddress.lng
       })
       bounds.extend({
            lat: currentEstimate.lat,
            lng: currentEstimate.lng
       })
       map.setCenter(bounds.getCenter())
       map.fitBounds(bounds)
    }
    if (!currentEstimate) {
        return null
    }
   return (
       <LoadGoogleScript>
           <GoogleMap 
            mapContainerStyle={{
                minHeight: 150
            }}
            center={{lat: 0, lng: 0}}
            zoom={16}
            onLoad={handleLoadMap}
           >
               <MarkerF 
                    position={{
                        lat: MyAddress.lat,
                        lng: MyAddress.lng
                    }}
                    icon={pinPizza}
               />
               <MarkerF 
                    position={{
                        lat: currentEstimate.lat,
                        lng: currentEstimate.lng
                    }}
                    icon={pinB}
               />
           </GoogleMap>
       </LoadGoogleScript>
   ) 
}