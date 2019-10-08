import React, { Component } from 'react';

import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
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
              docker run nginx -p 8888:80
            </Heading>
          </Appear>
          <Appear>
            <Heading size={5} caps textColor="secondary">
            Ouvrir un Browser et aller sur localhost:8888

            </Heading>
          </Appear>
          
          { this.state.steps >0 &&
          <Heading size={2} caps fit textColor="secondary">
            Etape: {this.state.steps}
          </Heading>
          }
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
            <Appear>
            <BlockQuote>
            <Quote>Un volume est un emplacement de stockage pour les données persistantes ou partagées des containers</Quote>
            
          </BlockQuote>
              </Appear>
            
          
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
        <Slide transition={['slide']} bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          transition={['spin', 'zoom']}
          bgColor="tertiary"
          controlColor="primary"
          progressColor="primary"
        >
          <Heading caps fit size={1} textColor="primary">
            Inline Markdown
          </Heading>
          <Markdown>
            {`
  ![Markdown Logo](${images.markdown.replace('/', '')})

  You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
  * Lists too!
  * With ~~strikethrough~~ and _italic_
  * And let's not forget **bold**
  * Add some \`inline code\` to your sldes!
            `}
          </Markdown>
          <Notes>Who doesn't love markdown?</Notes>
        </Slide>
        {MarkdownSlides`
#### Create Multiple Slides in Markdown
All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.
---
Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:
* A Tagged Template Literal
* Imported Markdown from another file
---
Add some inline code to your markdown!

\`\`\`js
const myCode = (is, great) => 'for' + 'sharing';
\`\`\`
          `}
        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
          <Notes>So smooth</Notes>
        </Slide>
        <SlideSet
          style={{ backgroundColor: 'blue', border: '10px solid cyan' }}
        >
          <Slide transition={['fade']} textColor="tertiary">
            <List>
              <Appear>
                <ListItem>Inline style based theme system</ListItem>
              </Appear>
              <Appear>
                <ListItem>Autofit text</ListItem>
              </Appear>
              <Appear>
                <ListItem>Flexbox layout system</ListItem>
              </Appear>
              <Appear>
                <ListItem>PDF export</ListItem>
              </Appear>
              <Appear>
                <ListItem bulletStyle="greenCheck">Customized bullets</ListItem>
              </Appear>
              <Appear>
                <ListItem>And...</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide transition={['slide']} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive />
          </Slide>
        </SlideSet>
        <Slide transition={['slide']} bgColor="primary">
          <Heading
            size={4}
            caps
            textColor="secondary"
            bgColor="white"
            margin={10}
          >
            Pizza Toppings
          </Heading>
          <Layout>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem />
                  <TableHeaderItem>2011</TableHeaderItem>
                  <TableHeaderItem>2013</TableHeaderItem>
                  <TableHeaderItem>2015</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem>None</TableItem>
                  <TableItem>61.8%</TableItem>
                  <TableItem>39.6%</TableItem>
                  <TableItem>35.0%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pineapple</TableItem>
                  <TableItem>28.3%</TableItem>
                  <TableItem>54.5%</TableItem>
                  <TableItem>61.5%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pepperoni</TableItem>
                  <TableItem />
                  <TableItem>50.2%</TableItem>
                  <TableItem>77.2%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Olives</TableItem>
                  <TableItem />
                  <TableItem>24.9%</TableItem>
                  <TableItem>55.9%</TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
          <Notes>Hard to find cities without any pizza</Notes>
        </Slide>
        <Slide transition={['spin', 'slide']} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Made with love in Seattle by
          </Heading>
          <Link href="https://www.formidable.com">
            <Image width="100%" src={images.logo} />
          </Link>
          <Notes>Check us out → https://www.formidable.com</Notes>
        </Slide>
      </Deck>
    );
  }
}
