export interface ResponsePayload {
  message: any;
  code?: number;
  data?: { [key: string]: string };
}
