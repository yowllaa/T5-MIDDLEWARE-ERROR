import { Router } from "express";
import cekApiKey from "../middlewares/cekApiKey.js";
import { validasiBuku } from "../validators/buku.validator.js";
import { validasiId } from "../validators/params.validator.js";
import {
  getSemua,
  getDetail,
  postBuku,
  deleteBuku,
  putBuku,
} from "../controllers/buku.controller.js";

const router = Router();

router.get("/", getSemua);

// Endpoint khusus untuk pengujian Error 500
router.get("/error-500", (req, res, next) => {
  next(new Error("Simulasi kesalahan internal server"));
});

router.get("/:id", validasiId, getDetail);
router.post("/", cekApiKey, validasiBuku, postBuku);
router.delete("/:id", cekApiKey, validasiId, deleteBuku);
// Bonus: PUT melewati API Key, validasi, controller, service, dan data.
router.put("/:id", cekApiKey, validasiId, validasiBuku, putBuku);
export default router;
