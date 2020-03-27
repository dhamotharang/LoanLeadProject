import {Entity} from './entity';

// TODO Finish with models and create other models
export interface Branch {
  id?: number;
  entityName: string;
  name: string;
  type: string;
  district: string;
  town: string;
  createdAt?: string;
}
