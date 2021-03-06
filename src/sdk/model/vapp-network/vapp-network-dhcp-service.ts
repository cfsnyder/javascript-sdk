import { VappNetworkDHCPServiceJson } from './__json__/vapp-network-dhcp-service-json';
import { IpRange } from '../common/ip-range/ip-range';

/* istanbul ignore next: autogenerated */
export class VappNetworkDHCPService {

  constructor(private _json: VappNetworkDHCPServiceJson) {
  }

  /**
   * Get vapp uuid.
   * @returns {string}
   */
  get vappUuid(): string {
    return this._json.vapp_uuid;
  }

  /**
   * Get network name.
   * @returns {string}
   */
  get networkName(): string {
    return this._json.network_name;
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get ip range.
   * @returns {IpRange}
   */
  get ipRange(): IpRange {
    return new IpRange(this._json.ip_range);
  }

  /**
   * Get default lease time.
   * @returns {number}
   */
  get defaultLeaseTime(): number {
    return this._json.default_lease_time;
  }

  /**
   * Get max lease time.
   * @returns {number}
   */
  get maxLeaseTime(): number {
    return this._json.max_lease_time;
  }

  /**
   * Get the json representation of this class.
   * @returns {VappNetworkDHCPServiceJson}
   */
  get json(): VappNetworkDHCPServiceJson {
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
