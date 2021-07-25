import React, {useState} from 'react'

export const ProvinciaSelect = () => {

    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }

    const [provincias, setProvincias] = useState([
        { id_dep: "1", id_prov: "18", name: "Bagua"},
        { id_dep: "1", id_prov: "22", name: "Bongara"},
        { id_dep: "1", id_prov: "42", name: "Chachapoyas"},
        { id_dep: "1", id_prov: "56", name: "Condorcanqui"},
        { id_dep: "1", id_prov: "104", name: "Luya"},       
    ])

    return (
        <div>
            <select name="" id="" onChange={handleChange}>
                {
                    provincias.map((provincia, index) => {
                        return <option key={provincia.id_prov} value={provincia.id_prov}>{provincia.name}</option>
                    })
                }
            </select>
        </div>
    )
}
