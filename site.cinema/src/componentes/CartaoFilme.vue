<template>
  <div class="cartao-filme">
    <img :src="urlImagem" :alt="titulo" class="cartao-imagem" />
    <div class="cartao-conteudo">
      <h3>{{ titulo }}</h3>
      <p v-if="ano" class="cartao-ano">{{ ano }}</p>
      <p class="cartao-descricao">{{ descricao }}</p>
      <div v-if="diretor || pais" class="cartao-info">
        <span v-if="diretor"><strong>Diretor:</strong> {{ diretor }}</span>
        <span v-if="pais"><strong>País:</strong> {{ pais }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  titulo: { type: String, required: true },
  ano: { type: Number, default: null },
  descricao: { type: String, required: true },
  diretor: { type: String, default: null },
  pais: { type: String, default: null },
  urlImagem: { type: String, default: 'https://via.placeholder.com/250x350?text=Cinema' }
})
</script>

<style scoped>
.cartao-filme {
  background: #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cartao-filme:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
}

.cartao-imagem {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.cartao-conteudo {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.cartao-conteudo h3 {
  font-size: 1.3rem;
  color: #ff6b6b;
  margin: 0 0 0.5rem 0;
}

.cartao-ano {
  color: #b0b0b0;
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0 0 0.8rem 0;
}

.cartao-descricao {
  color: #d0d0d0;
  font-size: 0.95rem;
  line-height: 1.5;
  flex-grow: 1;
  margin: 0 0 1rem 0;
}

.cartao-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-top: 1px solid #404040;
  padding-top: 1rem;
  font-size: 0.85rem;
  color: #a0a0a0;
}
</style>
