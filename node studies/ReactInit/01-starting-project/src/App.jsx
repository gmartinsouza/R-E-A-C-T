//é interessante colocar essa imagem em uma variável para ela não se perder no processo de buid
import reactImage from './assets/react-core-concepts.png';
import componentsImage from './assets/components.png';
import propsImage from './assets/config.png';
import stateImage from './assets/state-mgmt.png';
import {CORE_CONCEPTS} from './data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// {} quando se coloca uma expressão dentro de chaves, o React entende que é 
// uma expressão JavaScript e não um texto

function Header(){
  const descriprion = reactDescriptions[genRandomInt(reactDescriptions.length - 1)];
  return (
    <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {descriprion} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

// function CoreConcepts(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }

function CoreConcepts({image, title, description}) {
  // essas chaves são usadas para desestruturar o primeiro parametro da função 
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

// 

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul> 
            <CoreConcepts 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} /> // !!!!! ver melhor como essa bomba funciona
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
