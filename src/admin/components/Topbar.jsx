import { useContext} from 'react';
import React from 'react';
import "./Topbar.css";
import Logo from "../../assets/mlrun.png";
import AppContext from '../../services/AppContext';

const Topbar = (props) => {
    const {admin, setAdmin} = useContext(AppContext);

    return (
        <div className='comp-topbar'>
            <div className="logo" onClick={() => setAdmin(false)}>
                    <img src={Logo} />
                </div>
        </div>
    )
};

export default Topbar;