export default class Circular {
  constructor() {
    this.value = "Circular reference object"
    this.self = this
  }
}