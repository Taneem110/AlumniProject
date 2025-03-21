const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
    name: { type: String, required: [true, 'Name is required'], trim: true },
    email: { type: String, required: [true, 'Email is required'], unique: true, lowercase: true,match: [/.+\@.+\..+/, 'Please enter a valid email address'], trim: true },
    password: { type: String, required: [true, 'Password is required'], minlength: [6, 'Password must be at least 6 characters'], select: false },
    role: { type: String, enum: ['Alumni', 'Student', 'Staff', 'Admin'], required: [true, 'Role is required']},
    institution: { type: String, trim: true },
    status: { type: String, enum: ['pending', 'active'], default: 'pending' }
    },
    {
        timestamps: true, // Correct placement of the timestamps option
    }
 );

module.exports = mongoose.model('User', userSchema);