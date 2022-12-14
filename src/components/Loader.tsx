import './Loader.scss';

type LoaderProps = {
    text?: string;
    width: number;
    height: number;
};

function Loader(props: LoaderProps) {
    return (
        <svg 
            width={props.width}
            height={props.height}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill='#6C757D'
            className='spinner'
        >
            <circle className="spinner_DupU" cx="12" cy="3" r="0"/>
            <circle className="spinner_DupU spinner_GWtZ" cx="16.50" cy="4.21" r="0"/>
            <circle className="spinner_DupU spinner_n0Yb" cx="7.50" cy="4.21" r="0"/>
            <circle className="spinner_DupU spinner_dwN6" cx="19.79" cy="7.50" r="0"/>
            <circle className="spinner_DupU spinner_GIL4" cx="4.21" cy="7.50" r="0"/>
            <circle className="spinner_DupU spinner_46QP" cx="21.00" cy="12.00" r="0"/>
            <circle className="spinner_DupU spinner_DQhX" cx="3.00" cy="12.00" r="0"/>
            <circle className="spinner_DupU spinner_PD82" cx="19.79" cy="16.50" r="0"/>
            <circle className="spinner_DupU spinner_tVmX" cx="4.21" cy="16.50" r="0"/>
            <circle className="spinner_DupU spinner_eUgh" cx="16.50" cy="19.79" r="0"/>
            <circle className="spinner_DupU spinner_j38H" cx="7.50" cy="19.79" r="0"/>
            <circle className="spinner_DupU spinner_eUaP" cx="12" cy="21" r="0"/>
        </svg>
    );
}

export default Loader;
