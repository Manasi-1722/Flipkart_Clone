import Razorpay from "razorpay";



export default {
    async orderCreate(response, request, next) {
        try {
            const instance = new Razorpay({
                key_id: process.env.RAZORPAY_ID_KEY,
                key_secret: process.env.RAZORPAY_SECRET_KEY,
            });

            const { order_id, amount, payment_capture, currency } = request.body;

            console.log(request.body);

        } catch(error) {
            console.log(error);
        }
    },
    
}