# `svelte-use-resize-observer`

## Usage

```svelte
<script>
import resizeObserver from 'svelte-use-resize-observer'
</script>

<div use:resizeObserver on:resize={() => console.log('do something on resize')}>
   <p>Some content here...</p>
</div>
```
