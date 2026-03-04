import './formulario-evento.estilos.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { ListaSuspensa } from '../ListaSuspensa';
import { Botao } from '../Botao/botao';

export function FormularioDeEvento(){
	return (
	  <form className='form-evento'>
		<TituloFormulario>
		  Preencha para criar um evento:
		</TituloFormulario>

		<div className='campos'>
			<CampoDeFormulario>
			<Label htmlFor="nome">Qual o nome do evento?</Label>
			<CampoDeEntrada 
				type="text" 
				name="" 
				id="nome" 
				placeholder='Summer dev hits'
			/>
			</CampoDeFormulario>
			<CampoDeFormulario>
			<Label htmlFor="dataEvento">Data do Evento</Label>
			<CampoDeEntrada 
				type="date" 
				name="dataEvento" 
				id="dataEvento" 
			/>
			</CampoDeFormulario>
			<Label htmlFor="tipoEvento">Selecione Tipo de Evento</Label>
			<ListaSuspensa htmlFor="tipoEvento">
				<option value="volvo">Aniversário</option>
  				<option value="saab">Casamento</option>
  				<option value="fiat" selected>Reunião de Negócios</option>
				<option value="fiat">Workshop</option>
			</ListaSuspensa>

			<div className='acoes'>
				<Botao type="submit">
					Enviar Evento
				</Botao>
			</div>
		</div>
	  </form>
	)
}