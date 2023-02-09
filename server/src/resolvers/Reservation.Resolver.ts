import {Arg, Mutation, Query, Resolver} from "type-graphql";
import ReservationModel from "./reservations.model";
import {ReservationObj, ReservationOperateInput} from "./Reservation.Obj";
import {plainToClass} from "class-transformer";

@Resolver(of => ReservationObj)
export class ReservationResolver {
  constructor() {}

  @Query(() => [ReservationObj], { nullable: true })
  async getReservationsByTimeAndStatus(
      @Arg('args') {arriveTime, reservationStatus }: ReservationOperateInput
  ): Promise<ReservationObj[]> {
    const filter = { arriveTime:  { $eq: `${arriveTime}` } , reservationStatus:  { $eq: `${reservationStatus}` }};
    const reservations = await ReservationModel.find(filter);
    const { rows: items } = reservations;
    return items.map((re) => plainToClass(ReservationModel, re));
  }

  @Query(() => [ReservationObj], { nullable: true })
  async getAllReservations(): Promise<ReservationObj[]> {
    const filter = { userName:  {  $isNotNull: true  }};
    const reservations = await ReservationModel.find(filter);
    const { rows: items } = reservations;
    return items.map((re) => plainToClass(ReservationModel, re));
  }

  @Mutation(() => ReservationObj)
  async addReservation(
      @Arg('args') {userName, phoneNumber, arriveTime, tableSize }: ReservationOperateInput
  ): Promise<ReservationObj> {
    try{
      await ReservationModel.findOne({userName: { $eq: `${userName}`, $ignoreCase: true}, phoneNumber: { $eq: `${phoneNumber}`}});
    } catch (e){
      console.log(e)
      if ('DocumentNotFoundError: document not found' == e.toString()){
        console.log('insert new data')
        const user = new ReservationModel({
          userName: userName,
          phoneNumber: phoneNumber,
          arriveTime: arriveTime,
          tableSize: tableSize,
          reservationStatus: 'Booked'
        })
        user.save()
        return user;
      }
    }
    throw new Error('用户已预约')
  }

  @Mutation(() => ReservationObj)
  async updateReservation(
      @Arg('args') {reservationId, userName, phoneNumber, arriveTime, tableSize, reservationStatus }: ReservationOperateInput
  ): Promise<ReservationObj> {
    const user = new ReservationModel({
      userName: userName,
      phoneNumber: phoneNumber,
      arriveTime: arriveTime,
      tableSize: tableSize,
      reservationStatus: reservationStatus
    })
    try{
      return await ReservationModel.updateById('reservation::' + reservationId, user)
    } catch (e){
      console.log(e)
      throw new Error('未找到相关订单')
    }
  }
}