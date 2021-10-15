import React,{ useContext, useState, useEffect } from "react"
import ServersContext from "../../context/ServersContext";
import api from "../../services/api";
import './styles.css';

const Datatable = props => {

    const { state, dispatch } = useContext(ServersContext)
    const [ servers, handler] = useState([]);

    const getServers = () =>{
        api.get('/servers').then(response=>{handler(response.data)})
    }

    const handleCheckbox = (e) =>{
        console.log()
        dispatch({
            action: "CHECKED",
            payload: {
               target: e.target,
               obj: ret(e.target.id, servers)
            }
        })
    }

    const ret = (id, serv) => {
        let obj;
        for(let i = 0; i < serv.length; i++){
            if(serv[i].id_vm === parseInt(id)){
                obj = {
                    mem: serv[i].configuracao.memoryProvisioned, 
                    cpu: serv[i].configuracao.cpuProvisioned, 
                    disk: serv[i].configuracao.totalDiskGB
                }
            }
        }
        return obj;
    }

    useEffect(()=>{
       getServers();
    }, []);

    if(!props.col){
        return( 
            
            <table>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Hostname</th>
                        <th>Memória</th>
                        <th>vCPUs</th>
                        <th>Disco</th>
                        <th>IP</th>
                    </tr>
                </thead>
                <tbody>
                    {servers.map(item =>{
                        return (
                            <tr key={item.id_vm}>
                                <td><input id={item.id_vm} onClick={handleCheckbox} type={"checkbox"}/></td>
                                <td>{item.hostname}</td>
                                <td>{item.configuracao.memoryProvisioned} GB</td>
                                <td>{item.configuracao.cpuProvisioned} vCPUs</td>
                                <td>{item.configuracao.totalDiskGB} GB</td>
                                <td>{item.ip}</td>
                                
                            </tr>
                        );
                    })}
                </tbody>
            </table> 
        );
    }
    else{
        return(
            <table>
                <tbody>
                    <tr>
                        <th>Servidores Selecionados</th>
                        <td className={"horizontal"}>{state.servers.length} servidores selecionados</td>
                    </tr>
                    <tr>
                        <th>Total de Memória</th>
                        <td className={"horizontal"}>{ state.mem } GB</td>
                    </tr>
                    <tr>
                        <th>Total de CPUs</th>
                        <td className={"horizontal"}>{ state.cpu } vCPUs</td>
                    </tr>
                    <tr>
                        <th>Total de Discos</th>
                        <td className={"horizontal"}>{ state.disk } GB</td>
                    </tr>
                </tbody>
            </table>
        );
    }
    
    
    
}

export default Datatable;