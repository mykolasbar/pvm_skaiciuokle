import React, { useState }  from 'react';
import './skaiciuokle.css';
import Sumazodziais from './suma_zodziais';

const Skaiciuokle = () => {
    let [tarifas, setTarifas] = useState(0.21);
    let [bePVM, setbePVM] = useState(0);
    let [PVMDalis, setPMVDalis] = useState(0);
    let [bendraSuma, setBendraSuma] = useState(0);
    let pvmSkaiciavimai = (event, value) => { setbePVM(bePVM = parseFloat(event.target.value)); setPMVDalis(PVMDalis = bePVM * tarifas); setBendraSuma(bendraSuma = bePVM + PVMDalis)}
    let procentoParinkimas = (event, value) => { if (event.target.value === "21%") setTarifas(tarifas = 0.21); if (event.target.value === "9%") setTarifas(tarifas = 0.09); if (event.target.value === "5%") setTarifas(tarifas = 0.05); setPMVDalis(PVMDalis = bePVM * tarifas); setBendraSuma(bendraSuma = bePVM + PVMDalis) }

    return (
        <form className = "tarifuSkaiciavimas">
            <h2>PVM skaičiuoklė</h2>
            <label className = "label" for="pvmProcentai">PVM tarifas:</label>
            <select name="pvmProcentai" id="procentai" onChange = { procentoParinkimas }>
                <option value="21%">21%</option>
                <option value="9%">9%</option>
                <option value="5%">5%</option>
            </select><br/>
            <label className = "label" for="sumaBePVM">Suma (be PVM):</label>
            <input name="sumaBePVM" placeholder="Įveskite sumą be PVM" onChange = { pvmSkaiciavimai }></input><br/>
            <label className = "label" for="PVMSuma">PVM suma:</label>
            <input name="PVMSuma" value = {PVMDalis} disabled={true}></input><br/>
            <label className = "label" for="sumaSuPVM">Bendra suma (su PVM):</label>
            <input name="sumaSuPVM" value = {bendraSuma} disabled={true}></input><br/>
            <span>Bendra suma žodžiais:</span>
            <Sumazodziais
            let suma = { bendraSuma }
            />
        </form>
    );
};

export default Skaiciuokle;