<template>
  <div class="topico">
    <div class="header">
      <h1>🚀 O Cinema Moderno (1960-Presente)</h1>
      <p class="subtitulo">Inovação, tecnologia e novas narrativas - Brasil em foco</p>
    </div>

    <section class="introducao">
      <h2>A Revolução Continua</h2>
      <p>
        A partir de 1960, o cinema experimental e de autor ganhou força.
        Cineastas como Godard, Truffaut e Fellini desafiaram as convenções.
        A tecnologia digital revolucionou produção, efeitos e distribuição.
        Streaming mudou como as pessoas assistem filmes.
      </p>
    </section>

    <section class="caracteristicas">
      <h2>Características da Era</h2>
      <div class="grid">
        <div class="item">
          <h3>🎬 Cinema de Autor</h3>
          <p>Cineastas independentes exploram narrativas pessoais e experimentação.</p>
        </div>
        <div class="item">
          <h3>💻 Efeitos Digitais</h3>
          <p>CGI e animação 3D transformam possibilidades criativas e visuais.</p>
        </div>
        <div class="item">
          <h3>📱 Era do Streaming</h3>
          <p>Netflix, Amazon Prime e Disney+ mudam distribuição e consumo de cinema.</p>
        </div>
        <div class="item">
          <h3>🌍 Cinema Global</h3>
          <p>Filmes de diversos países e culturas ganham visibilidade internacional.</p>
        </div>
      </div>
    </section>

    <section class="filmes">
      <h2>Marcos do Cinema Moderno</h2>
      <div class="grade-filmes">
        <cartao-filme
          titulo="2001: Uma Odisseia no Espaço"
          :ano="1968"
          descricao="Stanley Kubrick cria ficção científica que redefiniu o gênero com efeitos revolucionários."
          diretor="Stanley Kubrick"
          pais="EUA/Reino Unido"
          urlImagem="https://via.placeholder.com/250x350?text=2001"
        />
        <cartao-filme
          titulo="Pulp Fiction"
          :ano="1994"
          descricao="Tarantino revoluciona narrativa não-linear no cinema independente. Fenômeno cultural."
          diretor="Quentin Tarantino"
          pais="EUA"
          urlImagem="https://via.placeholder.com/250x350?text=Pulp+Fiction"
        />
        <cartao-filme
          titulo="Matrix"
          :ano="1999"
          descricao="Revolução visual com efeitos bullet-time. Precursor do cinema digital moderno."
          diretor="Wachowskis"
          pais="EUA"
          urlImagem="https://via.placeholder.com/250x350?text=Matrix"
        />
        <cartao-filme
          titulo="Avatar"
          :ano="2009"
          descricao="James Cameron revoluciona cinema 3D com captura de movimento e mundos virtuais imersivos."
          diretor="James Cameron"
          pais="EUA"
          urlImagem="https://via.placeholder.com/250x350?text=Avatar"
        />
      </div>
    </section>

    <section class="brasil">
      <h2>🇧🇷 O Cinema Novo Revoluciona o Brasil</h2>
      <p>
        <strong>Anos 60: A Revolução</strong> - O Cinema Novo brasileiro surge como movimento revolucionário.
        Diretores como Glauber Rocha, Ruy Guerra e Nelson Pereira dos Santos criam filmes de baixo orçamento
        mas de grande impacto artístico. Eles rejeitam os estúdios e a estética cara. Usam câmeras portáteis,
        luz natural e atores desconhecidos. O resultado? Filmes politicamente engajados que revolucionam o cinema latino-americano.
      </p>
      <div class="grid">
        <div class="item">
          <h3>🎬 Deus e o Diabo na Terra do Sol (1964)</h3>
          <p>Glauber Rocha. Filme em preto e branco que explora religião, seca e revolta no sertão nordestino.</p>
        </div>
        <div class="item">
          <h3>🎭 Vidas Secas (1963)</h3>
          <p>Nelson Pereira dos Santos. Adaptação de Graciliano Ramos. Poesia visual do sertão brasileiro.</p>
        </div>
        <div class="item">
          <h3>🎥 Os Herdeiros (1970)</h3>
          <p>Carlos Diegues. Cinema Novo evolui. Explora conflito de gerações na sociedade brasileira.</p>
        </div>
        <div class="item">
          <h3>✨ A Ostra e a Pérola (1964)</h3>
          <p>Ruy Guerra. Fábula visual sobre ganância e natureza. Cinema poético e experimental.</p>
        </div>
      </div>

      <h3 style="color: #4ca3ff; margin-top: 2rem;">Brasil no Cinema Contemporâneo</h3>
      <div class="grid">
        <div class="item">
          <h3>🏆 Cidade de Deus (2002)</h3>
          <p>Fernando Meirelles. Drama urbano que internacionaliza a favela brasileira. Sucesso global.</p>
        </div>
        <div class="item">
          <h3>🌟 Tropa de Elite (2007)</h3>
          <p>José Padilha. Thriller policial que explora violência no Rio de Janeiro. Fenômeno de público.</p>
        </div>
        <div class="item">
          <h3>🎪 Carandiru (2003)</h3>
          <p>Hector Babenco. Drama humano dentro de presídio. Retrata vidas complexas e marginalizadas.</p>
        </div>
        <div class="item">
          <h3>💫 Aquarius (2016)</h3>
          <p>Kleber Mendonça Filho. Cinema moderno, experimental. Independência criativa brasileira.</p>
        </div>
      </div>

      <h3 style="color: #4ca3ff; margin-top: 2rem;">Mestres do Cinema Brasileiro Moderno</h3>
      <div class="grade-filmes">
        <cartao-filme
          titulo="Deus e o Diabo na Terra do Sol"
          :ano="1964"
          descricao="Glauber Rocha revoluciona o cinema brasileiro com linguagem visual poética e política engajada."
          diretor="Glauber Rocha"
          pais="Brasil"
          urlImagem="https://via.placeholder.com/250x350?text=Deus+Diabo"
        />
        <cartao-filme
          titulo="Cidade de Deus"
          :ano="2002"
          descricao="Fernando Meirelles leva o cinema brasileiro para o mundo. Drama urbano visceral e emocionante."
          diretor="Fernando Meirelles"
          pais="Brasil"
          urlImagem="https://via.placeholder.com/250x350?text=Cidade+Deus"
        />
        <cartao-filme
          titulo="Vidas Secas"
          :ano="1963"
          descricao="Nelson Pereira dos Santos cria prosa visual sobre resistência no sertão nordestino."
          diretor="Nelson Pereira dos Santos"
          pais="Brasil"
          urlImagem="https://via.placeholder.com/250x350?text=Vidas+Secas"
        />
      </div>

      <p style="margin-top: 2rem; color: #d0d0d0;">
        <strong>Contemporaneidade:</strong> Hoje, o Brasil continua produzindo cineastas de destaque internacional.
        Kleber Mendonça Filho, Anna Muylaert e outros diretores modernos exploram a realidade brasileira com liberdade criativa.
        O Cinema Novo marcou época, mas o cinema brasileiro contemporâneo segue inovando e conquistando prêmios internacionais.
        A diversidade de vozes, cores e histórias do Brasil continua alimentando uma cinematografia vibrante e original.
      </p>
    </section>

    <section class="impacto">
      <h2>Transformações Atuais</h2>
      <p>
        O cinema moderno é diverso, global e tecnologicamente avançado.
        Diretores de todo o mundo, incluindo brasileiros, têm suas vozes ouvidas.
        Streaming coexiste com cinema de sala, mudando hábitos de consumo.
        O Brasil se posiciona como produtor de conteúdo criativo e original.
        A IA começa a explorar criatividade artística.
        O futuro do cinema é incerto mas emocionante.
      </p>
    </section>

    <router-link to="/" class="voltar">← Voltar para Início</router-link>
  </div>
