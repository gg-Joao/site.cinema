<template>
  <div class="topico">
    <div class="header">
      <h1>⭐ A Era de Ouro de Hollywood (1927-1960)</h1>
      <p class="subtitulo">O auge da indústria cinematográfica - Mundo e o Cinema Novo Brasileiro</p>
    </div>

    <section class="introducao">
      <h2>O Advento do Som</h2>
      <p>
        Em 1927, "O Cantor de Jazz" revolucionou o cinema ao introduzir som sincronizado.
        Isso levou a uma transformação radical. Hollywood se tornou o centro da indústria mundial.
        Os estúdios como MGM, Paramount e Warner Bros dominavam a produção.
      </p>
    </section>

    <section class="caracteristicas">
      <h2>Características da Era</h2>
      <div class="grid">
        <div class="item">
          <h3>🎤 Som Sincronizado</h3>
          <p>Filmes com diálogos, música e efeitos sonoros integrados revolucionam a experiência.</p>
        </div>
        <div class="item">
          <h3>🌟 Star System</h3>
          <p>Surgem as mega-estrelas: Charlie Chaplin, Audrey Hepburn, Humphrey Bogart.</p>
        </div>
        <div class="item">
          <h3>🎭 Gêneros Definidos</h3>
          <p>Desenvolvimento de gêneros específicos: drama, comédia, western, musical.</p>
        </div>
        <div class="item">
          <h3>💰 Grande Orçamento</h3>
          <p>Produções em larga escala com cenários elaborados e dezenas de figurantes.</p>
        </div>
      </div>
    </section>

    <section class="filmes">
      <h2>Clássicos Inesquecíveis</h2>
      <div class="grade-filmes">
        <cartao-filme
          titulo="Cidadão Kane"
          :ano="1941"
          descricao="Obra-prima de Orson Welles. Revolucionou técnicas cinematográficas e narrativa não-linear."
          diretor="Orson Welles"
          pais="EUA"
          urlImagem="https://via.placeholder.com/250x350?text=Cidadao+Kane"
        />
        <cartao-filme
          titulo="Casablanca"
          :ano="1942"
          descricao="Drama romântico de guerra. Um dos filmes mais queridos de todos os tempos."
          diretor="Michael Curtiz"
          pais="EUA"
          urlImagem="https://via.placeholder.com/250x350?text=Casablanca"
        />
        <cartao-filme
          titulo="Um Tramway Chamado Desejo"
          :ano="1951"
          descricao="Drama intenso com Marlon Brando. Marca uma nova era de atuação realista."
          diretor="Elia Kazan"
          pais="EUA"
          urlImagem="https://via.placeholder.com/250x350?text=Tramway"
        />
        <cartao-filme
          titulo="Sementes da Ira"
          :ano="1940"
          descricao="Épico americano sobre a Grande Depressão. Direção magistral de John Ford."
          diretor="John Ford"
          pais="EUA"
          urlImagem="https://via.placeholder.com/250x350?text=Sementes"
        />
      </div>
    </section>

    <section class="brasil">
      <h2>🇧🇷 O Cinema Novo Brasileiro Nasce</h2>
      <p>
        Enquanto Hollywood reinava, o Brasil desenvolveu sua própria linguagem cinematográfica.
        A indústria brasileira era pequena, mas criativa. Na década de 1960, surge o Cinema Novo,
        movimento revolucionário que desafiaria as convenções do cinema mundial.
      </p>
      <div class="grid">
        <div class="item">
          <h3>🎬 Choro Chorominga (1957)</h3>
          <p>Uma das primeiras comédias brasileiras sonoras. Explora a realidade carioca com humor.</p>
        </div>
        <div class="item">
          <h3>🎭 Estação Central (1950)</h3>
          <p>De Cecília Amado. Retrata a vida no Brasil com sensibilidade e realismo poético.</p>
        </div>
        <div class="item">
          <h3>📽️ O Cangaceiro (1953)</h3>
          <p>Grande sucesso internacional. Lima Barreto cria épica sobre bandidos do sertão nordestino.</p>
        </div>
        <div class="item">
          <h3>🌟 Nasce a Chanchada</h3>
          <p>Gênero musical brasileiro. Simples, alegre e popular. Antecessor do Cinema Novo.</p>
        </div>
      </div>

      <h3 style="color: #4ca3ff; margin-top: 2rem;">Pioneiros do Cinema Brasileiro</h3>
      <div class="grade-filmes">
        <cartao-filme
          titulo="O Cangaceiro"
          :ano="1953"
          descricao="Épica sobre cangaceiros do sertão. Grande sucesso que levou o cinema brasileiro ao mundo."
          diretor="Lima Barreto"
          pais="Brasil"
          urlImagem="https://via.placeholder.com/250x350?text=Cangaceiro"
        />
        <cartao-filme
          titulo="Sete Homens de Ouro"
          :ano="1951"
          descricao="Comédia que retrata a diversidade da sociedade brasileira com humor e criatividade."
          diretor="Diretor Desconhecido"
          pais="Brasil"
          urlImagem="https://via.placeholder.com/250x350?text=Sete+Homens"
        />
        <cartao-filme
          titulo="São Jerônimo"
          :ano="1950"
          descricao="Drama que explora a realidade brasileira com uma visão poética e crítica."
          diretor="Diretor Desconhecido"
          pais="Brasil"
          urlImagem="https://via.placeholder.com/250x350?text=Sao+Jeronimo"
        />
      </div>

      <p style="margin-top: 2rem; color: #d0d0d0;">
        <strong>Contexto:</strong> A indústria brasileira ainda era pequena e vulnerável à concorrência estrangeira.
        Mas essa era era seminal para o que viria: o Cinema Novo dos anos 60, que revolucionaria o Brasil 
        e influenciaria cineastas ao redor do mundo. Diretores como Glauber Rocha e Ruy Guerra estavam prestes a mudar tudo.
      </p>
    </section>

    <section class="impacto">
      <h2>Impacto Cultural</h2>
      <p>
        A Era de Ouro criou ícones culturais que ainda influenciam o cinema hoje.
        O "star system" fez de atores e atrizes celebridades internacionais.
        No Brasil, o cinema começava a encontrar sua voz própria, preparando o terreno para uma revolução.
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