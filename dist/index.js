"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*  Arrancamos el servidor! */
const app_1 = __importDefault(require("./app"));
require("./database");
app_1.default.listen(app_1.default.get('port'), () => console.log(`Server started on port ${app_1.default.get('port')}`));
