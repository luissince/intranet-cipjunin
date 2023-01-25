import React, { useEffect } from 'react';
import '../../assets/css/loader.css';


const Load = () => {
    return (
        <>
            <div className="loader text-center">
                <div className="loader-inner">

                    <div className="lds-roller mb-3">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <h4 className="text-uppercase font-weight-bold">Cargando...</h4>
                    <p className="font-italic text-muted">Se está estableciendo conexión con el servidor...</p>
                </div>
            </div>
        </>
    );
}

export default Load;