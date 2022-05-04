interface Order {
    id: number,
    name: string,
    address: string,
    zip: string,
    city: string,
    country: string,
    status: string,
    status_id: number,
    order_items: OrderItem[]
}

export default Order;