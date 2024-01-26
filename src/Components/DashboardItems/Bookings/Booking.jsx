import React, { useEffect, useState } from 'react';
import VirtualList from 'rc-virtual-list';
import styles from './Booking.module.scss'
import { Avatar, List, message, Modal, Button } from 'antd';

const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;

const Booking = () => {
  const { confirm } = Modal;
  const [data, setData] = useState([]);
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
      });
  };

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  useEffect(() => {
    appendData();
  }, []);
  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };
  return (
    <div className={styles.container}>

 
    <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
        onScroll={onScroll}
      >
        {(item) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description={`Date: ${"12-01-2024"} email: ${item.email}`}
            />
            <div className={styles.appointment_type}>{item.name.first}</div>
            <Button onClick={showDeleteConfirm} type="dashed">
              Delete
            </Button>

          </List.Item>
        )}
      </VirtualList>
    </List>
    </div>
  );
};
export default Booking