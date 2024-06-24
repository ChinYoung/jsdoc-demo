const group: Group = {
  attr1: '',
  attr2: 3,
  attr3: false
}

/**
 * 使用jsdoc进行额外的说明, ts本身不支持额外添加说明, 但可以与jsdoc结合使用
 * @type {string}
 */


function say(a: string) {
  console.log("🚀 ~ say ~ a:", a)
}



const a = '1234'
say(a)

const b: number = 1234
say(b)



const x: getParamType<typeof say> = '3'
/** ts可以进行类型推断, 这是jsdoc不具备的 */
const y: getParamType<typeof say> = 3