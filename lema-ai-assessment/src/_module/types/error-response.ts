export type TErrorResponse = {
  code: string;
  error: boolean;
  message: string;
  details?: {
    id?: string;
    email?: string;
    status?: string;
  };
};
