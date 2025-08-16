/* 
  Event Routes
  /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { validarJWT } = require("../middlewares/validarJWT");

const router = Router();

const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { validarCampos } = require("../middlewares/validarCampos");
const { esFecha } = require("../helpers/esFecha");

router.use(validarJWT);

// Obtener eventos
router.get("/", getEventos);

//Crear un nuevo evento
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(esFecha),
    check("end", "Fecha de finalización es obligatoria").custom(esFecha),
    validarCampos,
  ],
  crearEvento
);

//Actualizar Evento
router.put(
  "/:id",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(esFecha),
    check("end", "Fecha de finalización es obligatoria").custom(esFecha),
    validarCampos,
  ],
  actualizarEvento
);

//Actualizar Evento
router.delete("/:id", eliminarEvento);

module.exports = router;
