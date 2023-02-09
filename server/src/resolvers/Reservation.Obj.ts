import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
export class ReservationObj {
  @Field()
  id: string;

  @Field()
  userName: string;

  @Field()
  phoneNumber: string;

  @Field()
  arriveTime: Date;

  @Field()
  tableSize: string;

  @Field()
  reservationStatus: string;
}


@InputType()
export class ReservationOperateInput implements Partial<ReservationObj> {

  @Field({nullable: true})
  reservationId: string;

  @Field({nullable: true})
  userName: string;

  @Field({nullable: true})
  phoneNumber: string;

  @Field({nullable: true})
  arriveTime: Date;

  @Field({nullable: true})
  tableSize: string;

  @Field({nullable: true})
  reservationStatus: string;
}