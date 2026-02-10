<template>
  <div class="topico">
    <div class="header">
      <h1>O Cinema Moderno (1960-Presente)</h1>
      <p>Inovação, tecnologia e novas narrativas</p>
    </div>

    <section class="intro">
      <h2>A Revolução Continua</h2>
      <p>
        A partir de 1960, o cinema experimental e de autor ganhou força ao redor do mundo. Cineastas como Jean-Luc Godard, François Truffaut e Federico Fellini desafiaram as convenções estabelecidas. Eles criavam filmes com mensagens políticas e narrativas revolucionárias.
      </p>
      <p>
        A tecnologia digital revolucionou produção, efeitos e distribuição a partir dos anos 1990. Streaming mudou dramaticamente como as pessoas assistem filmes.
        O cinema hoje é muito diferente daquele do século XX, mas continua sendo uma forma poderosa de contar histórias.
      </p>
    </section>

    <section class="grid">
      <div class="item">
        <h3>Cinema de Autor</h3>
        <p>Cineastas independentes exploram narrativas pessoais. Filmes não precisam seguir fórmulas. O cinema se torna veículo para visão do diretor.</p>
      </div>
      <div class="item">
        <h3>Efeitos Digitais</h3>
        <p>CGI e animação 3D transformam possibilidades criativas. Mundos completamente imaginários podem ser criados. Cenas impossíveis se tornam realidade digital.</p>
      </div>
      <div class="item">
        <h3>Era do Streaming</h3>
        <p>Netflix, Amazon Prime e Disney+ mudam distribuição. Filmes não precisam passar por cinemas. O público tem acesso instantâneo a milhares de títulos.</p>
      </div>
      <div class="item">
        <h3>Cinema Global</h3>
        <p>Filmes de diversos países ganham visibilidade. Cineastas conseguem financiamento para suas obras. Não há mais monopólio de Hollywood.</p>
      </div>
    </section>

    <section>
      <h2>Marcos do Cinema Moderno</h2>
      <div class="filmes">
        <cartao-filme
          titulo="2001: Uma Odisseia no Espaço"
          :ano="1968"
          descricao="Stanley Kubrick cria ficção científica que redefiniu o gênero com efeitos revolucionários e questiona a humanidade."
          diretor="Stanley Kubrick"
        />
        <cartao-filme
          titulo="Pulp Fiction"
          :ano="1994"
          descricao="Tarantino revoluciona narrativa não-linear no cinema independente. Um fenômeno cultural que redefiniu o cinema."
          diretor="Quentin Tarantino"
        />
        <cartao-filme
          titulo="Matrix"
          :ano="1999"
          descricao="Revolução visual com efeitos bullet-time. Precursor do cinema digital moderno que influenciou gerações de cineastas."
          diretor="Wachowskis"
        />
        <cartao-filme
          titulo="Avatar"
          :ano="2009"
          descricao="James Cameron revoluciona cinema 3D com captura de movimento e mundos virtuais imersivos de grande criatividade."
          diretor="James Cameron"
        />
      </div>
    </section>

    <section class="brasil">
      <h2>O Cinema Novo Revoluciona o Brasil</h2>
      <p>
        Nos anos 60 surge o Cinema Novo, movimento revolucionário brasileiro. Diretores como Glauber Rocha, Ruy Guerra e Nelson Pereira dos Santos criam filmes de baixo orçamento com grande impacto artístico. Eles rejeitam estúdios, usam câmeras portáteis, luz natural e atores desconhecidos. Seus filmes transmitem mensagens políticas fortes sobre a realidade social brasileira.
      </p>
      <div class="grid">
        <div class="item">
          <h3>Revolução Estética</h3>
          <p>Rejeita o glamour de Hollywood em favor da autenticidade. Usa preto e branco. Câmeras handheld criam urgência e realismo.</p>
        </div>
        <div class="item">
          <h3>Mensagem Política</h3>
          <p>Filmes exploram realidade social: pobreza, seca, violência urbana. Cinema como instrumento de mudança social.</p>
        </div>
        <div class="item">
          <h3>Influência Internacional</h3>
          <p>Influenciou cineastas europeus e americanos. Festivais celebraram como inovações artísticas importantes.</p>
        </div>
        <div class="item">
          <h3>Legado Permanente</h3>
          <p>Cineastas contemporâneos continuam a herança. Filmes como "Cidade de Deus" descendem intelectualmente do Cinema Novo.</p>
        </div>
      </div>

      <h3 class="subti">Filmes Brasileiros Importantes</h3>
      <div class="filmes">
        <cartao-filme
          titulo="Deus e o Diabo na Terra do Sol"
          :ano="1964"
          descricao="Glauber Rocha revoluciona com linguagem visual poética e política engajada no sertão nordestino."
          diretor="Glauber Rocha"
        />
        <cartao-filme
          titulo="Vidas Secas"
          :ano="1963"
          descricao="Nelson Pereira dos Santos cria prosa visual sobre resistência no sertão adaptando Graciliano Ramos."
          diretor="Nelson Pereira dos Santos"
        />
        <cartao-filme
          titulo="Cidade de Deus"
          :ano="2002"
          descricao="Fernando Meirelles leva cinema brasileiro para o mundo com drama urbano sobre favelas cariocas."
          diretor="Fernando Meirelles"
        />
      </div>
    </section>

    <router-link to="/" class="voltar">Voltar para Início</router-link>
  </div>
</template>

<script setup>
import CartaoFilme from '../components/CartaoFilme.vue'
</script>

<style scoped>
.topico {
  color: #f0f0f0;
}

.header {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%);
  border-radius: 6px;
  color: #0d0d0d;
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
}

.header p {
  margin: 0;
}

section {
  background: #2a2a2a;
  padding: 1.5rem;
  border-radius: 6px;
  border-left: 3px solid #ff6b6b;
  margin-bottom: 2rem;
}

h2 {
  color: #ff6b6b;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  margin-top: 0;
}

h3 {
  color: #ff6b6b;
  font-size: 1.1rem;
  margin: 0 0 0.6rem 0;
}

.subti {
  margin-top: 1.5rem;
}

p {
  line-height: 1.6;
  color: #d0d0d0;
  margin-bottom: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.item {
  background: #1a1a1a;
  padding: 1rem;
  border-radius: 4px;
  border-left: 2px solid #ff6b6b;
}

.item h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
}

.item p {
  margin: 0;
  font-size: 0.9rem;
}

.filmes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.brasil {
  background: #2a2a4a !important;
  border-left: 3px solid #4ca3ff !important;
}

.brasil h2 {
  color: #4ca3ff;
}

.brasil .item {
  border-left: 2px solid #4ca3ff;
}

.brasil .item h3 {
  color: #4ca3ff;
}

.voltar {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: #ff6b6b;
  color: #0d0d0d;
  text-decoration: none;
  border-radius: 3px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 1rem;
}

.voltar:hover {
  background: #ff5252;
}
</style>


.