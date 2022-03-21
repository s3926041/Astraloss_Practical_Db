const express = require("express");
const router = express.Router();
const { Products } = require("../models");

router.get("/", async (req, res) => {
  const cur_products = await Products.findAll();
  res.json(cur_products);
});
//InnerProduct
router.get("/:productType", async (req, res) => {
  const productType = req.params.productType;
  const cur_products = await Products.findAll({
    where: { productType: productType },
  });
  res.json(cur_products);
});
//SpecificProduct
router.get("/:productType/:productId", async (req, res) => {
  const productId = req.params.productId;

  const cur_products = await Products.findByPk(productId)
  res.json(cur_products)
  });
  

router.post("/", async (req, res) => {
  const post = req.body;
  res.json(post);
  post.map(async (value,key)=>{
   
      await Products.create(value);
  
  })
});

module.exports = router;