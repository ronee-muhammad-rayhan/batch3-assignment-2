import { ParsedQs } from 'qs';

export type TVariant = {
    type: string;
    value: string;
}

export type TInventory = {
    quantity: number;
    inStock: boolean;
}

export type TProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: [TVariant];
    inventory: TInventory;
}

export type TQuery = string | ParsedQs | string[] | ParsedQs[] | undefined;

export default TProduct;