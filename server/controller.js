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
  },

  removeProduct: (req, res) => {
    let {id} = req.params;

    const dbInstance = req.app.get('db');
    dbInstance.removeProduct([id]).then(instance => {
      res.status(200).send(instance[0]);
    })
  },

  update: (req, res) => {
    let {name, price, img} = req.body;
    let {id} = req.params;
    let dbInstance = req.app.get('db');
    dbInstance.update_product([name, price, img, id]).then(instance => {
      res.status(200).send(instance)
    })
  }
}
