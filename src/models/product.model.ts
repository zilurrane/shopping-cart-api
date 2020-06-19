import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
    code: {
        type: String,
        required: 'Product code is required',
    },
    name: {
        type: String,
        required: 'Product name is required',
    },
    price: {
        type: Number,
        required: 'Product price is required'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

export const ProductModel: any = mongoose.model('Product', ProductSchema);
