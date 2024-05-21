import mongoose, { Schema } from 'mongoose';
import TProduct, { TInventory, TVariant } from './product.interface';

const variantSchema = new Schema<TVariant>({
    type: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});

const inventorySchema = new Schema<TInventory>({
    quantity: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
});

const productSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"] 
    },
    category: {
        type: String,
        required: [true, "Category is required"]
    },
    tags: {
        type: [String],
        required: true
    },
    variants: {
        type: [variantSchema],
        required: true
    },
    inventory: {
        type: inventorySchema,
        required: true
    }
});

export const Product = mongoose.model('Product', productSchema);
