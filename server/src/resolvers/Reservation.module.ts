import { Module } from '@nestjs/common';
import {ReservationResolver} from "./Reservation.Resolver";
import {ReservationService} from "./Reservation.service";
@Module({
    providers: [ReservationService, ReservationResolver],
    exports:[ReservationService],
    imports:[]
})
export class reservationModule {}

