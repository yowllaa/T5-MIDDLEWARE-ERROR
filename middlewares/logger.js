export default function logger(req, res, next) {
  const mulai = process.hrtime.bigint();
  res.on('finish', () => {
    const durasiMs = Number(process.hrtime.bigint() - mulai) / 1e6;
    console.log(`${req.method} ${req.originalUrl} -> ${res.statusCode} (${durasiMs.toFixed(2)} ms)`);
  });
  next();
}
