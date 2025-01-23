const JobPostingSchema = new mongoose.Schema({
    job_id: { type: Number, unique: true, required: true, autoIncrement: true },
    job_title: { type: String, required: true, maxlength: 150 },
    company_name: { type: String, required: true, maxlength: 255 },
    location: { type: String, maxlength: 255 },
    job_type: { type: String, enum: ['Full-time', 'Part-time', 'Internship', 'Freelance'], required: true },
    posted_on: { type: Date, default: Date.now },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String },
  });
  
  module.exports = mongoose.model('JobPosting', JobPostingSchema);