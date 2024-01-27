
import Product from "./model/productSchema.js";
import { products } from "./constants/data.js";


const DefaultData = async () => {
    try {
        // for (const product of products) {
        //     await Product.updateOne(
        //         { id: product.id }, // Query for existing document
        //         { $set: product }, // Update with the current product data
        //         { upsert: true } // Insert if not found
        //     );
        // }

        // await Product.insertMany(products);
        console.log('Data imported successfully');
    } catch (error) {
        console.log('Error while inserting default data', error.message);
    }
}

export default DefaultData;