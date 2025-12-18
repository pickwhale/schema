const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    product_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    type: String,
    category: String,
    cost: Number,
    stock_quantity: Number,
    min_price: Number,
    description: String
    // MongoDB自动添加 _id 和 __v 字段
}, {
    collection: 'products' // 显式指定集合名，防止Mongoose自动复数化命名
});
module.exports = mongoose.model('Product', productSchema);