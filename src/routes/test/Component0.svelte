<script lang="ts">
  import Component1 from './Component1.svelte'

  export let data = { value: undefined }

  let value: any = undefined
  const setValue = (v: any) => { 
    value = v
    console.log('UPDATE!')
  }
  $: { setValue(data.value) }
</script>

<Component1 bind:value></Component1>
