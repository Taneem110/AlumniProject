const DonationSchema = new mongoose.Schema({
    donation_id: { type: Number, unique: true, required: true, autoIncrement: true },
    campaignId: { type: Schema.Types.ObjectId, ref: 'FundraisingCampaign', required: true },
    donation_date: { type: Date, default: Date.now },
    donation_type: { type: String, enum: ['One-time', 'Recurring'], required: true },
    fund: { type: String, maxlength: 255 },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true, min: 1 },
    paymentMethod: { type: String, trim: true }}, 
    { timestamps: true });

  module.exports = mongoose.model('Donation', DonationSchema);
  