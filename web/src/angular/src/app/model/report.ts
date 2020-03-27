export interface Report {
  id: number;
  customer: string;
  user: string;
  branches: string[];
  stage: string;
  status: string;
  comment: string;
  actionedAt: string;
}
