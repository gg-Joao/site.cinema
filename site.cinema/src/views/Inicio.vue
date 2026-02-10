<template>
  <div class="pagina">
    <section class="inicio">
      <h1>História do Cinema</h1>
      <p>Explore três períodos revolucionários do cinema mundial e descubra o importante papel do Brasil nessa história.</p>
    </section>

    <div class="cards">
      <div class="card">
        <h2>Nascimento (1895-1927)</h2>
        <p>
          Começa tudo em 1895 com os Irmãos Lumière. O cinema mudo revoluciona o entretenimento. 
          No Brasil, o Rio de Janeiro se torna o maior centro de exibição da América Latina.
        </p>
        <router-link to="/nascimento" class="btn">Explorar</router-link>
      </div>
      <div class="card">
        <h2>Era de Ouro (1927-1960)</h2>
        <p>
          Som sincronizado chega em 1927. Hollywood domina o mundo. 
          Brasil desenvolve sua linguagem cinematográfica preparando a revolução que viria.
        </p>
        <router-link to="/ouro" class="btn">Explorar</router-link>
      </div>
      <div class="card">
        <h2>Cinema Moderno (1960-Presente)</h2>
        <p>
          Cinema Novo eclodiu no Brasil como movimento revolucionário. 
          Hoje cineastas brasileiros conquistam reconhecimento internacional.
        </p>
        <router-link to="/moderno" class="btn">Explorar</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 2.5rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%);
  border-radius: 6px;
  margin-bottom: 2.5rem;
  color: #0d0d0d;
}

.inicio h1 {
  font-size: 2.2rem;
  margin: 0 0 0.8rem 0;
}

.inicio p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.card {
  background: #2a2a2a;
  padding: 1.5rem;
  border-radius: 6px;
  border-left: 3px solid #ff6b6b;
  display: flex;
  flex-direction: column;
}

.card h2 {
  color: #ff6b6b;
  margin: 0 0 0.8rem 0;
  font-size: 1.3rem;
}

.card p {
  color: #d0d0d0;
  margin: 0 0 1.2rem 0;
  line-height: 1.5;
  flex-grow: 1;
}

.button {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: #ff6b6b;
  color: #0d0d0d;
  text-decoration: none;
  border-radius: 3px;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
}

.button:hover {
  background: #ff5252;
}


</style>