module.exports = {
  createProduct: (req, res) => {
    let {name, price, img} = req.body;
    const dbInstance = req.app.get('db');
    console.log('WHAT')

    dbInstance.create_product([name, price, img])
      .then(instanse => {
        console.log(instanse)
        res.status(200).send(instance)
      })
      .catch(() => res.status(500).send())
  },

  getAll: (req, res) => {
    const dbInstance = req.app.get('db');

    dbInstance.get_inventory()
      .then(products => {
        console.log(products)
        res.status(200).send(products)
      })
      .catch(() => res.status(500).send());
  }
}
