import { reactive, ref } from 'vue'

export function useState() {
  const reactiveObject = reactive({
    id: 1,
    name: 'reactiveObject'
  })
  
  const refObject = ref({
    id: 2,
    name: 'refObject'
  })

  return { reactiveObject, refObject }
}