const EventAttendanceSchema = new mongoose.Schema({
    attendance_id: { type: Number, unique: true, required: true, autoIncrement: true },
    event_id: { type: mongoose.Schema.Types.Number, ref: 'Event', required: true },
    checked_in: { type: Boolean, default: false },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    rsvpStatus: { type: String, enum: ['Attending', 'Not Attending'], required: true }}, 
    { timestamps: true });
 

  module.exports = mongoose.model('EventAttendance', EventAttendanceSchema);