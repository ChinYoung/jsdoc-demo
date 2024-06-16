/**
 * 这是Group, vscode支持将typedef转换为type
 * @typedef {Object} GroupAsJsDoc
 * @property {string} attr1 这是属性1
 * @property {number} attr2 这是属性2
 * @property {boolean} attr3 这是属性3
 */



type Group = {
  /** 属性 attr1的说明 */
  attr1: string
  attr2: number
  attr3: boolean
}
/** 推断函数的参数类型 */
type getParamType<T> = T extends (a: infer P) => void ? P : never;