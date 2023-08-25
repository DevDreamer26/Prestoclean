import React from 'react';
import Adminnavbar from '../Adminnavbar/Adminnavbar';
import './Admindashboard.css';
import {
    PieChart,
    Pie,
    Legend as PieLegend
} from "recharts"
import { Tooltip } from 'chart.js'

export default function Admindashboard() {
    const data2 = [
        { id: '1', name: "Pending Orders", users: 20000, fill: "red" },
        { id: '2', name: "Pickup Orders", users: 15000, fill: "orange" },
        { id: '3', name: "Received", users: 10000, fill: "green" },
        { id: '4', name: "Delivered", users: 14000, fill: "blue" },
        { id: '5', name: "Total Orders", users: 30000, fill: "violet" },
    ]
    const jsonData = [
        { id: '1', name: "John", pickupdate: "26-07-2023", orderedat: "26-07-2023" },
        { id: '2', name: "smith", pickupdate: "26-07-2023", orderedat: "26-07-2023" },
        { id: '3', name: "hola", pickupdate: "26-07-2023", orderedat: "26-07-2023" }
    ];
    const usersForId1 = data2.filter(det => det.id === '1').map(det => det.users);
    const usersForId2 = data2.filter(det => det.id === '2').map(det => det.users);
    const usersForId3 = data2.filter(det => det.id === '3').map(det => det.users);
    const usersForId4 = data2.filter(det => det.id === '4').map(det => det.users);
    const usersForId5 = data2.filter(det => det.id === '5').map(det => det.users);
    return (
        <div>
            <Adminnavbar />
            <div className='admincontainer'>
                <div className='card-align'>
                    <div className='ordercard'>
                        <div className='header'>
                            Pending Orders
                        </div>
                        {usersForId1.map((users, index) => (
                            <p key={index}>{users}</p>
                        ))}
                    </div>
                    <div className='ordercard'>
                        <div className='header'>
                            Pickup Orders
                        </div>
                        {usersForId2.map((users, index) => (
                            <p key={index}>{users}</p>
                        ))}
                    </div>

                    {/* Remove the duplicated section here */}

                    <div className='ordercard'>
                        <div className='header'>
                            Received
                        </div>
                        {usersForId3.map((users, index) => (
                            <p key={index}>{users}</p>
                        ))}
                    </div>
                    <div className='ordercard'>
                        <div className='header'>
                            Delivered
                        </div>
                        {usersForId4.map((users, index) => (
                            <p key={index}>{users}</p>
                        ))}
                    </div>
                    <div className='ordercard'>
                        <div className='header'>
                            Total Orders
                        </div>
                        {usersForId5.map((users, index) => (
                            <p key={index}>{users}</p>
                        ))}
                    </div>
                </div>

                {/* The following section should remain outside of the jsonData.map() loop */}
                <div className="pending">
                    <div className="header">
                        Pending Orders
                    </div>
                    <div className="scrollable-table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="table-cell-head">Name</th>
                                    <th className="table-cell-head">Pickup Date</th>
                                    <th className="table-cell-head">Ordered Date</th>
                                    <th className="table-cell-head">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jsonData.map(order => (
                                    <tr key={order.id}>
                                        <td className="table-cell-body">{order.name}</td>
                                        <td className="table-cell-body">{order.pickupdate}</td>
                                        <td className="table-cell-body">{order.orderedat}</td>
                                        <td className="table-cell-body"><button style={{ paddingTop: "5px", paddingBottom: "5px", border: "none" }}>Details</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="pending">

                    <PieChart width={600} height={400}>
                        <Pie
                            dataKey="users"
                            isAnimationActive={true}
                            data={data2}
                            cx={200}
                            cy={200}
                            outerRadius={120}
                            fill="#8884d8" // Default fill color for the pie chart
                            label
                            legend
                        />
                        <PieLegend align='right' verticalAlign='middle' layout='vertical' />
                        <Tooltip />
                    </PieChart>
                </div>
                <div className="pending">
                    <div className="header">
                        Pickup Details
                    </div>
                    <div className="scrollable-table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="table-cell-head">Name</th>
                                    <th className="table-cell-head">Pickup Date</th>
                                    <th className="table-cell-head">Ordered Date</th>
                                    <th className="table-cell-head">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jsonData.map(order => (
                                    <tr key={order.id}>
                                        <td className="table-cell-body">{order.name}</td>
                                        <td className="table-cell-body">{order.pickupdate}</td>
                                        <td className="table-cell-body">{order.orderedat}</td>
                                        <td className="table-cell-body"><button style={{ paddingTop: "5px", paddingBottom: "5px", border: "none" }}>Details</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="pending">
                    <div className="header">
                        Order Received
                    </div>
                    <div className="scrollable-table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="table-cell-head">Name</th>
                                    <th className="table-cell-head">Pickup Date</th>
                                    <th className="table-cell-head">Ordered Date</th>
                                    <th className="table-cell-head">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jsonData.map(order => (
                                    <tr key={order.id}>
                                        <td className="table-cell-body">{order.name}</td>
                                        <td className="table-cell-body">{order.pickupdate}</td>
                                        <td className="table-cell-body">{order.orderedat}</td>
                                        <td className="table-cell-body"><button style={{ paddingTop: "5px", paddingBottom: "5px", border: "none" }}>Details</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="pending">
                    <div className="header">
                        Delivery Orders
                    </div>
                    <div className="scrollable-table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="table-cell-head">Name</th>
                                    <th className="table-cell-head">Pickup Date</th>
                                    <th className="table-cell-head">Ordered Date</th>
                                    <th className="table-cell-head">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jsonData.map(order => (
                                    <tr key={order.id}>
                                        <td className="table-cell-body">{order.name}</td>
                                        <td className="table-cell-body">{order.pickupdate}</td>
                                        <td className="table-cell-body">{order.orderedat}</td>
                                        <td className="table-cell-body"><button style={{ paddingTop: "5px", paddingBottom: "5px", border: "none" }}>Details</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="pending">
                    <div className="header">
                        Total Orders
                    </div>
                    <div className="scrollable-table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="table-cell-head">Name</th>
                                    <th className="table-cell-head">Pickup Date</th>
                                    <th className="table-cell-head">Ordered Date</th>
                                    <th className="table-cell-head">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jsonData.map(order => (
                                    <tr key={order.id}>
                                        <td className="table-cell-body">{order.name}</td>
                                        <td className="table-cell-body">{order.pickupdate}</td>
                                        <td className="table-cell-body">{order.orderedat}</td>
                                        <td className="table-cell-body"><button style={{ paddingTop: "5px", paddingBottom: "5px", border: "none" }}>Details</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
