import './styles.css';

export default props => {
    return(
        <div class={"content-div"}>
            {props.children}
        </div>
    );
}