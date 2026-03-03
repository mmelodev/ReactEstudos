import './titulo-formulario.estilos.css'
export function TituloFormulario(props){
	//props é um objeto que contém as propriedades do componente
	//props.algumacoisa -> props.children
	return (
	  <h2 className='titulo-form'>
		{props.children}
	  </h2>
		//mds do céu isso é um absurdo !
	)
}