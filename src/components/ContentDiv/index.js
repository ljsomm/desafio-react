import './styles.css';

const ContentDiv = props => {
    return(
        <div className={"content-div"}>
            {props.children}
        </div>
    );
}

export default ContentDiv;