import { model, Schema } from 'ottoman';

const ReservationSchema = new Schema({
  id: { type: String, default: '' },
  userName: { type: String, default: '' },
  phoneNumber: { type: String, default: '' },
  arriveTime: { type: Date, default: Date.now },
  tableSize: { type: String },
  reservationStatus: { type: String }
});

ReservationSchema.index.findByName = { by: 'userName', type: 'n1ql' };

const ReservationModel = model('reservation', ReservationSchema);

export default ReservationModel;
