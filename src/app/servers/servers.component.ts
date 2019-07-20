import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.less']
})
export class ServersComponent implements OnInit {
  serverID= 10;
  serverStatus ='offline';
  serveUp = false;
  color='red';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
    if( this.serverStatus == 'online'){
        this.serveUp = true;
    }
   }

   getColor(){
    return this.color= this.serverStatus == 'online'? 'green':'red';
  }
  getServerStatus(){
    return this.serverStatus;
  }


  ngOnInit() {
  }

}
