import './campo-entrada.estilos.css'
export function CampoDeEntrada (props) {
	return <input {...props}  className='campo-entrada'/> 
	//outra funcionalidade do JS -> vai pegar todos os atribuitos do input
	//achei interessante, isso vai abraçar todos os elementos que eu colocar no input
}