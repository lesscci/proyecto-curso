import React, { useState } from 'react'

export const PublicarBarScreen = ({bar, setBar}) => {

        const [datosBar,setDatosBar] = useState({
            imagenBar:'',
            nombrePropietario: '',
            nombreBar: '',
            direccionBar:'',
            telefono: '',
            areaBar:''
        });

        const {imagenBar,nombrePropietario,nombreBar, direccionBar, telefono, areaBar} = datosBar;

        const handleSubmit = (e)=> {
            e.preventDefault();
            if( [imagenBar,nombrePropietario,nombreBar,direccionBar,telefono,areaBar].includes('')){
                return; //Con este return lo que conseguimos es que una vez entre en esta validacion, salga de la funcion por completo sin seguir hacia abajo
              }
              setBar({...bar,datosBar});
              setDatosBar({
                imagenBar:'',
                nombrePropietario: '',
                nombreBar: '',
                direccionBar:'',
                telefono: '',
                areaBar:''
              })
        }

        const handleInputChange = (e) => {
            console.log(e.target.value);
            setDatosBar({
                ...datosBar,
                [e.target.name]:e.target.value
            })
        }


    return (
        <div className='form__post-bar'>
            <form action='' className='form__content-bar' onChange={handleSubmit}>
                <h4>Haz un post de <br /> <span className="texto-resaltado">tu restaurante</span></h4>
                <input onChange={handleInputChange} type="file" name="imagenBar" value={imagenBar} id="input-image-bar" className="form__up-image"/>
                <input onChange={handleInputChange} type="text" name="nombrePropietario" value={nombrePropietario} id="input-nombre-bar" className="form__input-bar" placeholder="nombre del propietario" />
                <input onChange={handleInputChange} type="text" name="nombreBar" value={nombreBar} id="input-nombre-propietario" className="form__input-bar" placeholder="nombre del bar" />
                <input onChange={handleInputChange} type="text" name="direccionBar" value={direccionBar} id="input-direccion-bar" className="form__input-bar" placeholder="direccion del bar" />
                <input onChange={handleInputChange} type="tel" name="telefono" value={telefono} id="phone" className="form__input-bar" placeholder="+34 654 321 789" />
                {/* <select name="categoria" id="categoria-bar" className="form__input-bar"></select>
                <select name="horario" id="horario-bar" className="form__input-bar"></select> */}
                <input onChange={handleInputChange} type="text" name="areaBar" value={areaBar} id="" className="form__input-bar" placeholder="area del bar" />
                <input onChange={handleInputChange} type="text" name="" value="" id="" className="form__input-bar" />
                <textarea name="" id="" cols="30" rows="10" className="form__txtarea-bar"></textarea>
                {/* <input type="submit" value="REGISTRAR BAR" className="form__input-btn" /> */}
            </form>
        </div>

    );
}