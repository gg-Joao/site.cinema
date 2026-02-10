<template>
  <div class="topico">
    <div class="header">
      <h1>O Nascimento do Cinema (1895-1927)</h1>
      <p>Os primeiros passos de uma revolução visual</p>
    </div>

    <section class="intro">
      <h2>Como Tudo Comecou</h2>
      <p>
        O cinema nasceu em 28 de dezembro de 1895 quando os Irmãos Lumière apresentaram o cinematógrafo em Paris. Este aparelho podia capturar, copiar e projetar imagens em movimento. O primeiro filme, "L'Arrivee d'un train en gare de La Ciotat", tinha apenas 50 segundos e mostrava um trem chegando a uma estação. A plateia reagiu com espanto, alguns até assustados pensando que o trem sairia da tela.
      </p>
      <p>
        Este momento marca o início de uma arte que revolucionaria o entretenimento. O cinema mudo dependia de músicos ao vivo, cenários elaborados e atuações exageradas para transmitir emoções sem diálogos.
      </p>
    </section>

    <section class="grid">
      <div class="item">
        <h3>Filmes Mudos</h3>
        <p>Sem som sincronizado, os filmes dependiam da música ao vivo tocada por orquestras nos cinemas. O público lia cartões de texto entre as cenas para acompanhar a história.</p>
      </div>
      <div class="item">
        <h3>Preto e Branco</h3>
        <p>Toda a filmagem era em preto e branco. A ausencia de cor era compensada por uma fotografia expressiva com uso criativo de luz e sombra.</p>
      </div>
      <div class="item">
      <h3>Curtissima Duração</h3>
      <p>Filmes duravam entre 50 segundos e 20 minutos no máximo. Histórias complexas eram reduzidas a sequências visuais simples que pudessem ser compreendidas sem diálogos.</p>
      </div>
      <div class="item">
      <h3>Atuação Exagerada</h3>
      <p>Sem diálogos, os atores usavam gestos amplos e expressões faciais dramáticas para comunicar emoções. O público precisava ler claramente nos rostos o que sentiam.</p>
      </div>
    </section>

    <section>
      <h2>Filmes Mundiais Importantes</h2>
      <div class="filmes">
        <cartao-filme
          titulo="L'Arrivee d'un train en gare de La Ciotat"
          :ano="1896"
          descricao="Primeiro filme documentário. Uma cena de um trem chegando a estação causou pânico na plateia que pensava que o trem sairia da tela."
          diretor="Irmãos Lumière"
        />
        <cartao-filme
          titulo="Le Voyage dans la Lune"
          :ano="1902"
          descricao="Primeiro filme de ficção científica com efeitos especiais revolucionários e cenários elaborados de grande criatividade."
          diretor="Georges Melies"
        />
        <cartao-filme
          titulo="Nosferatu"
          :ano="1922"
          descricao="Filme de horror gótico que explorou técnicas de iluminação e cinematografia inovadoras para criar atmosfera perturbadora."
          diretor="F.W. Murnau"
        />
        <cartao-filme
          titulo="O Gabinete do Dr. Caligari"
          :ano="1920"
          descricao="Expressionismo alemão com cenários geométricos e distorcidos que criaram uma atmosfera psicológica e perturbadora."
          diretor="Robert Wiene"
        />
      </div>
    </section>

    <section class="brasil">
      <h2>Cinema Brasileiro no Nascimento</h2>
      <p>
        O cinema chegou ao Brasil em 1896, apenas um ano após sua criação. Os Irmãos Lumière enviaram operadores para registrar cenas do Rio de Janeiro. A cidade se tornou rapidamente o maior centro de exibição cinematográfica da América Latina, mostrando o cosmopolitanismo do Brasil no final do século XIX.
      </p>
      <div class="grid">
        <div class="item">
          <h3>Chegada Rapida do Cinema</h3>
          <p>Projecoes dos filmes dos Lumiere aconteceram no Rio de Janeiro logo apos seu lancamento europeu. A elite carioca tinha acesso a essa tecnologia de ponta.</p>
        </div>
        <div class="item">
          <h3>Primeiros Filmes</h3>
          <p>Em 1897, "Vista de Alegrete" é considerado o primeiro filme de longa metragem brasileiro com 15 minutos de duração. Eram principalmente documentários.</p>
        </div>
        <div class="item">
          <h3>Humberto Mauro</h3>
          <p>Nasceu em 1897 e se tornou o grande diretor do cinema mudo brasileiro. Considerado o pai do cinema brasileiro por sua contribuição fundamental.</p>
        </div>
        <div class="item">
          <h3>Centro de Exibicao</h3>
          <p>O Rio de Janeiro se tornou o maior centro de exibição cinematográfica da América Latina. Diversos cinemas foram construídos atraindo público de todas as classes.</p>
        </div>
      </div>
        <br>

      <h3 class="subti">Filmes Brasileiros Importantes</h3>
      <div class="filmes">
        <cartao-filme
          titulo="Santa Filha da Mãe"
          :ano="1921"
          descricao="Drama de grande sucesso do cinema mudo brasileiro que retratava histórias de personagens cariocas com muita dramaticidade."
          diretor="Ugo Falena"
        />
        <cartao-filme
          titulo="Fragmentos da Vida"
          :ano="1908"
          descricao="Documentário que registra cenas do cotidiano do Brasil no início do século XX mostrando a vida urbana do Rio."
          diretor="Desconhecido"
        />
        <cartao-filme
          titulo="O Cangaceiro"
          :ano="1953"
          descricao="Epica sobre bandidos do sertão nordestino que conquistou festivais europeus e levou cinema brasileiro ao mundo."
          diretor="Lima Barreto"
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
  border-left: 3px solid #5118ee;
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
