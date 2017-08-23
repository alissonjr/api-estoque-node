import SalesController from "../controllers/sales";
import BuysController from "../controllers/buys";

export default (app) => {
    const salesController = new SalesController(app.datasource.models.CashMoviments);
    const buysController = new BuysController(app.datasource.models.CashMoviments);
    app.route('/cash/moviments')
        .get((req, res) => {

        });

    app.route('/cash/moviments/sales')
        .get((req, res) => {
            salesController.getAll()
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .post((req, res) => {
            salesController.create()
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        });
    
    app.route('/cash/moviments/buys')
        .get((req, res) => {
            BuysController.getById(Response => {
                res.status();
                res.json(Response.data);
            });
        })
        .post((req, res) => {
            BuysController.create(Response => {
                res.status();
                res.json(Response.data);
            });
        });

    app.route('/cash/moviments/sales/:id')
        .get((req, res) => {
            salesController.getById(req.params.id)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .put((req, res) => {
            salesController.update(req.body, req.params.id)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .delete((req, res) => {
            salesController.update(req.params.id)
                .then(response => {
                    res.sendStatus(response.statusCode);                    
                });
        });

    app.route('/cash/moviments/buys/:id')
        .get((req, res) => {
            BuysController.getById(req.params.id)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .put((req, res) => {
            BuysController.update(req.body, req.params.id)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .delete((req, res) => {
            BuysController.update(req.params.id)
                .then(response => {
                    res.sendStatus(response.statusCode);                    
                });
        });
}