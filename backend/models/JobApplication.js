const jobApplicationSchema = new Schema({
    job_id: { type: Schema.Types.ObjectId, ref: 'JobPosting', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    resume: { type: String, trim: true },
    coverLetter: { type: String, trim: true },
    status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('JobApplication', jobApplicationSchema);