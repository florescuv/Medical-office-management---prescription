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
            <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                <div style={{marginRight: "153px"}}>Data:</div><input style={{width: "408px"}} type="date" id="data"/>
            </div>
            <div style={{display: "flex", flexDirection:"row", alignContent:"center", height: "100%", alignItems: "center", marginTop: "20px"}}>
                <div style={{marginRight: "43px", width:"150px"}}>Simptome asociate pacientului:</div>
                    <textarea style={{width: "405px"}} id="simptome" rows={4} cols={50}/>
            </div>
            <div style={{display: "flex", flexDirection:"row", alignItems: "center", marginTop: "20px"}}>
                <div style={{marginRight: "43px", width:"150px"}}>Tratament si medicatie recomandata:</div>
                <textarea style={{width: "405px"}} id="tratament" rows={4} cols={50}/>
            </div>
        </div>
    </div>
    );
    
}
export default Prescription;