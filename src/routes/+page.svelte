<script lang="ts">
  import type { PageData } from "./$types"
  import Select from "./Select.svelte"

  export let data: PageData
  $: console.log('change data', JSON.stringify(data))

  // valueA PATTERN
  // When valueA is changed, a change in data is detected (UNEXPECTED BEHAVIOR)
  let valueA: number
  $: { valueA = data.value }

  // valueB PATTERN
  // If valueB is changed, the change in data is not detected (EXPECTED BEHAVIOR)
  let valueB: number
  const setValueB = (v: number) => { valueB = v }
  $: { setValueB(data.value) }
</script>

<!-- valueA PATTERN -->
<Select bind:value={valueA}></Select><br>
valueA={JSON.stringify(valueA)}<br>

<!-- valueB PATTERN -->
<Select bind:value={valueB}></Select><br>
valueB={JSON.stringify(valueB)}<br>
