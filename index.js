'use strict';

const noble = require('noble');
const OmronEnv = require('./omron-env-sensor');

const NAME = 'EP';
const ADDRESS = 'd909b7c8dd64';
const INTERVAL_MILLISEC = 10000;

const sensor = new OmronEnv();

//discovered BLE device
const discovered = (peripheral) => {
  const device = {
    name: peripheral.advertisement.localName,
    uuid: peripheral.uuid,
    rssi: peripheral.rssi
  };
  const d = new Date();
  if(NAME === device.name && ADDRESS === device.uuid) {
    const envData = sensor.parse(peripheral.advertisement.manufacturerData.toString('hex'));
    console.log(JSON.stringify(envData));
  }
}

//BLE scan start
const scanStart = () => {
  setInterval(() => { noble.startScanning(); }, INTERVAL_MILLISEC);
  noble.on('discover', discovered);
}

if(noble.state === 'poweredOn'){
  scanStart();
}else{
  noble.on('stateChange', scanStart);
}
