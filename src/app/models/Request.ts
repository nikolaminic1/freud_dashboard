import { StatusModel } from "../service/StatusModel";

export interface ResponseModel {
  data: object;
  devMessage: string;
  message: string;
  reason: string;
  status: string;
  statusCode: number;
  timeStamp: string;
}

export interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}
