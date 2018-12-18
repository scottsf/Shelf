module.exports = {
  create: (req, res) => {
    let {name, price, img} = req.body;
    let dbInstance = req.app.get('db');
    dbInstance.create_product([name, price, img])
      .then(instance => res.status(200).send())
      .catch(error => res.status(500).send())
  },

  read: (req, res) => {
    const dbInstance = req.app.get('db');

    dbInstance.get_inventory()
      .then(products => res.status(200).send(products))
      .catch(() => res.status(500).send());
  }
}
