const fundraisingCampaignSchema = new Schema({
    title: { type: String, required: true, trim: true },
    goalAmount: { type: Number, required: true, min: 1 },
    description: { type: String, trim: true },
    targetAudience: { type: String, trim: true },
    images: { type: [String] },
    duration: { type: Number, min: 1 }, // Duration in days
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('FundraisingCampaign', fundraisingCampaignSchema);