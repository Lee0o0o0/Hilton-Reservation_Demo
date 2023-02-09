import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import {GET_ALL_RESERVATIONS} from './query';
import ReservationOperation from './content/ReservationOperation'
import ReservationsDisplay from './content/DisplayReservations'

export default function(){
    const {data}=useQuery(GET_ALL_RESERVATIONS);
    return (<div style={{display:"flex"}}>
    <ReservationOperation ></ReservationOperation>
    <ReservationsDisplay getProducts = {data}> </ReservationsDisplay>
    </div>)
}