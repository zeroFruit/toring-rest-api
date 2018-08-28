import * as express from "express";
import * as bodyParser from "body-parser";
import {Routes} from "./routes";
const path = require("path");

class App {

    public app: express.Application;
    public router: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.router.routes(this.app);
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static(path.join(__dirname, "../public")))
    }

}

export default new App().app;