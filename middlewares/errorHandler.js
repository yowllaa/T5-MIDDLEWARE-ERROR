export default function errorHandler(err, req, res, next) {
  // Error operasional boleh ditampilkan pesannya; error tak terduga disamarkan.
  const statusCode = Number.isInteger(err.statusCode) ? err.statusCode : 500;
  if (statusCode === 500) {
    console.error('[ERROR INTERNAL]', err);
    return res.status(500).json({ error: { pesan: 'Terjadi kesalahan pada server', kode: 'INTERNAL_SERVER_ERROR' } });
  }
  const kode = err.kode || 'INTERNAL_ERROR';
  return res.status(statusCode).json({ error: { pesan: err.message || 'Terjadi kesalahan', kode } });
}
