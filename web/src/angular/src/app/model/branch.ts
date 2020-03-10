import {Entity} from './entity';

// TODO Finish with models and create other models
export interface Branch {
  id: string;
  entity: Entity;
  name: string;
  type: string;
  district: string;
  town: string;
  createdAt: string;
}
