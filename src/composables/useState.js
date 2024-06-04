import { reactive } from 'vue'

export function useState() {
  const reactiveObject = reactive({
    id: 1,
    name: 'reactiveObject'
  })

  return { reactiveObject }
}