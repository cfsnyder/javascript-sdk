/* istanbul ignore next: autogenerated */
import { UserTwoFactorAuthRecordJson } from './__json__/user-two-factor-auth-record-json';

/**
 * User two-factor auth record.
 */
export class UserTwoFactorAuthRecord {

  constructor(private _json: UserTwoFactorAuthRecordJson) {
  }

  /**
   * Get username.
   * @returns {string}
   */
  get username(): string {
    return this._json.username;
  }

  /**
   * Get email.
   * @returns {string}
   */
  get email(): string {
    return this._json.email;
  }

  /**
   * Get full name.
   * @returns {string}
   */
  get fullName(): string {
    return this._json.full_name;
  }

  /**
   * Get configured.
   * @returns {boolean}
   */
  get configured(): boolean {
    return this._json.configured;
  }

  /**
   * Get the json representation of this class.
   * @returns {UserTwoFactorAuthRecordJson}
   */
  get json(): UserTwoFactorAuthRecordJson {
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
