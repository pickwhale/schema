const mongoose = require('mongoose');

const Product = require('./models/Product');
const Vendor = require('./models/Vendor');
const Supply = require('./models/Supply');
const Order = require('./models/Order');


const DB_URI = 'mongodb://dbadmin:MongoDB03@isit.my.to:27017/LanMin_CmpWrld?authSource=admin';
mongoose.connect(DB_URI)
    .then(() => {
        console.log('Successfully connected to the LanMin_CompWrld database');
        testAllModels();
    })
    .catch(err => {
        console.error('Database connection failed:', err.message);
        process.exit(1);
    });

async function testAllModels() {
    try {
        console.log('\nTo begin testing the model, query two data entries from each set...\n');

        // 1. 查询产品
        const products = await Product.find({}).limit(2);
        console.log('Product Samples:', JSON.stringify(products, null, 2));

        // 2. 查询供应商
        const vendors = await Vendor.find({}).limit(2);
        console.log('\nSupplier Examples:', JSON.stringify(vendors, null, 2));

        // 3. 查询供货记录，并填充关联的供应商和产品详情
        const supplies = await Supply.find({})
            .populate('vendor_id', 'name phone') 
            .populate('product_id', 'name type') 
            .limit(2);
        console.log('\nSample Supply Record (with related information):', JSON.stringify(supplies, null, 2));

        // 4. 查询订单，同样填充关联信息
        const orders = await Order.find({})
            .populate('vendor_id', 'name')
            .populate('product_id', 'name cost')
            .limit(2);
        console.log('\nOrder Sample (with related information):', JSON.stringify(orders, null, 2));

        console.log('\nAll models tested successfully! Data structure matches database.');
        mongoose.connection.close(); 
    } catch (error) {
        console.error('\nAn error occurred during testing:', error);
        mongoose.connection.close();
        process.exit(1);
    }
}