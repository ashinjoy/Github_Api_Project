export class CustomError extends Error {
  // statusCode:number;
  constructor(message: string, public statusCode: number) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  serializeError() {
    return [{ message: this.message }];
  }
}
