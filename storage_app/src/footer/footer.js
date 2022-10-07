import './footer.scss';


const Footer = (props) => {


    const {onPrepareReport, reportOutput} = props;
    return (
        <div className="footer_container">
            <div className="footer_output">
                <div className="footer_output_area">
                    {reportOutput}
                </div>
            </div>
            <div className="footer_btn_container">
                <button
                    type="button" 
                    className="footer_form_report_btn"
                    onClick={ () => onPrepareReport() }>
                    Сформировать список покупок
                </button>
            </div>
        </div>
    )
}

export default Footer;

