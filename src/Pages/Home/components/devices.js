import React from 'react';
import './styles.css';
import DeviceItem from './device-item';
import {Link} from 'react-router-dom';

const Devices = (props) => {
    return (
        <div className="devices-container">
            <h4 className="text-center">Device List</h4>
            <ul className="list-group">
                {
                    props.list.map( (item, key) => {
                        return (
                            <DeviceItem key={ key } name={ item.name } />
                        )
                    })
                }
            </ul>
            <div className="center-component">
                <button onClick= {props.eventAddDev} type="button" className="btn btn-primary btn-margin"> Add new </button>
                
                <Link className="btn btn-primary btn-margin" to ={'/device'}> 
                         Add nuevo device
                </Link>
            </div>
        </div>
    );
};

//function addDevice() {
//    console.log('pressed');
//}
export default Devices;