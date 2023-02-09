import React from 'react'
import { Collapse } from 'antd';
const { Panel } = Collapse;

function ReservationsDisplay(props) {
    const data = props.getProducts
    const reservations = data?data.getAllReservations:[]
    return (
        <div style={{flex:'1'}}>
            <div style={{marginBottom:'1em'}}>Reservations Info:</div>
            <Collapse defaultActiveKey={['1']}>
               {
                   reservations.map((item)=>{
                        return (
                            <Panel header= {'订单编号: ' + item.id} key={item.userName  + item.id } >
                                <p key={item.userName}> 客户名称: {item.userName}</p>
                                <p key={item.phoneNumber}> 联系方式: {item.phoneNumber}</p>
                                <p key={item.tableSize}> 桌子大小: {item.tableSize}</p>
                                <p key={item.arriveTime}> 达到时间: {item.arriveTime}</p>
                                <p key={item.reservationStatus}> 预约状态: {item.reservationStatus}</p>
                            </Panel>
                        )
                   })
                 }
            </Collapse>
        </div>
    )
}

export default ReservationsDisplay
