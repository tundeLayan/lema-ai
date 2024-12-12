export const getParams = <T>(param: T): { [K in keyof T]: string } => {
  const result: { [K in keyof T]: string } = {} as { [K in keyof T]: string };
  for (const key in param) {
    if (Object.prototype.hasOwnProperty.call(param, key)) {
      const value = param[key];
      result[key] = value !== undefined && value !== null ? String(value) : "";
    }
  }
  return result;
};
