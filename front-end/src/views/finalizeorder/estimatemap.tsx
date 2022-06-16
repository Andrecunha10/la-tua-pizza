import { LoadGoogleScript } from "../../components/loadgooglescript";
import { GoogleMap, MarkerF } from "@react-google-maps/api"
import { MyAddress } from "../../service/calculatedistance";
import pinB from "../../assts/img/point_b.svg"
import pinPizza from "../../assts/img/pin_pizza.svg"
import styled from "styled-components";
import { IEstimate } from "../../entities/estimante";

type IProps = {
    currentEstimate: IEstimate
}

export function EstimateMap( { currentEstimate }: IProps) {
    const handleLoadMap = (map: google.maps.Map) => {
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
    return (
        <LoadGoogleScript>
            <DivGoogleMap className="mt-3 mt-md-0">
                <GoogleMap
                    mapContainerStyle={{
                        minHeight: 250
                    }}
                    center={{ lat: 0, lng: 0 }}
                    zoom={16}
                    onLoad={handleLoadMap}
                    options={{
                        disableDefaultUI: true
                    }}
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
            </DivGoogleMap>
        </LoadGoogleScript>
    )
}

const DivGoogleMap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    & > div {
        flex: 1;
    }
    a[href^="http://maps.google.com/maps"]{display:none !important}
    a[href^="https://maps.google.com/maps"]{display:none !important}
    .gmnoprint a, .gmnoprint span, .gm-style-cc {
        display:none;
    }
    .gmnoprint div {
        background:none !important;
    }
`