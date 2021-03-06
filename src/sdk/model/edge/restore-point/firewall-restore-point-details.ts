import { FirewallRestorePointDetailsJson } from './__json__/firewall-restore-point-detail-json';
import { EdgeGatewayFirewall } from '../edge-gateway-firewall/edge-gateway-firewall';

/**
 * Firewall Restore Point Details.
 */

/* istanbul ignore next: autogenerated */
export class FirewallRestorePointDetails {

  constructor(private _json: FirewallRestorePointDetailsJson) {
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get restore point time.
   * @returns {number}
   */
  get restorePointTime(): Date {
    return new Date(this._json.restore_point_time);
  }

  /**
   * Get firewall configuration.
   * @returns {EdgeGatewayFirewall}
   */
  get data(): EdgeGatewayFirewall {
    return new EdgeGatewayFirewall(this._json.data);
  }

  /**
   * Get the json representation of this class.
   * @returns {FirewallRestorePointDetailsJson}
   */
  get json(): FirewallRestorePointDetailsJson {
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
