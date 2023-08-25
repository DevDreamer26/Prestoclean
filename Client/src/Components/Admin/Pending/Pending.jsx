import React from 'react'



const orders = [{
    id: "kjbbiugvivgyj",
    Name: 'jerrrrrrrrrr',
    orderitems: 'shirt',
    orderrecieved: 'recieved'
},
{
id: "hjvjyvhuyj",
Name: 'vgghjvhgb',
orderitems: 'shirt',
orderrecieved: 'recieved'
},
{
    id: "hjvjyvhuyj",
    Name: 'vgghjvhgb',
    orderitems: 'shirt',
    orderrecieved: 'recieved'
    },
    {
        id: "hjvjyvhuyj",
        Name: 'vgghjvhgb',
        orderitems: 'shirt',
        orderrecieved: 'recieved'
        },
        {
            id: "hjvjyvhuyj",
            Name: 'vgghjvhgb',
            orderitems: 'shirt',
            orderrecieved: 'recieved'
            },
            {
                id: "hjvjyvhuyj",
                Name: 'vgghjvhgb',
                orderitems: 'shirt',
                orderrecieved: 'recieved'
                },
                {
                    id: "hjvjyvhuyj",
                    Name: 'vgghjvhgb',
                    orderitems: 'shirt',
                    orderrecieved: 'recieved'
                    },
                    {
                        id: "hjvjyvhuyj",
                        Name: 'vgghjvhgb',
                        orderitems: 'shirt',
                        orderrecieved: 'recieved'
                        },
                        {
                            id: "hjvjyvhuyj",
                            Name: 'vgghjvhgb',
                            orderitems: 'shirt',
                            orderrecieved: 'recieved'
                            },
]

export default function Pending() {
  return (
    <div>
        <div className='pendingcontainer'>
        <div className="card-body">
                                {selectedOrder ? (
                                    <div>
                                        <p>Name: {selectedOrder.Name}</p>
                                        <p>Order Items: {selectedOrder.orderitems}</p>
                                        <p>Order Status: {selectedOrder.orderrecieved}</p>
                                    </div>
                                ) : (
                                    <p>Select an order to see details.</p>
                                )}
                            </div>
        </div>
        </div>
  )
}
