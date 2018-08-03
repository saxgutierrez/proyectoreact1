import React from 'react';
import { Button,Input,span,img,Container,Row,Col } from 'reactstrap';
import './App.css';

 class App extends React.Component {
  constructor(){
    super();
      this.state ={ 
                   data: [{
                            id: 1,
                            title: 'Manejo de dependencias en Ruby con Bundler',
                            description: 'Bundler es una manejador de dependencias para Ruby. Aunque viene incluido con Rails, Bundler no es exclusivo de Rails, lo puedes usar para manejar las dependencias de cualquier proyecto de Ruby.',
                            url: 'http://blog.makeitreal.camp/manejo-de-dependencias-en-ruby-con-bundler/',
                            votes: 42,
                            writer_avatar_url: '//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405',
                            post_image_url: 'http://blog.makeitreal.camp/assets/images/bg-images/bundler.jpg',
                          },
                          {
                            id: 2,
                            title: 'Descubre si Make it Real es para ti',
                            description: 'En Make it Real buscamos entrenar a los desarrolladores Web que nosotros mismos quisiéramos contratar. Personas con autodisciplina que sean capaces de resolver problemas complejos y se adapten rápidamente a nuevas tecnologías y escenarios. En este post vamos a discutir algunas características de nuestro programa para que descubras si Make it Real es para ti.',
                            url: 'http://blog.makeitreal.camp/descubre-si-make-it-real-es-para-ti/',
                            votes: 43,
                            writer_avatar_url: '//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405',
                            post_image_url: 'http://blog.makeitreal.camp/assets/images/bg-images/laptop-sublime.jpg',
                          },
                          {
                            id: 3,
                            title: '¿Qué es código?',
                            description: 'Semáforos, automóviles, aviones, aeropuertos, satélites, el sistema financiero, gran parte de nuestras vidas depende del código que varias generaciones de programadores han escrito. Pero ¿qué es código? ¿quién lo ejecuta y cómo? En este post vamos a hacer un recorrido histórico para entender cómo es que la electricidad se convierte en código y cómo surgieron los lenguajes de programación.',
                            url: 'http://blog.makeitreal.camp/que-es-codigo/',
                            votes: 44,
                            writer_avatar_url: '//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405',
                            post_image_url: 'http://blog.makeitreal.camp/assets/images/bg-images/code.jpg',
                          },
                          {
                            id: 4,
                            title: 'Aprende Desarrollo Web gratis',
                            description: '¿Quieres iniciar en el mundo del desarrollo Web y no sabes por dónde empezar? Conoce Aprende Desarrollo Web, un curso completamente gratis dirigido a personas sin experiencia en el que aprenderás a crear y publicar sitios interactivos en Internet con HTML, CSS y JavaScript.',
                            url: 'http://blog.makeitreal.camp/aprende-desarrollo-web-gratis/',
                            votes: 45,
                            writer_avatar_url: '//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405',
                            post_image_url: 'http://blog.makeitreal.camp/assets/images/bg-images/aprende-desarrollo-web-bg.png',
                          },
                        ],
                        changeBottom:true,
                        value1:0,
                        global:[],


                  }

      this.toggle1 = this.toggle1.bind(this);
      this.toggle2 = this.toggle2.bind(this);
  }

  toggle1(event){
    //hace el cambio de colores en los botones negando la misma variable
    this.setState({changeBottom: !this.state.changeBottom});
    //como ordenas un arreglo de hash según el valor mayor del parámetro votes
    let oldData = this.state.data;

    let newData = oldData.sort((a,b)=>{
                                          if (a.votes > b.votes){
                                            return 1;
                                          }

                                          if (a.votes > b.votes) {
                                              return -1;
                                            }
                                            // a must be equal to b
                                            return 0;

                                      });

      
  }

  toggle2(event){
    //hace el cambio de colores en los botones negando la misma variable
    this.setState({changeBottom: !this.state.changeBottom});
    //como ordenas un arreglo de hash según el menor valor del parámetro votes
    let oldData = this.state.data;

    let newData = oldData.sort((firts,second)=>{
                                          if (firts.votes < second.votes){
                                            return 1;
                                          }

                                          if (firts.votes < second.votes) {
                                              return -1;
                                            }
                                            // a must be equal to b
                                            return 0;

                                      });

     

  }


  //importansímo el id para hacer referencia a determinado elemento del json por default
   handleChange(id,votes,event){
    console.log(id,votes);//devuelve el id y el valor de votos
    //guardo en una variable local el estado inicial y
    //de allí para adelante esta trabaja como si fuera el mismo this.state.data que es valor por default
    let oldData = this.state.data;
    
    //iteracion y actualización de un parametro en particular, referente a un id específico
    let newData = oldData.map(data=>{

                                        if(data.id===id)
                                        //guarda el cambio del mismo input con lo que estaba cargado desde el json
                                          {
                                            data.votes = event.target.votes  
                                            
                                           return data
                                          }
                                        return data
                                    })  

    

    this.setState({data:newData});
   console.log(this.state.data);


     //como ordenas un arreglo de hash según el valor mayor del parámetro votes
    //falta hacer que cambio de orden según se vaya cambiando de valor manualmente, es decir
    //que se ordene de mayor a menor, es decir un cambio de posiciones dentro del arreglo de hash

    //guarda y se muestra esta información
   
    //necesito actualizar el arreglo original con el nuevo atributo del newData
    // this.setState({data:})
    

    }
  render() {
    
    return (
      <Container>
        <Row>
          <Col  md={{ size: 8, offset: 2 }} className="text-center">
            <h1><b>Blog post populares</b></h1>
            <hr />
          </Col>
          <Col  md={{ size: 8, offset: 2 }} className="mt-5">
            <span className="pr-1">Orden:</span>

            <Button className={this.state.changeBottom === true? "btn btn-outline-primary" : ""} 
             color="primary" size="lg" onClick={this.toggle1}>Ascendente</Button>{' '}

            <Button className={this.state.changeBottom !== true? "btn btn-outline-primary" : ""}
             color="primary" size="lg" onClick={this.toggle2}>Descendente</Button>{' '}

          </Col>

          {this.state.data.map((data,index)=>

              <Col  md={{ size: 8, offset: 2 }} className="mt-3 row">

                <Col  md="4" className="">
                  <img className="imagew" key={index} src={data.post_image_url}></img>
                </Col>

                <Col  md="2" className="">
                  <div className="align-middle" >
                    <Input type="number" min="0" key={index}
                    onChange={this.handleChange.bind(this,data.id,data.votes)}
                     value={data.votes} />
                  </div>
                </Col>

                <Col  md="6" className="">
                  <p><a target="_blank" key={index} href={data.url}>{data.title}</a></p>
                <p key={index} >{data.description}</p>
                <p className="colortext">Escrito por: <span><img className="rounded-circle imagew1" key={index} src={data.writer_avatar_url}></img></span></p>
                </Col>

              </Col>
          
          )}


        </Row>
      </Container>

      
    );
  }
}

export default App;