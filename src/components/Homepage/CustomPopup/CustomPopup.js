import { useEffect, useState } from "react";
import popupStyles from "./CustomPopup.module.css";
import PropTypes from "prop-types";
import ImageGallery from "../ImageGallery/ImageGallery";


const CustomPopup = (props) => {
    const [show, setShow] = useState(false);

    const closeHandler = (e) => {
        setShow(false);
        props.onClose(false);
    };

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    return (
        <div
        style={{
            visibility: show ? "visible" : "hidden",
            opacity: show ? "1" : "0"
        }}
        className={popupStyles.overlay}
        >
        <div className={popupStyles.popup}>
            <h2>{props.title}</h2>
            <span className={popupStyles.close} onClick={closeHandler}> &times; </span>
            <ImageGallery/>
            <div className={popupStyles.content}>{props.children}</div>
        </div>
        </div>
    );
};

CustomPopup.propTypes = {
    title: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};
export default CustomPopup;