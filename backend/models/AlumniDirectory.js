const AlumniDirectorySchema = new mongoose.Schema({
    directory_id: { type: Number, unique: true, required: true, autoIncrement: true },
    alumni_id: { type: mongoose.Schema.Types.Number, ref: 'AlumniProfile', required: true },
    contact_number: { type: String, maxlength: 20 },
    address: { type: String, maxlength: 255 },
    education_history: { type: String },
  });
  
  module.exports = mongoose.model('AlumniDirectory', AlumniDirectorySchema);