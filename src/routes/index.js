const { Router } = require("express");

const criminalRoutes = require("./criminalRoutes");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", (req, res) => {
  res.send("Available /criminal");
});

router.use("/criminal", criminalRoutes);

module.exports = router;
