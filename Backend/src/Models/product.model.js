const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    url: String,
    product_id: String,
    title: String,
    product_description: String,
    rating: Number,
    ratings_count: Number,
    initial_price: String,
    discount: String,
    final_price: String,
    currency: String,
    images: [String],
    delivery_options: [String],
    product_details: {
        description: String,
        material_and_care: String,
        size_and_fit: String
    },
    breadcrumbs: [
        {
            name: String,
            url: String
        }
    ],
    product_specifications: [
        {
            specification_name: String,
            specification_value: String
        }
    ],
    amount_of_stars: {
        one_star: Number,
        two_stars: Number,
        three_stars: Number,
        four_stars: Number,
        five_stars: Number
    },
    what_customers_said: mongoose.Schema.Types.Mixed,
    seller_name: String,
    sizes: [
        {
            size: String,
            value: String,
            value_name: String
        }
    ],
    videos: mongoose.Schema.Types.Mixed,
    seller_information: String,
    variations: [mongoose.Schema.Types.Mixed],
    best_offer: {
        applicable_on: String,
        best_price: String,
        coupon_code: String,
        coupon_discount: String
    },
    more_offers: [
        {
            offer_name: String,
            offer_value: String
        }
    ]
});

const productModel = mongoose.model('product', ProductSchema);

module.exports = {productModel};