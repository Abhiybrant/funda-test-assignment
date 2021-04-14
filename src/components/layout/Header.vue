<template>
  <header>
    <nav>
      <h1>
        <router-link to="/funda">Funda - find your dream property</router-link>
      </h1>
      <ul>
        <li>
          <!-- Other nav links can be added here
            <router-link to="/funda"></router-link>
          -->
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right bottom, #FBDB89, #F48982);
}

header a {
  text-decoration: none;
  font-size: 2rem;
  color: #ffffff;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #ffffff;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>