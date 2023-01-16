<script lang="ts">
  export let value: number

  const options = [
    { id: 1, label: 'one' },
    { id: 2, label: 'two' },
    { id: 3, label: 'three' },
  ]
</script>

<select bind:value={value}>
  {#each options as { id, label } (id)}
    <option value={id}>{label}</option>
  {/each}
</select>
