import { reactive } from 'vue'

export function useReactive() {
  const reactiveObject = reactive({
    id: 1,
    name: 'reactiveObject'
  })

  return { reactiveObject }
}