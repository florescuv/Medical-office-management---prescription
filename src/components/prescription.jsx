import React from 'react';

const Prescription = ()=>{
    return(
    <div style={{display: "flex", flexDirection:"row", alignItems: "center", marginTop: "20px", marginBottom:"20px"}}>
        <div style={{display: "flex", flexDirection:"column", width:"100%", alignItems:"center"}}> 
            <div style={{ fontWeight: "1000", fontSize: "25px"}}>Prescriptie Medicala</div>
            <div style={{display: "flex", flexDirection:"row", alignItems: "center", marginTop: "50px"}}>
                <div style={{marginRight: "20px"}}>Nume</div><input id="nume"/>
            </div>
            <div style={{display: "flex", flexDirection:"row", alignItems: "center", marginTop: "20px"}}>
                <div style={{marginRight: "20px"}}>Varsta pacientului</div><input type="number" id="varsta"/>
            </div>
            <div style={{display: "flex", flexDirection:"row", alignItems: "center", marginTop: "20px"}}>
                <div style={{marginRight: "20px"}}>Sexul pacientului</div>
                <select id="Pacient">
                    <option value="masculin">Masculin</option>
                    <option value="feminin">Feminin</option>
                </select>
            </div>
        </div>
    </div>
    );
}
export default Prescription;