const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    order_id: { type: String, required: true },
    // 关联 Product 和 Vendor 模型
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    vendor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
    order_date: Date,
    quantity: Number,
    unit_price: Number,
    total_amount: Number,
    customer: String
}, {
    collection: 'orders'
});
module.exports = mongoose.model('Order', orderSchema);