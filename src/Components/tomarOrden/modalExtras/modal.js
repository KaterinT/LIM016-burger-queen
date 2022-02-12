import { useState } from "react";

export const Modal = ({confirmarModal,cancelarModal}) => {
    const [burger,setBurger] =useState('');
    const [adicional,setAdicional] =useState('')

    return <div className="modal">
              <form className="modalOpciones">
                <h2>Opciones de hamburguesa</h2>
                <div>
                    <label>
                        <input type="radio" name="burger" /*value="res"  checked={burger==='res'&&true} */ onChange={()=>{setBurger('res')}}/>
                        Res    
                    </label>
                    <label>
                        <input type="radio" name="burger" /*value="pollo"  checked={burger==='pollo'&&true} */ onChange={()=>{setBurger('pollo')}} />Pollo</label>
                    <label>
                        <input type="radio" name="burger" /*value="vegana"  checked={burger==='vegana'&&true} */ onChange={()=>{setBurger('vegana')}}/>Vegana</label>
                </div>
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