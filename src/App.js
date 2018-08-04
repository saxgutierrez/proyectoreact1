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

                  this.Ascendente = this.Ascendente.bind(this);
                  this.Descendente = this.Descendente.bind(this);  
  }

  Ascendente(event){
    //hace el cambio de colores en los botones negando la misma variable
    this.setState({changeBottom: !this.state.changeBottom});
    
    let oldData = this.state.data;
    //ordenar de mayor a menor
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

  Descendente(event){
    //hace el cambio de colores en los botones negando la misma variable
    this.setState({changeBottom: !this.state.changeBottom});
    
    let oldData = this.state.data;
    //ordenar de menor a mayor
    let newData = oldData.sort((firts,second)=>{
                                          if (firts.votes < second.votes){
                                            return 1;
                                          }

                                          if (firts.votes < second.votes) {
                                              return -1;
                                            }
                                            // first must be equal to second
                                            return 0;
                                      });
  }

  add(id,votes,event){
     // console.log(id,votes); //impresión de los parametros id y votes
        let oldData = this.state.data;
         //iteracion y actualización de un parametro en particular, referente a un id específico
        let newData = oldData.map(data=>{

          if(data.id===id)
            //guarda el cambio del mismo input con lo que estaba cargado desde el json
              {
                data.votes= data.votes+1
                
               return data
              }
          return data
        })
        //ordenar de mayor a menor
        let newData1 = newData.sort((firts,second)=>{
                                          if (firts.votes < second.votes)
                                          {
                                            return 1;
                                          }

                                          if (firts.votes < second.votes)
                                          {
                                            return -1;
                                          }
                                          // first must be equal to second
                                            return 0;
                                      });

      this.setState({data:newData1});
      // console.log(this.state.data);//impresión de data verificando el cambio 
  }

  subtract(id,votes,event){
    // console.log(id,votes); //impresión de los parametros id y votes
        let oldData = this.state.data;
         //iteracion y actualización de un parametro en particular, referente a un id específico
        let newData = oldData.map(data=>{

        if(data.id===id)
          //guarda el cambio del mismo input con lo que estaba cargado desde el json
            {
              if(data.votes>0) // solo permite restar para números mayores a cero
                {
                  data.votes= data.votes-1
                  return data
                }
              return data
            }
        return data    
        })

        //ordenar de mayor a menor
        let newData1 = newData.sort((firts,second)=>{
                                          if (firts.votes < second.votes)
                                          {
                                            return 1;
                                          }

                                          if (firts.votes < second.votes)
                                          {
                                            return -1;
                                          }
                                            // first must be equal to second
                                            return 0;
                                      });

      this.setState({data:newData1});
      // console.log(this.state.data);//impresión de data verificando el cambio
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
             color="primary" size="lg" onClick={this.Ascendente}>Ascendente</Button>{' '}

            <Button className={this.state.changeBottom !== true? "btn btn-outline-primary" : ""}
             color="primary" size="lg" onClick={this.Descendente}>Descendente</Button>{' '}

          </Col>

          {this.state.data.map((data,index)=>

              <Col md={{ size: 8, offset: 2 }} className="mt-3 row">

                <Col  md="4" className="d-flex align-items-center">
                  <img className="imagew" key={index}
                   src={data.post_image_url}></img>
                </Col>

                <Col md="2" className="d-flex align-items-center">
                  <div className="text-center">

                    <a color="primary" size="sm" 
                    onClick={this.add.bind(this,data.id,data.votes)}>
                    <i class="colorfa fas fa-caret-down fa-2x fa-rotate-180"></i></a>{' '}
                    
                    <Col sm={{ size: 10, offset: 1 }} className="">
                      <Input type="number" min="0" key={index} className="text-center"
                       value={data.votes} />
                    </Col>

                    <a color="primary" size="sm" 
                    onClick={this.subtract.bind(this,data.id,data.votes)}>
                    <i class="colorfa fas fa-caret-down fa-2x"></i></a>{' '}
                    
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