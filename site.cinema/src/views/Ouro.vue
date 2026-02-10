<template>
  <div class="topico">
    <div class="header">
      <h1>A Era de Ouro de Hollywood (1927-1960)</h1>
      <p>O auge da indústria cinematográfica mundial</p>
    </div>

    <section class="intro">
      <h2>O Advento do Som</h2>
      <p>
        Em 1927, o filme "O Cantor de Jazz" revolucionou o cinema ao introduzir som sincronizado. Esta inovação transformou radicalmente a arte cinematográfica. Atores precisavam ter vozes agradaveis. Muitos atores da era muda não conseguiram fazer a transição, enquanto novos talentos surgiram.
      </p>
      <p>
        Hollywood se consolidou como o centro absoluto da indústria cinematográfica mundial. Grandes estúdios como MGM, Paramount e Warner Bros dominavam a produção, estabelecendo um sistema de estrelato que ainda perdura. Os filmes de Hollywood se tornaram o modelo que o resto do mundo imitava.
      </p>
    </section>

    <section class="grid">
     
      <div class="item">
        <h3>Som Sincronizado</h3>
        <p>Filmes com diálogos, música e efeitos sonoros integrados revolucionaram a experiência. O som abriu possibilidades narrativas completamente novas.</p>
      </div>
      
      <div class="item">
        <h3>Star System</h3>
        <p>Surgiram mega-estrelas como Humphrey Bogart, Audrey Hepburn e Elizabeth Taylor. Os estúdios cultivavam cuidadosamente a imagem pública destas estrelas.</p>
      </div>
      
      <div class="item">
        <h3>Gêneros Definidos</h3>
        <p>Drama, comédia, musical, western e filme noir. Cada gênero tinha suas convenções e os estúdios criavam filmes em série dentro desses formatos.</p>
      </div>
      
      <div class="item">
        <h3>Grandes Orçamentos</h3>
        <p>Produções em larga escala com cenários elaborados, dezenas de figurantes e músicas originais. Os custos aumentaram dramaticamente assim como os lucros.</p>
      </div>
    </section>

    <section>
      <h2>Clássicos Inesquecíveis</h2>
      <div class="filmes">
        <cartao-filme
          titulo="Cidadão Kane"
          :ano="1941"
          descricao="Obra-prima de Orson Welles que revolucionou técnicas cinematográficas com uso criativo de profundidade de campo e narrativa não-linear."
          diretor="Orson Welles"
        />
        <cartao-filme
          titulo="Casablanca"
          :ano="1942"
          descricao="Drama romântico ambientado durante a Segunda Guerra Mundial. Um dos filmes mais queridos de todos os tempos com diálogos icônicos."
          diretor="Michael Curtiz"
        />
        <cartao-filme
          titulo="Um Bonde Chamado Desejo"
          :ano="1951"
          descricao="Drama intenso com Marlon Brando em atuação revolucionária que marcou uma nova era de realismo na atuação cinematográfica."
          diretor="Elia Kazan"
        />
        <cartao-filme
          titulo="As Vinhas da Ira"
          :ano="1940"
          descricao="Épico americano sobre a Grande Depressão mostrando a luta de uma família agrícola durante a pior crise econômica americana."
          diretor="John Ford"
        />
      </div>
    </section>

    <section class="brasil">
      <h2>O Cinema Novo Brasileiro Nasce</h2>
      <p>
        Enquanto Hollywood reinava no mundo, o Brasil desenvolvia sua própria linguagem cinematográfica. Na década de 1960 surgiria o Cinema Novo, movimento revolucionário que desafiaria as convenções de Hollywood e influenciaria cineastas ao redor do mundo.
      </p>
      <div class="grid">
        <div class="item">
          <h3>Produções Brasileiras</h3>
          <p>A indústria era menor do que a americana, mas havia produções locais. "O Cangaçeiro" foi um grande sucesso internacional.</p>
        </div>
        <div class="item">
          <h3>A Chanchada</h3>
          <p>Gênero musical brasileiro simples e alegre que misturava música, comédia e dança. Era uma resposta brasileira aos musicais americanos.</p>
        </div>
        <div class="item">
          <h3>Limitações Econômicas</h3>
          <p>A indústria enfrentava limitações significativas de capital e infraestrutura. Competia com filmes americanos bem financiados.</p>
        </div>
        <div class="item">
          <h3>Preparacao para Revolucao</h3>
          <p>Diretores como Glauber Rocha e Ruy Guerra estavam prestes a revolucionar o cinema com mensagem politica forte.</p>
        </div>
      </div>

      <h3 class="subti">Filmes Brasileiros Importantes</h3>
      <div class="filmes">
        <cartao-filme
          titulo="O Cangaceiro"
          :ano="1953"
          descricao="Epica sobre bandidos do sertão nordestino que conquistou festivais europeus e levou cinema brasileiro ao mundo."
          diretor="Lima Barreto"
        />
        <cartao-filme
          titulo="Sete Homens de Ouro"
          :ano="1951"
          descricao="Comédia que retrata a diversidade da sociedade brasileira com humor e criatividade na realidade urbana carioca."
          diretor="Diversos"
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