import { BGPFilterJson } from './__json__/bgp-filter-json';
import { RoutingDirectionType } from './__json__/routing-direction-type';
import { RoutingActionType } from './__json__/routing-action-type';

/**
 * BGP Filter
 */
/* istanbul ignore next: autogenerated */
export class BGPFilter {

  constructor(private _json: BGPFilterJson) {
  }

  /**
   * Get direction.
   * @returns {RoutingDirectionType}
   */
  get direction(): RoutingDirectionType {
    return this._json.direction;
  }

  /**
   * Get action.
   * @returns {RoutingActionType}
   */
  get action(): RoutingActionType {
    return this._json.action;
  }

  /**
   * Get network.
   * @returns {string}
   */
  get network(): string {
    return this._json.network;
  }

  /**
   * Get ip prefix ge.
   * @returns {number | undefined}
   */
  get ipPrefixGe(): number | undefined {
    return this._json.ip_prefix_ge || undefined;
  }

  /**
   * Get ip prefix le.
   * @returns {number | undefined}
   */
  get ipPrefixLe(): number | undefined {
    return this._json.ip_prefix_le || undefined;
  }

  /**
   * Get the json representation of this class.
   * @returns {BGPFilterJson}
   */
  get json(): BGPFilterJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
