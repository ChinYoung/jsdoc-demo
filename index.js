import { name, age, friends, identity, exe, Assistant, deprecatedFn } from "./demos";

const assistant = new Assistant()
assistant.say('hello world')
assistant.name = 'winter'
assistant.age = 21


deprecatedFn('str')

/**
 * @type {JsGroup}
 */
const jsGroup = {
  attr1: '',
  attr2: 2,
  attr3: false
}

/** @type {Group} */
const anotherJsGroup = {
  attr1: '',
  attr2: 22,
  attr3: true
}

/**
 * @type {SubGroup}
 */
const ss = {}


