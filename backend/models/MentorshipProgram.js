const MentorshipProgramSchema = new mongoose.Schema({
    mentorship_id: { type: Number, unique: true, required: true, autoIncrement: true },
    mentorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    menteeId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    program_start_date: { type: Date, required: true },
    program_end_date: { type: Date },
    status: { type: String, enum: ['Active', 'Completed', 'Cancelled'], default: 'Active' },
    sessions: { type: [{ 
        sessionDate: { type: Date }, 
        notes: { type: String, trim: true } 
        }] }}, 
    { timestamps: true });

  
  module.exports = mongoose.model('MentorshipProgram', MentorshipProgramSchema);