import React from 'react';

const Prescription = ()=>{
    return(
    <div style={{display: "flex", flexDirection:"row", alignItems: "center", marginTop: "20px", marginBottom:"20px"}}>
        <div style={{display: "flex", flexDirection:"column", width:"100%", alignItems:"center"}}> 
            <div style={{ fontWeight: "1000", fontSize: "25px"}}>Prescriptie Medicala</div>
            <div style={{display: "flex", flexDirection:"row", alignItems: "center", marginTop: "50px"}}>
                <div style={{marginRight: "20px"}}>Nume</div><input id="nume"/>
            </div>
        </div>
    </div>
    );
}
export default Prescription;