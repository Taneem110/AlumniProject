const StaffProfileSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    first_name: { type: String, required: true, maxlength: 100 },
    last_name: { type: String, required: true, maxlength: 100 },
    email: { type: String, unique: true, required: true, maxlength: 255 },
    phone_number: { type: String, maxlength: 20 },
    job_title: { type: String, required: true, maxlength: 100 },
    department: { type: String, required: true, maxlength: 100 },
    hire_date: { type: Date, required: true },
<<<<<<< HEAD
=======
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
>>>>>>> b4cfbf80b20274a41b966d809bdba148df8fb61a
    profile_picture: { type: String },
    created_at: { type: Date, default: Date.now },
    timestamps: true });
 
  
  module.exports = mongoose.model('StaffProfile', StaffProfileSchema);