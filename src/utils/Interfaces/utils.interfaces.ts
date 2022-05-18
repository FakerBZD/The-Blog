export interface ResponsePayload {
  message: any;
  status?: number;
  data?: { [key: string]: string };
}
