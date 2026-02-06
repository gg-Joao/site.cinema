<template>
  <div class="app">
    <nav class="navbar">
      <h1>🎬 História do Cinema</h1>
      <ul class="nav-links">
        <li><router-link to="/" :class="{ ativo: $route.path === '/' }">Início</router-link></li>
        <li><router-link to="/nascimento" :class="{ ativo: $route.path === '/nascimento' }">Nascimento</router-link></li>
        <li><router-link to="/ouro" :class="{ ativo: $route.path === '/ouro' }">Era de Ouro</router-link></li>
        <li><router-link to="/moderno" :class="{ ativo: $route.path === '/moderno' }">Moderno</router-link></li>
      </ul>
    </nav>

    <main class="conteudo">
      <router-view />
    </main>

    <footer class="rodape">
      <p>&copy; 2024 Projeto História do Cinema. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
</script>

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
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #ff6b6b;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.navbar h1 {
  font-size: 1.8rem;
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
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background 0.3s;
}

.nav-links a:hover {
  background: #ff6b6b;
  color: #0d0d0d;
}

.nav-links a.ativo {
  background: #ff6b6b;
  color: #0d0d0d;
  font-weight: bold;
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
  padding: 2rem;
  text-align: center;
  border-top: 3px solid #ff6b6b;
  margin-top: auto;
  color: #a0a0a0;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.8rem;
  }

  .navbar h1 {
    font-size: 1.4rem;
  }
}
</style>