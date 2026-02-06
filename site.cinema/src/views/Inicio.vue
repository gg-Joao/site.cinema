<template>
  <div class="pagina">
    <section class="heroi">
      <h1>Bem-vindo à História do Cinema</h1>
      <p>Explore o cinema mundial e a história do cinema brasileiro através de 3 tópicos principais</p>
    </section>

    <section class="cards">
      <div class="card">
        <h2>🎞️ O Nascimento</h2>
        <p>A história do cinema começou em 1895. Conheça o nascimento dessa arte e os primeiros passos do cinema brasileiro.</p>
        <router-link to="/nascimento" class="btn">Descobrir</router-link>
      </div>
      <div class="card">
        <h2>⭐ Era de Ouro</h2>
        <p>De 1927 a 1960, Hollywood dominou o mundo. Explore também o Cinema Novo brasileiro que revolucionou o país.</p>
        <router-link to="/ouro" class="btn">Descobrir</router-link>
      </div>
      <div class="card">
        <h2>🚀 Cinema Moderno</h2>
        <p>Do digital ao streaming. Descubra como o Brasil continua marcando presença no cinema moderno internacional.</p>
        <router-link to="/moderno" class="btn">Descobrir</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.heroi {
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%);
  border-radius: 8px;
  margin-bottom: 3rem;
  color: #0d0d0d;
}

.heroi h1 {
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
}

.heroi p {
  font-size: 1.1rem;
  margin: 0;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.card {
  background: #2a2a2a;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #ff6b6b;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
}

.card h2 {
  color: #ff6b6b;
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.card p {
  color: #d0d0d0;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  flex-grow: 1;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: #ff6b6b;
  color: #0d0d0d;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: background 0.3s;
  text-align: center;
}

.btn:hover {
  background: #ff5252;
}

@media (max-width: 768px) {
  .heroi h1 {
    font-size: 1.8rem;
  }
}
</style>