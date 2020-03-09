import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Strings} from "../../core/common";
import {ServersService} from "../../core/services/servers.service";

@Component({
  selector: 'eim-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.scss']
})
export class AddServerComponent implements OnInit {
  @Output()
  configsChange: EventEmitter<any> = new EventEmitter<any>();

  serverName: string;
  username: string;
  password: string;
  errorMessage: string;

  constructor(private serversService: ServersService) {
  }

  ngOnInit(): void {
  }

  testConnection() {
    if (Strings.isBlank(this.serverName)) {
      this.errorMessage = "Host name is empty";
      return;
    }
    if (Strings.isBlank(this.username) || Strings.isBlank(this.password)) {
      this.errorMessage = "Enter a username and password";
      return;
    }
    this.errorMessage = undefined;
    this.serversService.testServer(this.serverName, this.username, this.password).subscribe((data) => {
      console.log(data);
      if (data) {
        this.errorMessage = data;
      }
    })
  }

  collectData(): any {
    if (Strings.isBlank(this.serverName) ||
      Strings.isBlank(this.username) ||
      Strings.isBlank(this.password)) {
      return undefined;
    }
    return {
      hostname: this.serverName,
      username: this.username,
      password: this.password
    }
  }

  onDataChange() {
    this.configsChange.emit(this.collectData());
  }
}
