import { reactive, ref } from 'vue'
import Circular from '../DTOs/Circular.js'

export function useState() {
  const reactiveObject = reactive({
    id: 1,
    name: 'reactiveObject'
  })
  
  const refObject = ref({
    id: 2,
    name: 'refObject'
  })

  const circular = reactive(new Circular())

  return { reactiveObject, refObject, circular }
}