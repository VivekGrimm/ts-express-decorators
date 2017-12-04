import {Registry} from "../../core/class/Registry";
import {ProviderScope} from "../class/ProviderScope";
import {IProviderOptions} from "../interfaces/IProviderOptions";

export const ProviderRegistry = new Registry<ProviderScope<any>, IProviderOptions<any>>(ProviderScope);