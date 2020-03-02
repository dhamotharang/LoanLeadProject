import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExternalActionMessage} from "../../../model/dynamic-component";
import {FooterAction, FooterButton} from "../../../model/ui/components/footer";
import {DataService} from "../../../core/services/data.service";

@Component({
  selector: 'eim-external-configuration',
  templateUrl: './external-configuration.component.html',
  styleUrls: ['./external-configuration.component.scss']
})
export class ExternalConfigurationComponent implements OnInit {

  @Input()
  config: ExternalActionMessage;

  @Output()
  hide: EventEmitter<any> = new EventEmitter();

  private _componentData: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  dataChanged(data: any) {
    console.log('data changed');
    console.log(data);
    this._componentData = data;
    if (!data) {
      this.disableSaveButton();
    } else {
      this.enableSaveButton();
    }
  }

  actionPerformed(event: FooterButton) {
    console.log(event);
    switch (event.type) {
      case "SAVE":
        if (event.action) {
          this.saveData(event.action);
        }
        break;
      case "CLOSE":
        this.hide.emit();
        break;
    }
  }

  private saveData(action: FooterAction): void {
    this.dataService.performAction(action.method, action.url, this._componentData).subscribe(() => {
      this.hide.emit();
    });
  }

  private disableSaveButton() {
    this.config.footer.buttons.forEach((e) => {
      if (e.type === 'SAVE') {
        e.disabled = true;
      }
    });
  }

  private enableSaveButton() {
    this.config.footer.buttons.forEach((e) => {
      if (e.type === 'SAVE') {
        e.disabled = false;
      }
    });
  }

}
