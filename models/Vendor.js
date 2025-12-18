const mongoose = require('mongoose');
const vendorSchema = new mongoose.Schema({
    vendor_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    phone: String,
    address: { type: mongoose.Schema.Types.Mixed }, // 截图显示address是一个Object，使用Mixed类型
    contact_person: String
}, {
    collection: 'vendors'
});
module.exports = mongoose.model('Vendor', vendorSchema);