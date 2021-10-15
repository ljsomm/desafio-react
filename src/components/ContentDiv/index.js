import './styles.css';

export default props => {
    return(
        <div className={"content-div"}>
            {props.children}
        </div>
    );
}