import React from 'react';

const Prescription = ()=>{
    return(
    <div style={{display: "flex", flexDirection:"row", alignItems: "center", marginBottom:"20px"}}>
        <div style={{display: "flex", flexDirection:"column", width:"100%", alignItems:"center"}}> 
            <div style={{height:"70px", fontWeight: "1000", fontSize: "40px", backgroundColor: "#247BA0", width:"100vw", textAlign:"center"}}>Prescriptie Medicala</div>
            <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between", marginTop: "50px", width: "600px"}}>
                <div style={{marginRight: "20px"}}>Nume:</div><input style={{width: "400px", backgroundColor: "#F3FFBD"}}id="nume"/>
            </div>
            <div style={{display: "flex", flexDirection:"row",  justifyContent: "space-between", marginTop: "20px"}}>
                <div style={{marginRight: "56px"}}>Varsta pacientului:</div><input style={{width: "400px", backgroundColor: "#F3FFBD"}} type="number" id="varsta"/>
            </div>
            <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between", marginTop: "20px"}}>
                <div style={{marginRight: "63px"}}>Sexul pacientului:</div>
                <select style={{width: "410px", backgroundColor: "#F3FFBD"}} id="Pacient">
                    <option value="masculin">Masculin</option>
                    <option value="feminin">Feminin</option>
                </select>
            </div>
            <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                <div style={{marginRight: "153px"}}>Data:</div><input style={{width: "408px", backgroundColor: "#F3FFBD"}} type="date" id="data"/>
            </div>
            <div style={{display: "flex", flexDirection:"row", alignContent:"center", height: "100%", alignItems: "center", marginTop: "20px"}}>
                <div style={{marginRight: "43px", width:"150px"}}>Simptome asociate pacientului:</div>
                    <textarea style={{width: "405px", backgroundColor: "#F3FFBD"}} id="simptome" rows={4} cols={50}/>
            </div>
            <div style={{display: "flex", flexDirection:"row", alignItems: "center", marginTop: "20px"}}>
                <div style={{marginRight: "43px", width:"150px"}}>Tratament si medicatie recomandata:</div>
                <textarea style={{width: "405px", backgroundColor: "#F3FFBD"}} id="tratament" rows={4} cols={50}/>
            </div>
        </div>
    </div>
    );
    
}
export default Prescription;