import { LoadGoogleScript } from "../loadgooglescript";
import { Autocomplete } from "@react-google-maps/api"
import { FormField, IFormFieldProps } from "../formfield";
import { useRef } from "react";
import { IAddress } from "../../entities/address"

type Props = {
    value: null | IAddress
    onChange: (address: null | IAddress) => void
} & Omit<IFormFieldProps, 'value' | 'onChange'>

export function AutoCompleteField ({value, onChange, ...fieldProps }: Props) {
    const autocompleteRef = useRef<null | google.maps.places.Autocomplete>()

    const handleLoad = (autocomlete: google.maps.places.Autocomplete) => {
       autocompleteRef.current = autocomlete
       autocomlete.setBounds(new google.maps.LatLngBounds(
            new google.maps.LatLng(-23.555731369056225, -46.37126809311391),
            new google.maps.LatLng(-23.506318963466395, -46.327934391704105)
        ))
    }

    const handleChange = () => {
        const place = autocompleteRef.current?.getPlace()
        if (place && place.formatted_address && place.geometry?.location) {
            const address: IAddress = {
                address: place.formatted_address,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            }
            onChange(address)
        }
    }
    
    return(
        <LoadGoogleScript>
            <Autocomplete
                onLoad={handleLoad}
                onPlaceChanged={handleChange}
            >
                <FormField 
                    {...fieldProps}
                    onChange={() => onChange(null)}
                 />
            </Autocomplete>
        </LoadGoogleScript>
    )
}