import React,{ useContext, useState, useEffect } from "react"
import ServersContext from "../../context/ServersContext";
import api from "../../services/api";
import './styles.css';

export default props => {

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
            if(serv[i].id_vm == id){
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
               
                <tr>
                    <th>Select</th>
                    <th>Hostname</th>
                    <th>Memória</th>
                    <th>vCPUs</th>
                    <th>Disco</th>
                    <th>IP</th>
                </tr>
                {servers.map(item =>{
                    return (
                        <tr>
                            <td><input id={item.id_vm} onClick={handleCheckbox} type={"checkbox"}/></td>
                            <td>{item.hostname}</td>
                            <td>{item.configuracao.memoryProvisioned} GB</td>
                            <td>{item.configuracao.cpuProvisioned} vCPUs</td>
                            <td>{item.configuracao.totalDiskGB} GB</td>
                            <td>{item.ip}</td>
                            
                        </tr>
                    );
                })}
               
            </table> 
        );
    }
    else{
        return(
            <table>
                <tr>
                    <th>Servidores Selecionados</th>
                    <td>{state.servers.length} servidores selecionados</td>
                </tr>
                <tr>
                    <th>Total de memória</th>
                    <td>{ state.mem } GB</td>
                </tr>
                <tr>
                    <th>Total de CPUs</th>
                    <td>{ state.cpu } vCPUs</td>
                </tr>
                <tr>
                    <th>Total de Discos</th>
                    <td>{ state.disk } GB</td>
                </tr>
            </table>
        );
    }
    
    
    
}

