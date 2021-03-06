import { EdgeGatewayFirewallObjectJson } from './__json__/edge-gateway-firewall-object-json';
import { EdgeGatewayFirewallObjectProperty } from './edge-gateway-firewall-object-property';

/**
 * Edge gateway firewall object
 */
/* istanbul ignore next: autogenerated */
export class EdgeGatewayFirewallObject {

  constructor(private _json: EdgeGatewayFirewallObjectJson) {}

  /**
   * Get type.
   * @returns {string}
   */
  get type(): string {
    return this._json.type;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get properties.
   * @returns {Array<EdgeGatewayFirewallObjectProperty>}
   */
  get properties(): Array<EdgeGatewayFirewallObjectProperty> {
    return this._json.properties.map(p => new EdgeGatewayFirewallObjectProperty(p));
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayFirewallObjectJson}
   */
  get json(): EdgeGatewayFirewallObjectJson {
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
