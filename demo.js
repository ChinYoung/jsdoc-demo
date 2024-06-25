/**
 * @module Demo
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

/**
 * @class
 */
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

  /**
   *
   * @param {string} eventName
   * @param {any} payload
   */
  emit(eventName, payload) {}

  /**
 * Assistant do something
 * @fires execEvent
 * @param {string} command
 */
  exec(command) {
    this.emit('exec', command)
  }
}

/**
 * "exec" event
 * @event execEvent
 * @type {string}
 */

/**
 * Assistant say something
 * @fires sayEvent
*/
Assistant.prototype.say = function(something,) {
  /**
   * "say" event
   * @event sayEvent
   * @type {string}
   */
  this.emit('say', something)
}

/**
 * @type {string}
 * @global
 */
const globalAttr = 'str'

/**
 * @deprecated
 * @param {string} x
 *
 */
export function deprecatedFn(x) {
  // pass
}

/**
 * @callback exeCallback
 * @param {string} orderName
 * @param {string} orderContent
 * @returns {boolean}
 */

/**
 *
 * @param {exeCallback} cb
 */
export function exe(cb) {
  // exe orders from others
  return false
}



/**
 * @listens Assistant#say
 */
export function listener(event) {
  const {eventName, payload} = event
  console.log(eventName)
  console.log(payload)
  if (event.cb) {
    event.cb()
  }
}
