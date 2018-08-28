"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routes {
    routes(app) {
        app.route('/').get((req, res) => {
            res.status(200).send({
                message: 'Hello from NodeJS world'
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map