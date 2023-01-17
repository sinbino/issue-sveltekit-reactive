<script lang="ts">
  import Components from './Components.svelte'
  import type { PageData } from './$types'

  export let data: PageData

  let date: string | undefined = undefined
  const setDate = (v: string | undefined) => { date = v }
  $: setDate(data.date)
</script>

<Components bind:value={date} />
