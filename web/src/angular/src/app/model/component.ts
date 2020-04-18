import {EimUiConfigModel} from "./loanlead-ui-config";

export interface EimComponentModel {
  id?: string;
  name?: string;
  description?: string;
  configs?: EimConfigModel[];
  uiConfig?: EimUiConfigModel;
  icon?: string;
  components?: EimComponentModel[];
  resources?: EimResourceModel[];
}

export interface EimResourceModel extends EimComponentModel {
  optional: boolean;
  optionalSelected: boolean;
}

export interface EimConfigModel {
  // todo
}
