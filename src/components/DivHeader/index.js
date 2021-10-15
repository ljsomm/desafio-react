import './styles.css';

const DivHeader = props => {   
    return(
        <div className={"div-header"}>
            { props.children }
        </div>
    );
}

export default DivHeader;