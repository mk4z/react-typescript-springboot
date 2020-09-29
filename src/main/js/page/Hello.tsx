import React from "react";
import {Link} from "react-router-dom";

const Hello: React.FC = () => {
    return (
        <>
            <p>Hello World!</p>
            <Link to="/">topへ</Link>
        </>
    );
};

export default Hello;
