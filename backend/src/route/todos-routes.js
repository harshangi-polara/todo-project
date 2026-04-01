const router = require("express").Router();
const controller = require("../controller/todos-controller");
const auth = require("../middlewares/auth-middleware");
const validate = require("../middlewares/validation-middleware");
const { todoSchema } = require("../validations/todo-validations");

router.use(auth);

router.post("/", validate(todoSchema), controller.create);
router.get("/", controller.getAll);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;