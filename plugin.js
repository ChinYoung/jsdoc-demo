/**
* @typedef {Object} Response
* @property {boolean} success
* @property {Data} data
* @property {string} message
* @property {string} code
*/
/**
* @typedef {Object} Data
* @property {Recording} recording
* @property {Transport} transport
*/
/**
* @typedef {Object} Recording
* @property {string} id
* @property {string} createTime
* @property {string} clientTime
* @property {string} mode
* @property {number} duration
* @property {Environment} environment
* @property {Meta} meta
* @property {string} state
* @property {string} trackers
*/
/**
* @typedef {Object} Environment
* @property {Device} device
* @property {string} screen
* @property {Window} window
* @property {Document} document
* @property {string} version
*/
/**
* @typedef {Object} Device
* @property {string} appCodeName
* @property {string} appName
* @property {string} appVersion
* @property {number} deviceMemory
* @property {number} hardwareConcurrency
* @property {string} language
* @property {string} languages
* @property {string} platform
* @property {string} userAgent
*/
/**
* @typedef {Object} Window
* @property {string} location
* @property {string} size
*/
/**
* @typedef {Object} Document
* @property {string} title
* @property {string} size
*/
/**
* @typedef {Object} Meta
* @property {string} appKey
* @property {string} bytereplay_record_mode
* @property {string} bytereplay_replay_mode
* @property {string} tags
*/
/**
* @typedef {Object} Transport
* @property {Strategies[]} strategies
*/
/**
* @typedef {Object} Strategies
* @property {string} name
* @property {string} mode
* @property {string} channelType
* @property {string} url
* @property {object} packer
* @property {Config} config
*/
/**
* @typedef {Object} Config
* @property {number} bufferTime
* @property {number} bufferSize
* @property {Heartbeat} heartbeat
* @property {Retry} retry
*/
/**
* @typedef {Object} Heartbeat
* @property {number} interval
* @property {number} timeout
*/
/**
* @typedef {Object} Retry
* @property {number} retries
* @property {number} initialTimeout
* @property {number} maxTimeout
*/
