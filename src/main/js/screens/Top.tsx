import React from "react";
import {Link} from "react-router-dom";

const Top: React.FC = () => {
    let str: string = "React + TypeScript on Spring Boot!";
    return (
        <>
            <p>{str}</p>
            <Link to="/hello">はろーへ</Link>
        </>
    );
};

export default Top;
