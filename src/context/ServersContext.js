import React, { createContext, useReducer } from "react";

const ServersContext = createContext({});


  export function ServersProvider(props){

    const [state, dispatch] = useReducer(reducer, {servers: [], mem: 0, cpu: 0, disk: 0});

    function reducer(state, action){
        if(action.payload.target.checked){
          return {
            servers: [...state.servers, action.payload.target.id],
            mem: state.mem + action.payload.obj.mem,
            cpu: state.cpu + action.payload.obj.cpu,
            disk: state.disk + action.payload.obj.disk,
          }
        }
        else{   
          
          let arr = [...state.servers];
          arr.splice(arr.indexOf(action.payload.target.id), 1)
          return {
            servers: arr,
            mem: state.mem - action.payload.obj.mem,
            cpu: state.cpu - action.payload.obj.cpu,
            disk: state.disk - action.payload.obj.disk,
          }
        }
      }

      return(
          <ServersContext.Provider value={
             { state,
              dispatch }
          }>
              { props.children }
          </ServersContext.Provider>
      );
  }

export default ServersContext;