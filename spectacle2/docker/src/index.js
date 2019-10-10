import React, { Component } from 'react';

import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Notes,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  GoToAction
} from '../../src';
import preloader from '../../src/utils/preloader';
import createTheme from '../../src/themes/default';
import Interactive from '../assets/interactive';

require('normalize.css');

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.gif'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  docker: require('../assets/docker.png'),
  dockerstack: require('../assets/dockercontainerstack.png'),
  dockerarch: require('../assets/dockercontainerarch.png'),
  layers: require('../assets/layers.png'),
  container: require('../assets/container.png'),
  in_dev: require('../assets/worked_fine_in_dev.jpg'),
  orchestration: require('../assets/orchestration.gif'),

};

preloader(images);
const image_list_items = ["","","Url registry", "Généralement le repository","le nom de l'image","le Tag ou numéro de version de l'image"]
const theme = createTheme({
  primary: '#00abFF'
});

export default class Presentation extends Component {
  constructor() {
    super(...arguments);

    this.updateSteps = this.updateSteps.bind(this);
  }

  state = {
    steps: 0
  };

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }



  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        theme={theme}
        transitionDuration={500}
      >
        <Slide transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : '#000'
              };
            }
          ]}
          bgColor="black" >
        <Image src={images.docker.replace('/', '')} margin="0px auto 40px" />
        
          </Slide>

          <Slide
          transition={['slide']}
          bgImage={images.city.replace('/', '')}
          bgDarken={0.75}
        >
          <Appear fid="1">
            <Heading size={2} margin={45} caps fit textColor="primary">
            Qu’es-ce que Docker ? 
            </Heading>
          </Appear>
          <Appear fid="2">
          <BlockQuote>
            <Quote textColor="#fff">Une manière d’isoler une application dans un environnement système reproductible.</Quote> 
          </BlockQuote>
          
          </Appear>
          
        </Slide>
        <Slide transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : '#000'
              };
            }
          ]}
          bgColor="black" >
            <Heading>Docker in prod :</Heading>
        <Image src={images.in_dev.replace('/', '')} margin="0px auto 40px" />
        
          </Slide>
        <Slide
          transition={['slide']}
          bgImage={images.city.replace('/', '')}
          bgDarken={0.75}
        >
          <Appear fid="1">
            <Heading size={1} margin ={55} caps fit textColor="primary">
            Comment fonctionne docker ? 
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} margin ={55} caps fit textColor="tertiary">
            Docker crée une liaison entre votre kernel et un processus isolé.

            </Heading>
          </Appear>
       
        </Slide>
     
     
        
        <Slide
          onActive={slideIndex => {
            console.info(`Viewing slide index: ${slideIndex}.`); // eslint-disable-line no-console
          }}
          id="wait-what"
          
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : '#000'
              };
            }
          ]}
          bgColor="black"
        >
          <Image src={images.kat.replace('/', '')} margin="0px auto 40px" />
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Wait what?
          </Heading>
          <Notes>
            architecture
          </Notes>
        </Slide>
       
       
        <Slide transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : '#000'
              };
            }
          ]}
          bgColor="black" >
             <Heading size={2} margin={45} caps fit textColor="primary">
              Architecture Générale
            </Heading>
        <Image src={images.dockerstack.replace('/', '')} margin="0px auto 40px" />

        <Notes>
           Economie de ressources
        </Notes>
                  
        </Slide>
        <Slide transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : '#000'
              };
            }
          ]}
          bgColor="black" >
             <Heading size={2} margin={45} caps fit textColor="primary">
              Design Applicatif
            </Heading>
        <Image src={images.dockerarch.replace('/', '')} margin="0px auto 40px" />

          <Notes>
            Docker encourage un design applicatif structuré pour utilisation en microservices
          </Notes>
                  
        </Slide>


        <Slide transition={['fade']} textColor="tertiary">
            <Heading size={2} margin={45} caps fit bgColor="#fff" textColor="secondary">
              Autres avantages de docker ? 
            </Heading>
            <List>
              <Appear>
                <ListItem>Economies de ressources système</ListItem>
              </Appear>
              <Appear>
                <ListItem>Permet de l’implémentation « I A C »  </ListItem>
              </Appear>
              <Appear>
                <ListItem>Facilite la construction, le test et la distribution d’un application (builds et déploiements automatiques)</ListItem>
              </Appear>
              
            </List>
            <Notes> IAC = infrastructure as code </Notes>
          </Slide>
    
          <Slide transition={['fade']}  textColor="tertiary">
            <Heading bgColor="#000" size={2} margin={45} caps fit textColor="#fff">
             Qu'es-ce qu'une image Docker
            </Heading>
            <List>
              <Appear>
                <ListItem textColor="#000">Un package qui contient tous les éléments nécessaires pour démarrer un container.</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="#000">Elle est créée à partir d’un <b> DOCKERFILE </b></ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="#000">Les images sont téléchargées sur votre Host Docker lorsque vous faites <b> DOCKER PULL IMAGE </b></ListItem>
                
              </Appear>
              
            </List>
           
            <Notes> IAC = infrastructure as code </Notes>
          </Slide>




        <Slide>

        <Heading size={6} margin={5} caps fit textColor="secondary">
              Docker Image Onion Layers System
        </Heading>
         
        <Layout>
            
        
         <Fill>
              <Heading
                size={6}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
         Chaque commande d’un DOCKERFILE ajoute un LAYER à l’image.
         </Heading>
            </Fill>
            <Image size={2} src={images.layers.replace('/', '')} margin="0px auto 40px" />
            <Fill> 
              <Heading
                size={6}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Le container layer stocke les changements pendant l’exécution. Ce layer doit être considéré comme éphémère.

              </Heading>
            </Fill>
          </Layout>

      </Slide>
      <Slide transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : '#000'
              };
            }
          ]}
          bgColor="black" >
        <Image src={images.container.replace('/', '')} margin="0px auto 40px" />
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Vers la définition d'un Container
          </Heading>
          <Notes>
            architecture
          </Notes>
        </Slide>



        <Slide
          transition={['slide']}
          bgImage={images.city.replace('/', '')}
          bgDarken={0.75}
          getAnimStep={this.updateSteps}
        >
          
          <Appear fid="1">
            <Heading size={1} margin ={55} caps fit textColor="primary">
              Nommage des images (Généralités)
            </Heading>
          </Appear>
          <Layout>
            <Appear fid="2"><Text textColor="#fff" >registry.ctg.lu</Text></Appear><Appear fid="3"><Text textColor="primary"> /tina</Text></Appear><Appear fid="4"><Text textColor="#fff">/webapp</Text></Appear><Appear fid="5"><Text textColor="primary">:v3.1</Text></Appear>
          </Layout>
          <div>
            {this.state.steps > 1 ? <hr
            style={{
                color: "#fff",
                
                height: 5
            }}/> : ""}

          <Text size={5} caps  textColor="primary">
             {image_list_items[this.state.steps]}
          </Text>
        
          </div>
          
            
             
        </Slide>


        <Slide>
          <Heading size={2} textColor="secondary" margin="0.25em">
            Questions ?
          </Heading>
          
          
          <GoToAction
            render={goToSlide => (
              <select
                defaultValue=""
                style={{
                  background: '#fff',
                  color: '#000',
                  fontFamily: theme.print.fonts.primary,
                  fontSize: '1.1em'
                }}
                onChange={({ target }) => goToSlide(target.value)}
              >
                <option value="" disabled>
                  Choisir un slide
                </option>
                <option value={8}>Images 1/2 </option>
                <option value={9}>Images 2/2</option>
                <option value={10}>Containers </option>
                <option value={11}>Nommage des images</option>
              
              </select>
            )}
          />
          <Notes>Doesn't work in export view, though</Notes>
        </Slide>
      


        <Slide
          onActive={slideIndex => {
            console.info(`Viewing slide index: ${slideIndex}.`); // eslint-disable-line no-console
          }}
          
          
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : '#000'
              };
            }
          ]}
          bgColor="black"
        >
          <Image src={images.orchestration.replace('/', '')} margin="0px auto 40px" />
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Un peu d'orchestration
          </Heading>
          <Notes>
            architecture
          </Notes>
        </Slide>



        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading caps fit>
            2 notions importantes
          </Heading>
          <Layout>
            <Fill>
            
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Storage Volumes
              </Heading>
            </Fill>
            <Fill>
              <Heading
                size={4}
                caps
                textColor="white"
                bgColor="black"
                margin={10}
              >
                 Networking
              </Heading>
            </Fill>
          </Layout>
          <Notes>
            Use <code>layout</code> to <code>fill</code> or <code>fit</code>{' '}
            your content
          </Notes>
        </Slide>

        <Slide transition={['fade']}  textColor="tertiary">
            <Heading bgColor="#000" size={2} margin={45} caps fit textColor="#fff">
             Networking Docker (mode local)
            </Heading>
            <List>
              <Appear>
                <ListItem textColor="#000">Vous verrez souvent "EXPOSE" dans un Dockerfile. Attention, ca ne sert pas vraiment au docker engine, c'est plus un moyen de documenter le container qu'autre chose. </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="#000">Pour qu'un container soit exposé sur le host, il faut Publier son port avec l'instruction --publish (-p)</ListItem>
              </Appear>
              
      
            </List>
           
            <Notes> voir mode réseau ci après </Notes>
          </Slide>

          <Slide transition={['fade']}  textColor="tertiary" bgColor="black">
            <Heading bgColor="primary" size={2} margin={45} caps fit textColor="#fff">
             Networking Docker (Overlay et Autres modes)
            </Heading>
            <List>
              <Appear>
                <ListItem textColor="#fff">On peut lier plusieurs containers entre eux, soit par l'instruction link, soit en ajoutant un réseau</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="#fff">On peut toujours publier les ports des containers qui doivent etre exposés sur le Host</ListItem>
              </Appear>
              
      
            </List>
           
            <Notes>NB :Exposer un container le rattache au réseau Ingress de docker.</Notes>
          </Slide>

        
          <Slide transition={['fade']} bgColor="black" textColor="primary">
            <Heading bgColor="#000" size={2} margin={45} caps fit textColor="#fff">
             Volume Docker 
            </Heading>
            
            <BlockQuote>
            <Appear>
            <Quote>Un volume est un emplacement de stockage pour les données persistantes ou partagées des containers</Quote>
            </Appear>
          </BlockQuote>
              
            
          
              </Slide>

          <Slide transition={['fade']} bgColor="black" textColor="primary">
            <Heading bgColor="#000" size={2} margin={45} caps fit textColor="#fff">
              Eh ! j'ai perdu mes données !!
            </Heading>

          <List>

              <Appear>
                <ListItem textColor="#fff">Le RW layer des images sont considérés comme des volumes AUFS par docker, et sont sauvegardé dans l'instance du container. Attention, le container sera détruit par de simples opérations de maintenance, son contenu aussi.</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="#fff">Dans un contexte de développeur, pour sauvegarder l'état d'un container, on devra lui associer des 1 ou plusieurs volumes, mappés sur les chemins où l'on s'attend à ce que le code enregistre l'état de l'application.</ListItem>
              </Appear>
              
      
            </List>
           
            <Notes> voir mode réseau ci après </Notes>

            </Slide>

        <Slide transition={['fade']} bgColor="black" textColor="primary" >
        <Heading bgColor="#000" size={2} margin={45} caps fit textColor="#fff">
            Volume Docker 
        </Heading>
        
        <BlockQuote>
        <Appear>
          <Quote>Un volume est un emplacement de stockage pour les données persistantes ou partagées des containers</Quote>
          </Appear>
        </BlockQuote>
       
        </Slide>

         <Slide
          transition={['slide']}
          
          bgDarken={0.75}
          getAnimStep={this.updateSteps}
          
          
        >
          <Heading  textColor="secondary"
                bgColor="white">
            Executer un serveur web
          </Heading>
          <Appear>
            <Heading size={3} caps textColor="tertiary">
              <Code>docker run nginx -p 8888:80</Code>
            </Heading>
          </Appear>
          <Appear>
            <Heading size={5} caps textColor="secondary">
            Ouvrir un Browser et aller sur https://julien.tech:8888

            </Heading>
          </Appear>
          
          { this.state.steps >0 &&
          <Heading size={2} caps fit textColor="secondary">
            Etape: {this.state.steps}
          </Heading>
          }
        </Slide>


        <Slide transition={['fade']} bgColor="black" textColor="primary">
            <Heading bgColor="#000" size={2} margin={45} caps fit textColor="#fff">
             Cheat Sheet Docker pour ce cours :
            </Heading>

          <List>

              <Appear>
                <ListItem textColor="#fff">-i / --interactive :  entrer dans le container en mode interactif</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="#fff">-t / --tty</ListItem>

              </Appear>
              <Appear>
                <ListItem textColor="#fff">-p / --publish : mapper les ports du host vers le container</ListItem>

              </Appear>
              <Appear>
                <ListItem textColor="#fff">-v / --volume : mapper un folder : /mon/folder/local:folder/dans/container</ListItem>

              </Appear>

              <Appear>
                <ListItem textColor="#fff">-e / --env CLIENT=CTG: mapper une variable d’environnement</ListItem>
              </Appear>
      
            </List>
           

            </Slide>

         

      <Slide
         // transitionIn={['zoom', 'fade']}
          //transitionOut={['slide', 'fade']}
          bgColor="primary"
        >
        <Heading bgColor="#000" size={2} margin={25} caps fit textColor="#fff">
            Customiser l'image NGINX : Ajouter une page HTML a NGINX
        </Heading>
        
       <List>
           <Appear>
             <ListItem textColor="#fff">Créer le fichier Dockerfile avec le contenu suivant :</ListItem>
            
           </Appear>
           <Appear>
           <Code>FROM nginx:latest</Code>
          </Appear>  
          <br/>
          <Appear>
          <Code>COPY ./webpage/build /usr/share/nginx/html</Code>
           </Appear>    
           <Appear>
             <ListItem textColor="#fff">Construire l'image avec <Code>docker build -t myhttp .</Code></ListItem>
             
          
          </Appear>     
             <Appear>
             <ListItem textColor="#fff">Executer le container <Code>docker run –p 8889:80 myhttp</Code></ListItem>
             </Appear>
             <Appear>
              <ListItem textColor="#fff">Ouvrir un Browser et aller sur https://julien.tech:8889</ListItem>
             </Appear>
             <Appear>
              <ListItem textColor="#fff">Comparer avec le container précedent sur https://julien.tech:8888</ListItem>
             </Appear>
       </List>
       
       
          <Notes>
            <List>
              <ListItem>aller sur coder.julien.tech</ListItem>
              <ListItem>./webpage/build contient un build d'une appli react.</ListItem>
              <ListItem>Sauvegerder le fichier sous le nom Dockerfile</ListItem>
              <ListItem>etc...</ListItem>
            </List>
          </Notes>
        </Slide>
        
        
        
        <Slide
        transitionIn={['zoom', 'fade']}
        transitionOut={['slide', 'fade']}
          bgColor="primary"
        >
        <Heading bgColor="#000" size={2} margin={25} caps fit textColor="#fff">
            Docker Compose 1/2
        </Heading>
        
       <List>
           <Appear>
             <ListItem textColor="#fff">Docker compose est un moyen de déclarer un ensemble de services et de passer les paramètres, identiques pour la plupart avec ce qui est possible en utilisant la ligne de commande.</ListItem>

           </Appear>


       </List>
       </Slide>

       <Slide
        transitionIn={['zoom', 'fade']}
        transitionOut={['slide', 'fade']}
          bgColor="primary"
        >
        <Heading bgColor="#000" size={2} margin={25} caps fit textColor="#fff">
            Docker Compose 2/2
        </Heading>
        
       <List>
           <Appear>
             <ListItem textColor="#fff">La syntaxe des fichiers de configurations sont très proches de DOCKER SWARM, mais il y a des variations importantes dans la facon d'aborder un environnement multi hosts, et swarm reflete cette différence. 
             Attention donc à la confusion entre des fichiers utilisant docker compose et docker swarm.</ListItem>
           </Appear>
           <Appear>
           <ListItem>La plupart du temps, vous verrez une partie "deploy:" dans un fichier déploiement pour swarm, mais jamais pour docker-compose.</ListItem>
           </Appear>
           <Appear>
           <ListItem  textColor="#fff">Certains mots clés comme priviliedged, restart, ou hostname ne sont pas supportés par swarm.</ListItem>
           </Appear>

       </List>

      
      
          <Notes>
            <List>
              <ListItem>aller sur coder.julien.tech</ListItem>
              <ListItem>./webpage/build contient un build d'une appli react.</ListItem>
              <ListItem>Sauvegerder le fichier sous le nom Dockerfile</ListItem>
              <ListItem>etc...</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide
        transitionIn={['zoom', 'fade']}
        transitionOut={['slide', 'fade']}
          bgColor="primary"
        >
        <Heading bgColor="#000" size={2} margin={25} caps fit textColor="#fff">
          Exécution privilégiée - Dans quel cas ?  
        </Heading>
        <Heading size={5} margin={25}>Si un container doit pouvoir accéder aux fonctionnalités Docker du host comme: </Heading>
        
       <List>
           <Appear>
             <ListItem textColor="#fff">Lister des ressources Docker</ListItem>
           </Appear>
           <Appear>
            <ListItem>Créer, supprimer, et gérer des ressources Docker</ListItem>
           </Appear>
           <Appear>
            <ListItem  textColor="#fff">Lire les informations comme les LABELS des autres containers (nous verrons la notion de label dans le prochain cours)</ListItem>
           </Appear>

       </List>

      
      
          <Notes>
            <List>
              <ListItem>aller sur coder.julien.tech</ListItem>
              <ListItem>./webpage/build contient un build d'une appli react.</ListItem>
              <ListItem>Sauvegerder le fichier sous le nom Dockerfile</ListItem>
              <ListItem>etc...</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide
        transitionIn={['zoom', 'fade']}
        transitionOut={['slide', 'fade']}
          bgColor="primary"
        >
        <Heading bgColor="#000" size={2} margin={25} caps fit textColor="#fff">
         Exemples de services avec éxécution privillégiée :  
        </Heading>
        
        
       <List>
           <Appear>
             <ListItem textColor="#fff">Traefik , un reverse proxy qui se base sur les labels des services swarm ou kubernetes pour s'auto-configurer</ListItem>
           </Appear>
           <Appear>
            <ListItem>Portainer, un outil de gestion d'environnement swarm</ListItem>
           </Appear>
           <Appear>
            <ListItem  textColor="#fff">Mon instance Coder ici, qui permet de lancer des containers sur le host lui-même</ListItem>
           </Appear>

       </List>

      
      
          <Notes>
            <List>
              <ListItem>aller sur coder.julien.tech</ListItem>
              <ListItem>./webpage/build contient un build d'une appli react.</ListItem>
              <ListItem>Sauvegerder le fichier sous le nom Dockerfile</ListItem>
              <ListItem>etc...</ListItem>
            </List>
          </Notes>
        </Slide>

       
        <Slide transition={['slide']} bgColor="black">
          <BlockQuote>
            <Quote>Work in progress</Quote>
            <Cite>Julien Le Bourg</Cite>
          </BlockQuote>
        </Slide>
        
      </Deck>
    );
  }
}
