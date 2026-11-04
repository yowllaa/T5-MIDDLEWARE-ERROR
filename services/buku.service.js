import buku from '../data/buku.js';
import AppError from '../utils/AppError.js';

export async function ambilSemuaBuku(kategori) {
  return kategori ? buku.filter((item) => item.kategori === kategori) : [...buku];
}
export async function ambilBukuById(id) {
  const item = buku.find((b) => b.id === id);
  if (!item) throw new AppError(404, 'Buku tidak ditemukan', 'NOT_FOUND');
  return item;
}
export async function tambahBuku(data) {
  const duplikat = buku.some((b) => b.judul.toLocaleLowerCase('id-ID') === data.judul.toLocaleLowerCase('id-ID'));
  if (duplikat) throw new AppError(409, 'Judul buku sudah terdaftar', 'JUDUL_DUPLIKAT');
  const idBaru = buku.length ? Math.max(...buku.map((b) => b.id)) + 1 : 1;
  const itemBaru = { id: idBaru, ...data };
  buku.push(itemBaru);
  return itemBaru;
}
export async function hapusBuku(id) {
  const index = buku.findIndex((b) => b.id === id);
  if (index === -1) throw new AppError(404, 'Buku tidak ditemukan', 'NOT_FOUND');
  buku.splice(index, 1);
}
export async function ubahBuku(id, data) {
  const index = buku.findIndex((b) => b.id === id);
  if (index === -1) throw new AppError(404, 'Buku tidak ditemukan', 'NOT_FOUND');
  const duplikat = buku.some((b) => b.id !== id && b.judul.toLocaleLowerCase('id-ID') === data.judul.toLocaleLowerCase('id-ID'));
  if (duplikat) throw new AppError(409, 'Judul buku sudah terdaftar', 'JUDUL_DUPLIKAT');
  buku[index] = { id, ...data };
  return buku[index];
}
