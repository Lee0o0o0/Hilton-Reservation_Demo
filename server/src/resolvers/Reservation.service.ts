import AirportModel from "./reservations.model";
import {Injectable} from "@nestjs/common";

@Injectable()
export class ReservationService {
    async addReservation(userName: string, phoneNumber: string, arriveTime: Date, tableSize: string, reservationStatus: string) {
        const user = new AirportModel({
            userName: userName,
            phoneNumber: phoneNumber,
            arriveTime: arriveTime,
            tableSize: tableSize,
            reservationStatus: reservationStatus
        })
        user.save();
    }
}