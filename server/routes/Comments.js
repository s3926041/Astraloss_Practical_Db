const express = require("express");
const router = express.Router();
const { Comments } = require("../models");

//GET
router.get("/", async(req,res)=> {
    const comments = await Comments.findAll()
    res.json(comments)
})
router.get("/:productId", async (req, res) => {
  const productId = req.params.productId;
  const comments = await Comments.findAll({ where: { ProductId: productId } });
  res.json(comments);
});
router.post("/", async (req, res) => {
  const comment = req.body;
  await Comments.create(comment);
  res.json(comment);
});

//POST TEST

module.exports = router;
