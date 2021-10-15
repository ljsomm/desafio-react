import './Style.css';
export default props => {   
    return(
        <div className={"div-header"}>
            { props.children }
        </div>
    );
}