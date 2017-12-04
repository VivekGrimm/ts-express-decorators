import {ProviderStorable} from "./ProviderStorable";

export class ProviderScope<T> extends ProviderStorable<T> {

    /**
     * Get the scope of the provider.
     * @returns {boolean}
     */
    get scope(): boolean | "request" {
        return this.store.get("store");
    }

    /**
     * Change the scope value of the provider.
     * @param scope
     */
    set scope(scope: boolean | "request") {
        this.store.set("store", scope);
    }
}