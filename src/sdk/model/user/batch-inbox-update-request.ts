import { BatchInboxUpdateRequestJson } from './__json__/batch-inbox-update-request-json';
import { MessageSelection } from './__json__/message-selection';
import { MessageFolder } from './__json__/message-folder';
import { UpdateType } from './__json__/update-type';

/**
 * Batch Inbox Update Request.
 */
/* istanbul ignore next: autogenerated */
export class BatchInboxUpdateRequest {

  private readonly _json: BatchInboxUpdateRequestJson;

  constructor(batchInboxUpdateRequest: BatchInboxUpdateRequest);
  constructor(batchInboxUpdateRequestJson: BatchInboxUpdateRequestJson);
  constructor(type: UpdateType, folder: MessageFolder, selection: MessageSelection, uuids: Array<string>);
  constructor(firstParam: UpdateType | BatchInboxUpdateRequest | BatchInboxUpdateRequestJson, folder?: MessageFolder,
              selection?: MessageSelection, uuids?: Array<string>) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        type: firstParam,
        folder: folder,
        selection: selection,
        uuids: uuids
      } as BatchInboxUpdateRequestJson;
    } else if (firstParam instanceof BatchInboxUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as BatchInboxUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as BatchInboxUpdateRequestJson;
    }
  }

  /**
   * Get type.
   * @returns {UpdateType}
   */
  get type(): UpdateType {
    return this._json.type;
  }

  /**
   * Get folder.
   * @returns {MessageFolder}
   */
  get folder(): MessageFolder {
    return this._json.folder;
  }

  /**
   * Get selection.
   * @returns {MessageSelection}
   */
  get selection(): MessageSelection {
    return this._json.selection;
  }

  /**
   * Get uuids.
   * @returns {Array<string>}
   */
  get uuids(): Array<string> {
    return this._json.uuids;
  }

  /**
   * Get the json representation of this class.
   * @returns {BatchInboxUpdateRequestJson}
   */
  get json(): BatchInboxUpdateRequestJson {
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
