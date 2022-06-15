import { IAddress } from "../entities/address"
import { IEstimate } from "../entities/estimante"
import { calculateDistance } from "./calculatedistance"

export type INewEstimante = {
    address: IAddress
    name: string
    phone: string
}

export const createEstimate = async ( input: INewEstimante ):Promise<IEstimate> => {
    const {distance, duration} = await calculateDistance(input.address)
    const minutes = Math.ceil(duration / 60)
    const value = calculateValue(distance, minutes)
    const kilometers = distance / 1000
    const estimateData = {
        time: minutes + 20,
        distance: parseFloat(kilometers.toFixed(2)),
        value,
        lat: input.address.lat,
        lng: input.address.lng
    }
    return estimateData
}

const calculateValue = (meters: number, minutes: number) => {
    let value = 0
    value += minutes * 0.25
    value += meters * 0.0005
    const min = 4
    if (value < min ) {
        return min
    }
    return parseFloat(value.toFixed(0))
}