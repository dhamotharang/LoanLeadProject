import {EimComponentModel} from "../component";

export interface EimResourceModel extends EimComponentModel{
  optional: boolean;
  optionalSelected: boolean;
}
