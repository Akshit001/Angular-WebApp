import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.less']
})
export class ServersComponent implements OnInit {
  serverID= 10;
  serverStatus ='offline';
  
  getServerStatus(){
    return this.serverStatus;
  }
  constructor() { }

  ngOnInit() {
  }

}
