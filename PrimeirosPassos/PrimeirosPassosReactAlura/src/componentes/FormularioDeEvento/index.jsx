import './formulario-evento.estilos.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { ListaSuspensa } from '../ListaSuspensa';
import { Botao } from '../Botao/botao';

export function FormularioDeEvento({ temas, aoSubmeter}) {

	function aoFormSubmetido(formData) {
		console.log("Olá mundo!", formData)
		const evento = {
			capa: formData.get('capa'),
			tema: temas.find(function (item){
				return item.id == formData.get('tema')
			}),
			data: new Date(formData.get('dataEvento')),
			titulo: formData.get('nome')
		}
		aoSubmeter(evento)
	}

	return (
		<form className='form-evento' action={aoFormSubmetido}>
			<TituloFormulario>
				Preencha para criar um evento:
			</TituloFormulario>

			<div className='campos'>
				<CampoDeFormulario>
					<Label htmlFor="nome">Qual o nome do evento?</Label>
					<CampoDeEntrada
						type="text"
						name="nome"
						id="nome"
						placeholder='Summer dev hits'
					/>
				</CampoDeFormulario>
				<CampoDeFormulario>
					<Label htmlFor="capa">Qual o endereço da imagem de capa?</Label>
					<CampoDeEntrada
						type="text"
						name="capa"
						id="capa"
						placeholder='https://'
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
				<ListaSuspensa htmlFor="tipoEvento" id="tema" name="tema" itens={temas} />
			</div>

			<div className='acoes'>
				<Botao type="submit">
					Enviar Evento
				</Botao>
			</div>

		</form>
	)
}