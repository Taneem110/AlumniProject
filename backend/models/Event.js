const EventSchema = new mongoose.Schema({
    event_id: { type: Number, unique: true, required: true, autoIncrement: true },
    event_name: { type: String, required: true, maxlength: 255 },
    event_date: { type: Date, required: true },
    location: { type: String, maxlength: 255 },
    description: { type: String },
    event_type: { type: String, enum: ['In-person', 'Virtual', 'Hybrid'], required: true },
    organizer_id: { type: mongoose.Schema.Types.Number, ref: 'StaffProfile', required: true },
    created_at: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model('Event', EventSchema);