export default class AppError extends Error {
  constructor(statusCode, pesan, kode) {
    super(pesan);
    this.statusCode = statusCode;
    this.kode = kode;
    this.isOperational = true;
    Error.captureStackTrace?.(this, this.constructor);
  }
}
