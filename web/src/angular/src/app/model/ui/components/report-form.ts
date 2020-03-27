export interface ReportForm {
  startDate: string;
  endDate: string;
  reportType: string;
  entityId?: number,
  itemsPerPage: number;
  page: number;
}
