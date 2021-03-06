import {PropertyMetadata} from "../../jsonschema/class/PropertyMetadata";
import {PropertyRegistry} from "../../jsonschema/registries/PropertyRegistry";

/**
 * The following formats are supported for string validation with `format` keyword:
 *
 * - **date**: full-date according to RFC3339.
 * - **time**: time with optional time-zone.
 * - **date-time**: date-time from the same source (time-zone is mandatory). date, time and date-time validate ranges in full mode and only regexp in fast mode (see options).
 * - **uri**: full uri with optional protocol.
 * - **url**: URL record.
 * - **uri-template**: URI template according to RFC6570
 * - **email**: email address.
 * - **hostname**: host name according to RFC1034.
 * - **ipv4**: IP address v4.
 * - **ipv6**: IP address v6.
 * - **regex**: tests whether a string is a valid regular expression by passing it to RegExp constructor.
 * - **uuid**: Universally Unique IDentifier according to RFC4122.
 * - **json-pointer**: JSON-pointer according to RFC6901.
 * - **relative-json-pointer**: relative JSON-pointer according to this draft.
 *
 * @param {string} format
 * @returns {Function}
 * @decorator
 */
export function Format(format: string) {
    return PropertyRegistry.decorate((propertyMetadata: PropertyMetadata) => {
        propertyMetadata.type = String;
        propertyMetadata.schema.format = format;
    });
}