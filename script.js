const btn = document.getElementById('botao');
const showPokemon = document.querySelector('.showPokemon');
const pokeEntrada = document.querySelector('input');
const pokemonNome = document.querySelector('.pokemonNome');
const pokemonTamanho = document.querySelector('.pokemonTamanho');
const pokemonPeso = document.querySelector('.pokemonPeso');
let number;

function show() {
  const pokemon = fetch(
    'https://pokeapi.co/api/v2/pokemon/' + pokeEntrada.value,
  )
    .then((r) => r.json())
    .then((body) => {
      pokemonNome.innerText = body.forms[0].name + ' #' + body.id;
      pokemonPeso.innerText = 'Weight: ' + body.weight;
      pokemonTamanho.innerText = 'Height: ' + body.height;
      number = body.forms[0].url.slice(39);
      number = number.replace('/', '');
      console.log(body.weight);

      const pokeimg = fetch(
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
          number +
          '.png',
      )
        .then((s) => s.blob())
        .then((body2) => {
          const blobUrl = URL.createObjectURL(body2);
          const imagemPokemon = document.querySelector('.showPokemon');
          imagemPokemon.src = blobUrl;
          console.log(body2);
        });
    })
    .catch(function (error) {
      pokemonNome.innerText = 'Pokemon nao indentificado';
    });
  console.log(pokemon);
}
btn.addEventListener('click', show);

function tecla(e) {
  if (e.keyCode === 13) {
    show();
  }
}
