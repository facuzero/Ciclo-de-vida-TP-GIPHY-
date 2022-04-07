import React, { Component } from 'react';
import Pagecontent from './PageContent';

class RandomGif extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            gif:"GIF CARGANDO"
        }
    }
    componentDidMount() {
        console.log("Estoy en mount")
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=lsRDSlMCXAtaKlDCKeJClIreqnEk2v3v&limit=4&rating=g')
        .then(response => response.json)
        .then(data => {this.setState({gif: data})})
        .catch(error => {console.log(error)})
    }
    
    componentDidUpdate(){
        console.log("Estoy en update")
    }
    
    render() {
        let contenido
        if(this.state.gif === ""){
            contenido = <h3>Cargando...</h3>
        }else{
            contenido = <div className="row text-center">
                {this.state.data.gif.data.map((gif, i) => (
                    <Pagecontent key={gif.title +i} gif={gif.images} title={gif.title}/>
                ))}
            </div>
            console.log(contenido)
        }
        return (
        <div className="container">
            {contenido}
        </div>)
    }
}

export default RandomGif;
