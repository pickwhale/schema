const mongoose = require('mongoose');
const supplySchema = new mongoose.Schema({
    supply_id: String,
    // 关联 Vendor 模型
    vendor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
    // 关联 Product 模型
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    supply_date: Date,
    quantity: Number,
    unit_price: Number,
    total_amount: Number,
    delivery_status: String
}, {
    collection: 'supplies'
});
module.exports = mongoose.model('Supply', supplySchema);