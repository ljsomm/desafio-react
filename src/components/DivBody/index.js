import './styles.css';

const DivBody =  props => {
    return(
        <div className={"div-body"}>
            { props.children }
        </div>
    );
}

export default DivBody;