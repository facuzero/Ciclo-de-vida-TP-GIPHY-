import React, { Component } from 'react';

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
        .then(data => {this.setState({gif: data.images.original.url})})
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
            contenido = <img src={this.state.gif} alt={this.state.gif}></img>
        }
        return (
        <div>
            {contenido}
        </div>)
    }
}

export default RandomGif;
