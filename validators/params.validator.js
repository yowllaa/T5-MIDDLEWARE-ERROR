import AppError from '../utils/AppError.js';
export function validasiId(req, res, next) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    return next(new AppError(404, 'Buku tidak ditemukan', 'NOT_FOUND'));
  }
  req.bukuId = id;
  next();
}
