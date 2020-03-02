import {ExternalActionMessage} from "../../dynamic-component";

export interface CustomTooltipConfig extends ExternalActionMessage {
  width: string;
  height: string;
  target: string;
}
