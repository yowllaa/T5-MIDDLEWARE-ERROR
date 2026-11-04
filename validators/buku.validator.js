import Joi from 'joi';
import AppError from '../utils/AppError.js';

export const bukuSchema = Joi.object({
  judul: Joi.string().trim().min(3).max(100).required().messages({
    'string.base': 'judul harus berupa teks', 'string.empty': 'judul wajib diisi',
    'string.min': 'judul minimal 3 karakter', 'string.max': 'judul maksimal 100 karakter', 'any.required': 'judul wajib diisi'
  }),
  penulis: Joi.string().trim().min(3).required().messages({
    'string.base': 'penulis harus berupa teks', 'string.empty': 'penulis wajib diisi',
    'string.min': 'penulis minimal 3 karakter', 'any.required': 'penulis wajib diisi'
  }),
  tahun: Joi.number().integer().min(1900).max(2026).required().messages({
    'number.base': 'tahun harus berupa angka', 'number.integer': 'tahun harus bilangan bulat',
    'number.min': 'tahun minimal 1900', 'number.max': 'tahun maksimal 2026', 'any.required': 'tahun wajib diisi'
  }),
  stok: Joi.number().integer().min(0).max(100).default(1).messages({
    'number.base': 'stok harus berupa angka', 'number.integer': 'stok harus bilangan bulat',
    'number.min': 'stok minimal 0', 'number.max': 'stok maksimal 100'
  }),
  kategori: Joi.string().valid('novel', 'sains', 'sejarah', 'agama').required().messages({
    'any.only': 'kategori harus salah satu dari: novel, sains, sejarah, agama',
    'any.required': 'kategori wajib diisi', 'string.base': 'kategori harus berupa teks'
  })
}).unknown(false);

export function validasiBuku(req, res, next) {
  const { error, value } = bukuSchema.validate(req.body, { abortEarly: false, convert: true });
  if (error) {
    const kesalahan = error.details.map((detail) => detail.message);
    return next(new AppError(422, kesalahan.join('; '), 'VALIDATION_ERROR'));
  }
  req.body = value; // Termasuk nilai default stok jika tidak dikirim.
  next();
}
