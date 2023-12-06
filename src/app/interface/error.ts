export type TErrorSources = {
  path: string | number;
  message: string;
}[];

export type TGenericErrorREsponse = {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
};