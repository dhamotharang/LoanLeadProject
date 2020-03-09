import {Component, OnInit} from '@angular/core';
import {EnvironmentService} from "../../core/services/environment.service";
import {EimEnvironmentModel} from "../../model/environment/environment";
import {Observable} from "rxjs";
import {Location} from "@angular/common"
import {takeUntil} from "rxjs/operators";
import {EimObserver} from "../../model/eim-observer";

@Component({
  selector: 'eim-environment-settings',
  templateUrl: './environment-settings.component.html',
  styleUrls: ['./environment-settings.component.scss']
})
export class EnvironmentSettingsComponent extends EimObserver implements OnInit {

  environment: EimEnvironmentModel;
  colors: string[] = ['#B4C7E7', '#C5E0B4', '#FFE699', '#DBDBDB', '#F8CBAD', '#FF0000'];
  activeColor: string;
  environmentName: string;

  constructor(private environmentService: EnvironmentService, private location: Location) {
    super();
  }

  ngOnInit() {
    this.environmentService.getEnvironment().pipe(takeUntil(this.unsubscribe)).subscribe((data) => {
      this.environment = data;
      this.activeColor = this.environment.color || this.colors[0];
      this.environmentName = this.environment.name;
    });
  }

  isEnvironmentConfigured(): boolean {
    return this.environmentService.isEnvironmentConfigured();
  }

  selectColor(c: string) {
    this.activeColor = c;
  }

  exportConfig() {
    console.log("export config")
  }

  importConfig() {
    console.log("import config")
  }

  exportEnvironmentLogs() {
    console.log("export environment logs")
  }

  uninstallAllProducts() {
    console.log('uninstall products')
  }

  deleteEnvironment() {
    console.log('delete environment')
  }

  saveClick() {
    if (!this.environmentName || this.environmentName.length === 0) {
      window.alert("Environment Name can not be empty");
      return;
    }
    this.save().subscribe(() => {
    });
  }

  nextClick() {
    if (!this.environmentName || this.environmentName.length === 0) {
      window.alert("Environment Name can not be empty");
      return;
    }
    this.save().subscribe(() => {
      this.location.back();
    });
  }

  save(): Observable<EimEnvironmentModel> {
    const env = {
      id: this.environment.id,
      name: this.environmentName,
      color: this.activeColor
    };
    return this.environmentService.save(env);
  }

  cancelClick() {
    this.location.back();
  }
}