</template>

<script setup>
import CartaoFilme from '../componentes/CartaoFilme.vue'
</script>

<style scoped>
.topico {
  color: #f0f0f0;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%);
  border-radius: 8px;
  color: #0d0d0d;
}

.header h1 {
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
}

.subtitulo {
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.9;
}

section {
  margin-bottom: 3rem;
  background: #2a2a2a;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #ff6b6b;
}

h2 {
  color: #ff6b6b;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  margin-top: 0;
}

p {
  line-height: 1.8;
  color: #d0d0d0;
  margin-bottom: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.item {
  background: #1a1a1a;
  padding: 1.5rem;
  border-radius: 6px;
  border-left: 3px solid #ff6b6b;
}

.item h3 {
  color: #ff6b6b;
  margin: 0 0 0.8rem 0;
}

.item p {
  margin: 0;
  font-size: 0.95rem;
}

.grade-filmes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.brasil {
  background: #2a2a4a !important;
  border-left: 4px solid #4ca3ff !important;
}

.brasil h2 {
  color: #4ca3ff;
}

.brasil .item {
  border-left: 3px solid #4ca3ff;
}

.brasil .item h3 {
  color: #4ca3ff;
}

.voltar {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: #ff6b6b;
  color: #0d0d0d;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: background 0.3s;
  margin-top: 2rem;
}

.voltar:hover {
  background: #ff5252;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}
</style>