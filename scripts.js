const imgBiscoito = document.querySelector("#img_biscoito_fechado");
const motivacional = document.querySelector("#fraseMotivacional");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

imgBiscoito.addEventListener("click", handleClick);

let frase;

function handleClick() {
  const dataAtual = new Date();
  let nomesDosDias = [
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
  ];
  console.log();
  const random = Math.round(Math.random() * 50);
  console.log(random);
  var frasesMotivacionais = [
    "Acredite que você pode e você está no meio do caminho.",
    "Seja a mudança que você deseja ver no mundo. - Mahatma Gandhi",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Não espere por circunstâncias ideais. Crie-as.",
    "A jornada de mil milhas começa com um único passo.",
    "A persistência realiza o impossível.",
    "Quanto mais você sonhar, mais longe você irá.",
    "A motivação nos impulsiona, mas hábitos nos mantêm no caminho certo.",
    "Você é mais forte do que pensa.",
    "O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "A única maneira de fazer um ótimo trabalho é amar o que você faz. - Steve Jobs",
    "Não tenha medo de desistir do bom para perseguir o ótimo. - John D. Rockefeller",
    "O que você obtém alcançando seus objetivos não é tão importante quanto o que você se torna ao alcançá-los.",
    "O único limite para nossas realizações de amanhã são as nossas dúvidas de hoje.",
    "A vida é 10% do que acontece conosco e 90% como reagimos a isso.",
    "O sucesso não consiste em não errar, mas em não desistir após cada erro.",
    "Nada no mundo pode substituir a persistência. O talento não pode; nada é mais comum do que homens mal sucedidos com talento. A genialidade não pode; o mundo está cheio de educados fracassados. A educação não pode; o mundo está cheio de analfabetos bem-sucedidos.",
    "A única pessoa que você está destinado a se tornar é a pessoa que você decide ser.",
    "Seja a mudança que você deseja ver no mundo. - Mahatma Gandhi",
    "Não é o que acontece com você, mas como você reage que importa.",
    "Você nunca é velho demais para definir outra meta ou sonhar um novo sonho. - C.S. Lewis",
    "O que você faz hoje pode melhorar todos os amanhãs.",
    "Acredite em si mesmo e tudo será possível.",
    "Sua única limitação é você mesmo.",
    "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta. - Winston Churchill",
    "A vida é uma jornada que deve ser viajada sem pressa, aproveitando cada momento.",
    "Não se preocupe em ser melhor do que os outros. Foque em ser melhor do que você mesmo.",
    "A chave para o sucesso é começar antes que você esteja pronto.",
    "Não deixe que o que você não pode fazer atrapalhe o que você pode fazer.",
    "Se você quer alcançar grandes coisas, você deve primeiro acreditar que é capaz.",
    "O segredo do sucesso é a constância do propósito. - Benjamin Disraeli",
    "Nunca é tarde demais para ser o que você poderia ter sido. - George Eliot",
    "O que você pensa, você se torna. O que você sente, você atrai. O que você imagina, você cria.",
    "O sucesso é o resultado de pequenos esforços repetidos dia após dia.",
    "O maior prazer na vida é fazer o que as pessoas dizem que você não é capaz de fazer.",
    "A jornada é tão importante quanto o destino.",
    "A felicidade é uma jornada, não um destino.",
    "Você é capaz de mais do que imagina.",
    "Não pare até se orgulhar.",
    "A disciplina é a ponte entre metas e realizações.",
    "O primeiro passo em direção ao sucesso é dado quando você se recusa a ser um prisioneiro do ambiente em que se encontra.",
    "A força não vem do corpo. Vem da vontade.",
    "O único modo de fazer um excelente trabalho é amar o que você faz. - Steve Jobs",
    "Não espere. O tempo nunca será o ideal.",
    "Faça algo hoje que seu futuro agradecerá.",
    "O sucesso não é para os preguiçosos.",
    "Quando pensar em desistir, lembre-se do motivo pelo qual começou.",
    "A dor que você sente hoje será a força que você sentirá amanhã.",
    "Você não pode mudar o vento, mas pode ajustar as velas.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Aja como se o que você faz fizesse diferença. Isso faz.",
    "O verdadeiro segredo do sucesso é o entusiasmo.",
    "Acredite nos seus sonhos e eles se tornarão realidade.",
    "A força não vem da capacidade física. Ela vem de uma vontade indomável.",
    "O sucesso não é para os que têm sorte, mas para os que têm coragem para correr atrás.",
    "Só é derrotado quem desiste de lutar.",
    "O caminho para o sucesso é feito de pequenos passos, não de grandes saltos.",
    "Nunca é tarde demais para ser o que você poderia ter sido.",
    "O sucesso é construído sobre a pedra angular chamada perseverança.",
    "A vitória é reservada para aqueles que estão dispostos a pagar o preço.",
    "Você não pode vencer todas as batalhas, mas pode aprender com todas elas.",
    "A persistência é o caminho do êxito.",
    "A única limitação que você tem é aquela que você coloca em si mesmo.",
    "O fracasso é a oportunidade de começar de novo, desta vez de maneira mais inteligente.",
    "O verdadeiro herói é aquele que conquista seus próprios demônios.",
    "Se você quer algo que nunca teve, então precisa fazer algo que nunca fez.",
    "Você é mais corajoso do que acredita, mais forte do que parece e mais inteligente do que pensa.",
    "Não são os anos em sua vida que contam. É a vida em seus anos.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Cada novo dia é uma nova oportunidade para melhorar.",
    "Grandes mentes discutem ideias; mentes medianas discutem eventos; mentes pequenas discutem pessoas",
  ];

  motivacional.innerHTML = frasesMotivacionais[random];
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
const btnTry = document.querySelector("#reset");
btnTry.addEventListener("click", () => {
  window.location.reload();
});
