import * as PIXI from "pixi.js";
import ResourceLoader from "./ResourceLoader";

export default new class AssetsListLoader {
    constructor() {
        PIXI.Loader.registerPlugin(ResourceLoader);
    }
}