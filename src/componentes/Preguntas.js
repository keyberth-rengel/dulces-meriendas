import React, {Component} from 'react';
import PreguntasFormuladas from './PreguntasFormuladas';


class Preguntas extends Component {

    state = {
        error: false
    }

    nombreRef = React.createRef();
    preguntaRef = React.createRef();
    formularPregunta = (e) => {
        e.preventDefault();
        const nombre = this.nombreRef.current.value;
        const pregunta = this.preguntaRef.current.value;
        if(!pregunta === '' || !nombre === '') {
            
            const pregunta = {
                email: this.nombreRef.current.value,
                pregunta: this.preguntaRef.current.value
            }

            this.setState({
                error: false
            })
            
        }else{
            this.setState({
                error:true
            })
        }
        console.log(pregunta);
    }
    
    render() {
        return(
            <div className="row justify-content-center">
                <div className="col-8 justify-content-center my-5">

                    <h3 className="col-12 titulo">Formular Pregunta:</h3>
				    <form className="formulario col-12" onClick={this.formularPregunta}>
					    <input type="text" ref={this.nombreRef} placeholder="Nombre" name="nombre" />
					    <textarea className="mensaje" ref={this.preguntaRef} placeholder="Mensaje:"></textarea>
                        { this.state.error ? <div className="alert alert-danger text-center">Todos los campos son oblicatorios</div> : ''}
					    <input className="boton" type="submit" value="Formular Pregunta" />
				    </form>
                </div>
                <PreguntasFormuladas />
            </div>

        )
    }
}

export default Preguntas;