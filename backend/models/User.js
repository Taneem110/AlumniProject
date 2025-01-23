const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Alumni', 'Student', 'Staff'], required: true },
    institution: { type: String, trim: true },
    status: { type: String, enum: ['pending', 'active'], default: 'pending' },
    timestamps: true });

module.exports = mongoose.model('User', userSchema);