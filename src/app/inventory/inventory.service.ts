import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Device {
  constructor(public id: number, public name: string) { }
}

export class Interface {
  constructor(public id: number, public name: string) { }
}

export class Service {
  constructor(public id: number, public name: string) { }
}

export class Server {
  constructor(public id: number, public name: string) { }
}

const DEVICES = [
  new Device(101, 'Device-1'),
  new Device(102, 'Device-2'),
  new Device(103, 'Device-3')
];

const INTERFACES = [
  new Interface(201, 'one-gigabit'),
  new Interface(202, 'ten-gigabit'),
  new Interface(203, 'hundred-gigabit')
];

const SERVICES = [
  new Service(301, 'Data-10-Mbps'),
  new Service(302, 'Data-20-Mbps'),
  new Service(303, 'Data-50-Mbps'),
  new Service(304, 'Data-100-Mbps'),
  new Service(305, 'Data-500-Mbps'),
  new Service(306, 'Data-1-Gbps')
];

const SERVERS = [
  new Server(401, 'DHCP-Server'),
  new Server(402, 'Compute-Server')
];

@Injectable()
export class InventoryService {

  getDevices() { return Observable.of(DEVICES); }

  getInterfaces() { return Observable.of(INTERFACES); }

  getServices() { return Observable.of(SERVICES); }

  getServers() { return Observable.of(SERVERS); }

}
