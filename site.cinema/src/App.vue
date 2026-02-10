<template>
  <div class="app">
    <nav class="navbar">
      <h1>Site.cinema</h1>
      <ul class="nav-links">
        <li><router-link to="/" :class="{ ativo: $route.path === '/' }">Início</router-link></li>
        <li><router-link to="/nascimento" :class="{ ativo: $route.path === '/nascimento' }">Nascimento</router-link></li>
        <li><router-link to="/ouro" :class="{ ativo: $route.path === '/ouro' }">Era de Ouro</router-link></li>
        <li><router-link to="/moderno" :class="{ ativo: $route.path === '/moderno' }">Moderno</router-link></li>
        <li><router-link to="/curiosidades" :class="{ ativo: $route.path === '/curiosidades' }">Curiosidades</router-link></li>
      </ul>
    </nav>
    <main class="conteudo">
      <router-view />
    </main>
    <footer class="rodape">
      
      <p>2026 eu mesmo</p>
      
      <img src="./views/img/absolute.cinema.png" alt="Absolute Cinema" width="130"/>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #1a1a1a;
  color: #f0f0f0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
</style>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  background: #0d0d0d;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ff6b6b;
}

.navbar h1 {
  font-size: 1.6rem;
  color: #ff6b6b;
  margin: 0;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

.nav-links a {
  color: #f0f0f0;
  text-decoration: none;
  padding: 0.5rem 0.8rem;
  border-radius: 3px;
  font-size: 0.9rem;
}

.nav-links a:hover {
  background: #ff6b6b;
  color: #0d0d0d;
}

.nav-links a.ativo {
  background: #ff6b6b;
  color: #0d0d0d;
  font-weight: 600;
}

.conteudo {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.rodape {
  background: #0d0d0d;
  padding: 1.5rem;
  text-align: center;
  border-top: 2px solid #ff6b6b;
  color: #888;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 0.8rem;
  }
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.8rem;
  }
}
</style>

.