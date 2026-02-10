<template>
  <div class="cartao">
    <div class="cartao-conteudo">
      <h3>{{ titulo }}</h3>
      <p v-if="ano" class="ano">{{ ano }}</p>
      <p class="descricao">{{ descricao }}</p>
      <div v-if="diretor" class="info">
        <span><strong>Diretor:</strong> {{ diretor }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  titulo: { type: String, required: true },
  ano: { type: Number, default: null },
  descricao: { type: String, required: true },
  diretor: { type: String, default: null }
})
</script>

<style scoped>
.cartao {
  background: #2a2a2a;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cartao-conteudo {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.cartao-conteudo h3 {
  font-size: 1.1rem;
  color: #ff6b6b;
  margin: 0 0 0.4rem 0;
}

.ano {
  color: #999;
  font-size: 0.85rem;
  margin: 0 0 0.6rem 0;
}

.descricao {
  color: #d0d0d0;
  font-size: 0.9rem;
  line-height: 1.5;
  flex-grow: 1;
  margin: 0 0 0.8rem 0;
}

.info {
  color: #999;
  font-size: 0.8rem;
  border-top: 1px solid #404040;
  padding-top: 0.8rem;
}
</style>
