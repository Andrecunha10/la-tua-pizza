import React, { useRef, useState } from "react";
import { Container } from "../../components/Container";
import MapView from 'react-native-maps';
import { StyleSheet, View } from "react-native";
import MapViewDirections from 'react-native-maps-directions';
import { GoogleAPIKey, LaTuaPizzaAddres } from "../../services/configure";
import { useSelector } from "react-redux";
import { selectCurrentEstimanete } from "../../store/slices/estimateslice";

export function teste() {
    // const estimate = useSelector(selectCurrentEstimanete)
    // const mapEl=useRef()

    // if(!estimate){
    //     return
    // }
    // const [distance,setDistance]=useState()
    // console.log('estimate',estimate)
    // const origin = {latitude: LaTuaPizzaAddres.lat, longitude: LaTuaPizzaAddres.lng};
    // const destination = {latitude: estimate.address.lat, longitude: estimate.address.lat};
    // return (
    //         <Container>
    //                 <MapView 
    //                     style={style.mapWrap}
    //                         initialRegion={{
    //                             latitude: LaTuaPizzaAddres.lat,
    //                             longitude: LaTuaPizzaAddres.lng,
    //                             latitudeDelta: 0.0922,
    //                             longitudeDelta: 0.0421,
    //                         }}
    //                         loadingEnabled
    //                 >
    //                     {destination && 
    //                         <MapViewDirections
    //                         origin={origin}
    //                         destination={destination}
    //                         apikey={GoogleAPIKey}
    //                         strokeWidth={3}
    //                         onReady={result=>{
    //                             // setDistance(result.distance);
    //                             //     mapEl.current.fitToCoordinates(
    //                             //         result.coordinates,{
    //                             //             edgePadding:{
    //                             //                 top:50,
    //                             //                 bottom:50,
    //                             //                 left:50,
    //                             //                 right:50
    //                             //             }
    //                             //         }
    //                             //     );
    //                             console.log('result', result)
    //                             }
    //                         }
    //                     />
    //                     }
    //                 </MapView>
    //         </Container>
    // )
}

const style = StyleSheet.create({
    mapWrap: {
        width: '100%',
        height: 400
    }
})