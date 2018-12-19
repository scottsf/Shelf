module.exports = {
  createProduct: (req, res) => {
    let {name, price, img} = req.body;
    const dbInstance = req.app.get('db');

    dbInstance.create_product([name, price, img])
      .then((instanse) => res.status(200).send(instance))
      .catch(() => res.status(500).send())
  },

  read: (req, res) => {
    const dbInstance = req.app.get('db');

    dbInstance.get_inventory()
      .then(products => res.status(200).send(products))
      .catch(() => res.status(500).send());
  }
}
