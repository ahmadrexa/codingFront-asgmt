import { Fragment } from "react";
import HeaderTools from "./headeTools";
import Logo from "./Logo";
import Menu from "./menu";
import "./style.css"
export function Header(){
    return (
        <Fragment>
            <Menu/>
            <Logo/>
            <HeaderTools/>
        </Fragment>
    )
}
export default Header;