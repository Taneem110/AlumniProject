const StudentProfileSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    first_name: { type: String, required: true, maxlength: 100 },
    last_name: { type: String, required: true, maxlength: 100 },
    email: { type: String, unique: true, required: true, maxlength: 255 },
    phone_number: { type: String, maxlength: 20 },
    degree_program: { type: String, required: true, maxlength: 100 },
    year_of_enrollment: { type: Number, required: true },
    graduation_year: { type: Number },
    current_status: { type: String, enum: ['Active', 'Graduated', 'On Leave', 'Dropped Out'], default: 'Active' },
    profile_picture: { type: String },
    contact_address: { type: String, maxlength: 255 },
<<<<<<< HEAD
=======
    academic_status: { type: String, enum: ['Good Standing', 'Probation', 'Suspended'], default: 'Good Standing' },
>>>>>>> b4cfbf80b20274a41b966d809bdba148df8fb61a
    created_at: { type: Date, default: Date.now },
    timestamps: true
  });
  
  module.exports = mongoose.model('StudentProfile', StudentProfileSchema);