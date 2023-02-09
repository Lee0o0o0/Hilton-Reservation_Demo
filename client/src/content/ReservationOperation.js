import React from 'react'
import AddReservation from './AddReservation';
import UpdateReservation from "./UpdateReservation";

function ReservationOperation(props) {
    return (
        <div style={{flex:'1'}} >
            <AddReservation></AddReservation>
            <UpdateReservation></UpdateReservation>
        </div>
    )
}


export default ReservationOperation