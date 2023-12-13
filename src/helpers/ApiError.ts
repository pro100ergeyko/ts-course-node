import { HttpError } from "routing-controllers";
import type { ValidationError } from "class-validator";

interface MassageInterface {
  status: number;
  message?: string;
  code?: string;
  errors?: ValidationError[];
}

export class ApiError extends HttpError {
  protected error: MassageInterface;
  public removeLog: boolean;

  constructor(status = 500, error: Omit<MassageInterface, "status">) {
    super(status);

    this.error = { ...error, status, code: error.code || "INTERNAL_ERROR" };
    this.name = "ApiError";
    this.message = error.message || "";
  }

  public toJSON = (): MassageInterface => {
    return this.error;
  };
}
