<script>
  export let data;
</script>

<div>
  <nav style="display: flex; justify-content: space-between; padding: 1rem;">
    <ul style="margin-left: 20px;">
      <li>
        <strong><a href="/" style="font-size: 50px;">SHORTY</a></strong>
      </li>
    </ul>
    <ul style="display: flex; align-items: center; gap: 1rem; margin-left: auto;">
      {#if !data.user}
        <li>
          <a href="/auth/login"> <button class="outline">Login</button></a>
        </li>
        <li>
          <a href="/auth/register"> <button>Register</button></a>
        </li>
      {:else}
        <li style="display: flex; align-items: center; gap: 1rem;">
          <a href="#" aria-haspopup="listbox">
            <img
              src="https://api.dicebear.com/9.x/thumbs/svg?radius=50&seed={data.user.name}"
              alt="User Avatar"
              width="80"
            />
          </a>
          <div>
            <button type="submit" class="secondary">Logout</button>
          </div>
          <div>
            <span>Logged in as <strong>{data.user.name}</strong></span>
            <br />
            <small>{data.user.email}</small>
          </div>
        </li>
      {/if}
    </ul>
  </nav>
  <main class="container">
    <slot />
  </main>
</div>

<style>
  /* Responsive adjustments */
  nav ul {
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  /* Adjust layout for wider screens */
  @media (min-width: 768px) {
    nav {
      padding: 2rem 5rem;
    }

    ul {
      margin-left: auto;
    }

    /* Ensure the content doesn't stretch too wide */
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .main-container {
      padding: 1rem;
    }
  }

  /* For mobile views */
  @media (max-width: 767px) {
    nav {
      flex-direction: column;
      align-items: flex-start;
    }

    .container {
      padding: 1rem;
    }
  }
</style>
