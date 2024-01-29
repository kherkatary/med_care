import React from 'react';
import styles from './userbooking.module.scss'
import { Card, List } from 'antd';
const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
];
const UserBookings = () => (
    <div className={styles.container}>


        <List
            grid={{
                gutter: 16,
                column: 2,
            }}
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <Card title={item.title}>
                        <h3>Appointment Booked</h3>
                        <p>Date: 27-01-2024</p>
                    </Card>
                </List.Item>
            )}
        />

    </div>
);
export default UserBookings;