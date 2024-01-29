import React from 'react'
import styles from './User.module.scss'
import { Tabs } from 'antd';
import { Profile,Booking,Blogs,Courses,UserBookings } from '../../../Components'


const User = () => {
  const TabsProps = [
    {
        key: '1',
        label: 'Booking',
        children: <UserBookings />,
    },
    {
        key: '2',
        label: 'Blogs',
        children: <Blogs />,
    },
    {
        key: '3',
        label: 'Courses',
        children: <Courses />,
    },
];
  return (
    <div className={styles.container}>
       <Profile 
           name="Sandeep Kherkatary"
           image="https://img.freepik.com/free-photo/portrait-young-woman-wearing-tradition-sari-garment_52683-90226.jpg?w=740&t=st=1706281846~exp=1706282446~hmac=a4ff0090e009f7e3dc4cb302990a76c2bcd1818d1626cb0c5254e4ed536985ef"
           phone="9706245997"
           dob="11-09-2000"
           email="sandeep@123.com"
           city="Guwahati"
           state="Assam"
           cover="https://img.freepik.com/free-photo/beautiful-cherry-blossoms-trees-blooming-spring_335224-878.jpg?w=1380&t=st=1706288667~exp=1706289267~hmac=93e6b8803e2acb3633652c13bb9a802b3f54a8d372daebcfd8ddbaafba4805b4"
           />
      <div className=""> 
      <Tabs
                    defaultActiveKey="1"
                    items={TabsProps.map((item, i) => {
                        const id = String(i + 1);
                        return {
                            key: id,
                            label: item.label,
                            children: item.children,
                        };
                    })}
                />
      </div>

    </div>
  )
}

export default User