import AppError from '../utils/AppError.js';
export default function cekApiKey(req, res, next) {
  const apiKey = req.get('x-api-key');
  const expectedKey = process.env.API_KEY;
  if (!expectedKey || !apiKey || apiKey !== expectedKey) {
    return next(new AppError(401, 'API Key tidak valid atau tidak diberikan', 'UNAUTHORIZED'));
  }
  next();
}
