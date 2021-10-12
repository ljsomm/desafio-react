import './Style.css';
export default props => {
    return(
        <div className={"div-body"}>
            { props.children }
        </div>
    );
}