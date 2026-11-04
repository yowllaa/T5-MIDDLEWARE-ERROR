import * as bukuService from '../services/buku.service.js';

export async function getSemua(req, res, next) {
  try { const data = await bukuService.ambilSemuaBuku(req.query.kategori); res.status(200).json({ data }); }
  catch (err) { next(err); }
}
export async function getDetail(req, res, next) {
  try { const data = await bukuService.ambilBukuById(req.bukuId); res.status(200).json({ data }); }
  catch (err) { next(err); }
}
export async function postBuku(req, res, next) {
  try { const data = await bukuService.tambahBuku(req.body); res.status(201).json({ pesan: 'Buku berhasil ditambahkan', data }); }
  catch (err) { next(err); }
}
export async function deleteBuku(req, res, next) {
  try { await bukuService.hapusBuku(req.bukuId); res.status(204).end(); }
  catch (err) { next(err); }
}
export async function putBuku(req, res, next) {
  try { const data = await bukuService.ubahBuku(req.bukuId, req.body); res.status(200).json({ pesan: 'Buku berhasil diperbarui', data }); }
  catch (err) { next(err); }
}
