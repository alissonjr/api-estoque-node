import ProductsController from '../controllers/products';

export default (app) => {
    const productsController = new ProductsController(app.datasource.models.Products);
    app.route('/products')
        .get((req, res) => {
            productsController.getAll()
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .post((req, res) => {
            productsController.create(req.body)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        });
    
    app.route('/products/:id')
        .get((req, res) => {
            productsController.getById(req.params.id)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .put((req, res) => {
            productsController.update(req.body, req.params.id)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .delete((req, res) => {
            productsController.delete(req.params.id)
                .then(response => {
                    res.sendStatus(response.statusCode);
                });
        });
}