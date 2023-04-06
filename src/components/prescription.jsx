import React from 'react';

const Prescription = ()=>{
    return(
    <div style={{display: "flex", flexDirection:"row", alignItems: "center", marginTop: "20px", marginBottom:"20px"}}>
        <div style={{display: "flex", flexDirection:"column", width:"100%", alignItems:"center"}}> 
            <div style={{ fontWeight: "1000", fontSize: "25px"}}>Prescriptie Medicala</div>
            <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between", marginTop: "50px", width: "600px"}}>
                <div style={{marginRight: "20px"}}>Nume:</div><input style={{width: "400px"}}id="nume"/>
            </div>
            <div style={{display: "flex", flexDirection:"row",  justifyContent: "space-between", marginTop: "20px"}}>
                <div style={{marginRight: "56px"}}>Varsta pacientului:</div><input style={{width: "400px"}} type="number" id="varsta"/>
            </div>
            <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between", marginTop: "20px"}}>
                <div style={{marginRight: "63px"}}>Sexul pacientului:</div>
                <select style={{width: "410px"}} id="Pacient">
                    <option value="masculin">Masculin</option>
                    <option value="feminin">Feminin</option>
                </select>
            </div>
            <div style={{display: "flex", flexDirection:"row", alignItems: "center", marginTop: "20px"}}>
                <div style={{marginRight: "20px"}}>Data:</div><input type="date" id="data"/>
            </div>
            <div style={{display: "flex", flexDirection:"row", alignItems: "center", marginTop: "20px"}}>
                <div>Simptome asociate pacientului:
                    <textarea id="simptome" rows={4} cols={50}/>
                </div>
            </div>
            <div style={{display: "flex", flexDirection:"row", alignItems: "center", marginTop: "20px"}}>
                <div>Tratament si medicatie recomandata:
                    <textarea id="tratament" rows={4} cols={50}/>
                </div>
            </div>
        </div>
    </div>
    );
    
}
export default Prescription;