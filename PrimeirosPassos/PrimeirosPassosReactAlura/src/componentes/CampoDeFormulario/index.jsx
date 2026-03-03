import './campo-formulario.estilos.css'
export function CampoDeFormulario({ children }){
	//destruturando / descontruido -> javascript -> outra forma de manipular parametros
	return (
	  <fieldset className='campo-form'>
		{children}
	  </fieldset>
	)
}