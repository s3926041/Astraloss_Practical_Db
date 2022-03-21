module.exports = (sequelize, DataType) => {
  const Products = sequelize.define("Products", {
    productName: {
      type: DataType.STRING,
      allowNull: false,
    },
    img1Source: {
      type: DataType.STRING,
      allowNull: false,
    },
    img2Source: {
      type: DataType.STRING,
      allowNull: false,
    },
    img3Source: {
      type: DataType.STRING,
      allowNull: false, 
    },
    img4Source: {
      type: DataType.STRING,
      allowNull: false,
    },
    price: {
      type: DataType.STRING,
      allowNull: false,
    },
    productType: {
      type: DataType.STRING,
      allowNull: false,
    },
  });
  Products.associate = (models) => {
    Products.hasMany(models.Comments, {
      onDelete: "cascade",
    });
  };
  return Products;
};
