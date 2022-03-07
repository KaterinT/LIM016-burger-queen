import { useState } from "react";
import {FiAlertCircle} from "react-icons/fi";

export const Modal = ({confirmarModal,cancelarModal,alarm,alarmSet}) => {

    const [burger,setBurger] =useState('');
    const [adicional,setAdicional] =useState('')

    return <div className="modal">
              <div className="modalOpciones">
                <h3>Opciones de hamburguesa</h3>
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
                {alarm==='isActive'&&(<p className="alert"><FiAlertCircle className="iconAlertCircle"/>Elegir hamburguesa por favor</p>)}
                <h3>Adicionales</h3>
                <div>
                    <label><input type="radio" name="adicional" onChange={()=>setAdicional('queso')}/>Queso 1.00</label>
                    <label><input type="radio" name="adicional" onChange={()=>setAdicional('huevo')}/>Huevo 1.00</label>
                </div>
                <input type="button" onClick={()=>confirmarModal([burger,adicional])} value="Aceptar" className="bttn-Modal"/>
                <input type="button" onClick={()=>{cancelarModal()}} value="x" className="closeModalBurger bttn-Modal"/>
              </div>
            </div>
}