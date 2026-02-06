<template>
  <div class="topico">
    <div class="header">
      <h1>🎞️ O Nascimento do Cinema (1895-1927)</h1>
      <p class="subtitulo">Os primeiros passos de uma arte revolucionária - Mundo e Brasil</p>
    </div>

    <section class="introducao">
      <h2>Como Tudo Começou</h2>
      <p>
        O cinema nasceu em 28 de dezembro de 1895 quando os irmãos Lumière apresentaram o cinematógrafo em Paris.
        Este era um aparelho que podia capturar, copiar e projetar imagens em movimento. O primeiro filme, 
        "L'Arrivée d'un train en gare de La Ciotat" (A Chegada de um Trem à Estação de La Ciotat), tinha apenas 50 segundos.
      </p>
    </section>

    <section class="caracteristicas">
      <h2>Características da Era</h2>
      <div class="grid">
        <div class="item">
          <h3>🎬 Filmes Mudos</h3>
          <p>Sem som sincronizado. A música ao vivo acompanhava as projeções em cinemas.</p>
        </div>
        <div class="item">
          <h3>⚫ Preto e Branco</h3>
          <p>Toda filmagem era em preto e branco. Cores eram coloridas manualmente.</p>
        </div>
        <div class="item">
          <h3>⏱️ Curta Duração</h3>
          <p>Filmes tinham entre 50 segundos a 20 minutos. Durações longas eram raras.</p>
        </div>
        <div class="item">
          <h3>🎭 Atuação Exagerada</h3>
          <p>Sem diálogos, atores usavam gestos amplos e expressão facial dramática.</p>
        </div>
      </div>
    </section>

    <section class="filmes">
      <h2>Filmes Mundiais Importantes</h2>
      <div class="grade-filmes">
        <cartao-filme
          titulo="L'Arrivée d'un train en gare de La Ciotat"
          :ano="1896"
          descricao="Primeiro filme documentário de todos os tempos. Um trem chegando à estação causou pânico na plateia."
          diretor="Irmãos Lumière"
          pais="França"
          urlImagem="https://via.placeholder.com/250x350?text=O+Trem"
        />
        <cartao-filme
          titulo="Le Voyage dans la Lune"
          :ano="1902"
          descricao="Primeiro filme de ficção científica. Uma viagem imaginária à lua com efeitos especiais revolucionários."
          diretor="Georges Méliès"
          pais="França"
          urlImagem="https://via.placeholder.com/250x350?text=Viagem+Lua"
        />
        <cartao-filme
          titulo="Nosferatu"
          :ano="1922"
          descricao="Filme de horror gótico que explorou técnicas de iluminação e cinematografia inovadoras."
          diretor="F.W. Murnau"
          pais="Alemanha"
          urlImagem="https://via.placeholder.com/250x350?text=Nosferatu"
        />
        <cartao-filme
          titulo="O Gabinete do Dr. Caligari"
          :ano="1920"
          descricao="Expressionismo alemão no cinema. Cenários geométricos e distorcidos criam atmosfera única."
          diretor="Robert Wiene"
          pais="Alemanha"
          urlImagem="https://via.placeholder.com/250x350?text=Caligari"
        />
      </div>
    </section>

    <section class="brasil">
      <h2>🇧🇷 O Cinema Brasileiro Nasce</h2>
      <p>
        O cinema chegou ao Brasil em 1896, apenas um ano após sua criação! Os irmãos Lumière enviaram operadores 
        para registrar cenas do Rio de Janeiro. As primeiras projeções públicas aconteceram na capital.
      </p>
      <div class="grid">
        <div class="item">
          <h3>📹 Primeiros Filmes</h3>
          <p>1897: "Vista de Alegrete" é considerado o primeiro filme de longa metragem brasileiro. Durava 15 minutos!</p>
        </div>
        <div class="item">
          <h3>🎥 Humberto Mauro (1897)</h3>
          <p>Nasce Humberto Mauro, que se tornaria o grande diretor do cinema mudo brasileiro e documentarista.</p>
        </div>
        <div class="item">
          <h3>🎭 Cinema Português</h3>
          <p>Brasil recebe influência do cinema português. Cinemas abrem nas cidades principais.</p>
        </div>
        <div class="item">
          <h3>🌍 Producção Local</h3>
          <p>Surgem produtoras locais que tentam competir com filmes europeus e americanos.</p>
        </div>
      </div>

      <h3 style="color: #ff6b6b; margin-top: 2rem;">Filmes Brasileiros da Era Muda</h3>
      <div class="grade-filmes">
        <cartao-filme
          titulo="O Cangaceiro"
          :ano="1953"
          descricao="Embora seja de 1953, representa o apogeu do cinema de aventura brasileiro dos anos 1920-1950."
          diretor="Lima Barreto"
          pais="Brasil"
          urlImagem="https://via.placeholder.com/250x350?text=Cangaceiro"
        />
        <cartao-filme
          titulo="Santa Filha da Mãe"
          :ano="1921"
          descricao="Drama de grande sucesso do cinema mudo brasileiro. Retratava histórias da cidade do Rio."
          diretor="Ugo Falena"
          pais="Brasil"
          urlImagem="https://via.placeholder.com/250x350?text=Santa"
        />
        <cartao-filme
          titulo="Fragmentos da Vida"
          :ano="1908"
          descricao="Documentário que registra cenas do cotidiano do Brasil no início do século XX."
          diretor="Diretor Desconhecido"
          pais="Brasil"
          urlImagem="https://via.placeholder.com/250x350?text=Fragmentos"
        />
      </div>

      <p style="margin-top: 2rem; color: #d0d0d0;">
        <strong>Curiosidade:</strong> No Brasil, diferente da Europa, a maior parte dos filmes exibidos era estrangeira.
        As produções locais eram limitadas e enfrentavam competição com o cinema europeu e americano.
        Apesar disso, cineastas brasileiros como Humberto Mauro criavam obras de valor artístico importante.
      </p>
    </section>

    <section class="impacto">
      <h2>Impacto na Sociedade</h2>
      <p>
        O cinema revolucionou o entretenimento. Pessoas de todas as classes sociais frequentavam cinemas.
        Surgem as primeiras estrelas do cinema, criando uma indústria do entretenimento de massa.
        No Brasil, o cinema se torna símbolo de modernidade nas cidades. O Rio de Janeiro era o maior 
        centro de exibição cinematográfica da América Latina.
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
