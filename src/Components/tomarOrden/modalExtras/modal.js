import { useState } from "react";

export const Modal = ({confirmarModal,cancelarModal,alarm,alarmSet}) => {

    const [burger,setBurger] =useState('');
    const [adicional,setAdicional] =useState('')

    return <div className="modal">
              <form className="modalOpciones">
                <h2>Opciones de hamburguesa</h2>
                <div>
                    <label>
                        <input type="radio" name="burger"  onChange={()=>{setBurger('res');alarmSet('noActive')}}/>
                        Res    
                    </label>
                    <label>
                        <input type="radio" name="burger"  onChange={()=>{setBurger('pollo');alarmSet('noActive')}} />Pollo</label>
                    <label>
                        <input type="radio" name="burger"  onChange={()=>{setBurger('vegana');alarmSet('noActive')}}/>Vegana</label>
                </div>
                {alarm==='isActive'&&(<p>Elegir hamburguesa por favor</p>)}
                <h2>Adicionales</h2>
                <div>
                    <label><input type="radio" name="adicional" onChange={()=>setAdicional('queso')}/>Queso 1.00</label>
                    <label><input type="radio" name="adicional" onChange={()=>setAdicional('huevo')}/>Huevo 1.00</label>
                </div>
                <input type="button" onClick={()=>confirmarModal([burger,adicional])} value="aceptar"/>
                <input type="button" onClick={()=>{cancelarModal()}} value="cancelar"/>
              </form>
            </div>
}