import "./NavbarGuest.css";
import { LogoPlaceholder } from "../LogoPlaceholder/LogoPlaceholder.jsx";
import { MenuItemProperty1Default } from "../MenuItemProperty1Default/MenuItemProperty1Default.jsx";
import { MasukProperty1Default } from "../MasukProperty1Default/MasukProperty1Default.jsx";
import { DaftarProperty1Default } from "../DaftarProperty1Default/DaftarProperty1Default.jsx";

export const NavbarGuest = ({ className, ...props }) => {
  return (
    <div className={"navbar-guest " + className}>
      <div className="frame-24">
        <LogoPlaceholder className="logo-placeholder-instance"></LogoPlaceholder>
        <div className="frame-23">
          <MenuItemProperty1Default className="menu-item-instance"></MenuItemProperty1Default>
          <MenuItemProperty1Default className="menu-item-instance"></MenuItemProperty1Default>
          <MenuItemProperty1Default className="menu-item-instance"></MenuItemProperty1Default>
          <MenuItemProperty1Default className="menu-item-instance"></MenuItemProperty1Default>
        </div>
      </div>
      <div className="frame-11">
        <MasukProperty1Default className="masuk-instance"></MasukProperty1Default>
        <DaftarProperty1Default className="daftar-instance"></DaftarProperty1Default>
      </div>
    </div>
  );
};
