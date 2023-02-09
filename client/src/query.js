import {gql} from 'apollo-boost'
export const GET_ALL_RESERVATIONS=gql`
    query{
        getAllReservations{
            id
            userName
            phoneNumber
            arriveTime
            tableSize
            reservationStatus
  }
}`
export const ADD_RESERVATION = gql`
    mutation($userName:String!,$phoneNumber: String!,$arriveTime:DateTime!,$tableSize: String!){
    addReservation(
        args: { 
          userName: $userName, 
          phoneNumber: $phoneNumber, 
          arriveTime: $arriveTime, 
          tableSize: $tableSize}
    ) {
        id
        userName
        phoneNumber
        arriveTime
        tableSize
        reservationStatus
    }
}`;

export const UPDATE_RESERVATION = gql`
    mutation($reservationId:String!, $userName:String!,$phoneNumber: String!,$arriveTime:DateTime!,$tableSize: String!,$reservationStatus: String!){
    updateReservation(
        args: { 
          reservationId: $reservationId,
          userName: $userName, 
          phoneNumber: $phoneNumber, 
          arriveTime: $arriveTime, 
          tableSize: $tableSize,
          reservationStatus: $reservationStatus}
    ) {
        id
        userName
        phoneNumber
        arriveTime
        tableSize
        reservationStatus
    }
}`;