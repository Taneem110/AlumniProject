const mongoose = require("mongoose");

const AlumniProfileSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    firstName: { type: String, required: true, maxlength: 100 },
    lastName: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true, unique: true, maxlength: 255 },
    phoneNumber: { type: String, maxlength: 10 },
    graduationYear: { type: Number, min: 1900, max: new Date().getFullYear() },
    degreeProgram: { type: String, maxlength: 100 },
    profilePicture: { type: String, maxlength: 255 },
    currentJobTitle: { type: String, maxlength: 150 },
    currentCompany: { type: String, maxlength: 255 },
    location: { type: String, maxlength: 255 },
    skills: { type: [String] },
    linkedinProfile: { type: String, maxlength: 255 },
    status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
    lastUpdated: { type: Date, default: Date.now },
    privacySettings: { type: String, enum: ['Public', 'Private'], default: 'Public' }}, 
    { timestamps: true });


module.exports = mongoose.model('AlumniProfile', AlumniProfileSchema);