import {ProviderScope} from "../../di/class/ProviderScope";
import {IMiddlewareOptions, MiddlewareType} from "../interfaces";

export class MiddlewareProvider extends ProviderScope<any> implements IMiddlewareOptions {
    constructor(provide: any) {
        super(provide);
    }

    set type(type: any) {
        this._type = typeof type === "string" ? type : MiddlewareType[type];
    }

    get type(): any {
        return MiddlewareType[this._type];
    }
}