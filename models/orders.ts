import config from "../config/config.json";
import Order from "../interfaces/order";

const orders = {
    getOrders: async function getOrders() {
        const response = await fetch(`${config.base_url}/orders?api_key=${config.api_key}`);
        const result = await response.json();

        return result.data;
    },
    pickOrder: async function pickOrder() {
        // TODO: Minska lagersaldo för de
        // orderrader som finns i ordern

    for (let item in order.order_items) {
        item = order.order_items[item];
        var product = {
            id: item.product_id,
            name : item.product_name,
            quantity: item.quantity,
            stock : item.stock - item.amount,
            api_key : config.api_key
        };
        }
        // TODO: Ändra status för ordern till packad

       
    }
};

export default orders;