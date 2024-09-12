<script>
  import { fade } from "svelte/transition"
  import { getShortLink } from "$lib/utils"
  export let data, form
  let copied

  $: {
    if (copied) {
      setTimeout(() => (copied = false), 2000)
    }
  }

  const copy = (text)   => {
    navigator.clipboard.writeText(text)
    copied = true
  }

  const handleLinkClick = async (slug) => {
    // Assuming you have an API to record clicks
    await fetch(`/api/click/${slug}`, { method: 'POST' });
    // Then refetch or update `data.top10Links`
    data.top10Links = await getTopLinks();
  };
</script>



<article>
  <h1>Shorten Your Link</h1>
  <form action="?/createShortLink" method="post">
    <label for="url">
      Link
      <input
        type="url"
        name="url"
        id="url"
        value={form?.url || ""}
        placeholder="http://.."
        spellcheck="false"
        required
      />
    </label>

    {#if form?.shortLink}
      <button
        class="contrast"
        type="button"
        on:click={() => copy(form.shortLink)}
      >
        {#if copied}
          <span in:fade>📋 Copied to Clipboard!</span>
        {:else}
          <span in:fade>{form.shortLink}</span>
        {/if}
      </button>
    {/if}

    <button type="submit">✂️ Shorten</button>
  </form>
</article>

<article>
  <h1>Your Top 10 Links</h1>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Link</th>
        <th>Short Link</th>
        <th>Clicks</th>
      </tr>
    </thead>
    <tbody>
      {#each data.top10Links as link, i}
        <tr>
          <td>{i + 1}</td>
          <td>{link.url}</td>
          <td><a href={getShortLink(link.shortSlug)}>{link.shortSlug}</a></td>
          <td>{link.clicks}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</article>