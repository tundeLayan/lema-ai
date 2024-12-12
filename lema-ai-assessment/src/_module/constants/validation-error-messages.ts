export const ErrorMessages = {
  required: (value: string) => `${value} is required`,
  invalidEmail: `Invalid Email Address`,
  invalidType: (value: string) => `Please input only ${value}`,
  length: (num: number = 6, label: string) =>
    `Your ${label} must be ${num} characters.`,
  maxLength: (num: number, label: string) =>
    `Your ${label} must be at most ${num} characters`,
  minLength: (num: number, label: string) =>
    `Your ${label} must be at least ${num} characters`,
  invalidFormat: (field: string) => `${field} has an invalid format.`,
};
