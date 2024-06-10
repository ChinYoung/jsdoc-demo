/**
 * @module user
 */

/** name of the module */
export const name = {}

/**
 * age of the user
 * @type {number}
 * @constant
 */
export const age = 19

/**
 * friends of the user
 * @type {string[]}
 */
export const friends = []

/**
 * @readonly
 * @enum {number}
 */
export const identity = {
  STUDENT: 1,
  TEACHER: 2
}

export class Assistant {
  /**
   * @type {String}
   * @readonly
   */
  name = 'summer'
  /**
   * @type {number}
   * @constant
   */
  age = 21
  emit(eventName, payload) {}
}

/** @fires User#say */
Assistant.prototype.say = function() {
  /**
   * "say" event
   * @event User#say
   * @type {string}
   */
  this.emit('say', 'words')
}

/**
 *
 * @param {exeCallback} cb
 */
export function exe(cb) {
  // exe orders from others
}

/**
 * @callback exeCallback
 * @param {string} orderName
 * @param {string} orderContent
 */