import { useState, useEffect } from "react";
import { Drawer } from "antd";
import NavItem from "./NavItem";
import HamMenu from "./HamMenu";
import BagSummary from "./BagSummary";

export default function NavBar() {
  const [isOnTouch, setIsOnTouch] = useState(false);
  const handleCloseDrawer = () => setIsOnTouch(false);

  useEffect(() => {
    const myNav = document.getElementById("myNav");
    const sticky = myNav.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        myNav.classList.add("sticky");
      } else {
        myNav.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <div className="navBar__wrap" id="myNav">
      <div className="navBar__hr--line" />
      <HamMenu onClick={() => setIsOnTouch(!isOnTouch)} isOnTouch={isOnTouch} />
      <div className="navBar collapse__mobile">
        <NavItem
          to="/pokes/kanto"
          className="nav__item"
          activeClassName="nav__item--active"
        >
          關都
        </NavItem>
        <NavItem
          to="/pokes/johto"
          className="nav__item"
          activeClassName="nav__item--active"
        >
          成都
        </NavItem>
        <NavItem
          to="/pokes/hoenn"
          className="nav__item"
          activeClassName="nav__item--active"
        >
          豐緣
        </NavItem>
        <NavItem
          to="/pokes/sinnoh"
          className="nav__item"
          activeClassName="nav__item--active"
        >
          神奧
        </NavItem>
        <NavItem
          to="/pokes/unova"
          className="nav__item"
          activeClassName="nav__item--active"
        >
          合眾
        </NavItem>
        <NavItem
          to="/pokes/kalos"
          className="nav__item"
          activeClassName="nav__item--active"
        >
          卡洛斯
        </NavItem>
        {/* <NavItem to="/pokes/galar" className="nav__item" activeClassName="nav__item--active">
          伽勒爾
        </NavItem> */}
        <NavItem
          to="/admin/feed-pokes"
          className="nav__item"
          activeClassName="nav__item--active"
        >
          FEED
        </NavItem>
      </div>
      <Drawer
        title=" "
        placement={"left"}
        closable={false}
        onClose={handleCloseDrawer}
        visible={isOnTouch}
        key={"top"}
        width={400}
        zIndex={99}
        bodyStyle={{ backgroundColor: "#FCFAF2" }}
        headerStyle={{ backgroundColor: "#FCFAF2", color: "#000" }}
      >
        <NavItem
          onClose={handleCloseDrawer}
          to="/pokes/kanto"
          className="nav__item"
          activeClassName="nav__item--active"
        >
          關都
        </NavItem>
        <NavItem
          onClose={handleCloseDrawer}
          to="/pokes/johto"
          className="nav__item"
          activeClassName="nav__item--active"
        >
          成都
        </NavItem>
        <NavItem
          onClose={handleCloseDrawer}
          to="/pokes/hoenn"
          className="nav__item"
          activeClassName="nav__item--active"
        >
          豐緣
        </NavItem>
        <NavItem
          onClose={handleCloseDrawer}
          to="/pokes/sinnoh"
          className="nav__item"
          activeClassName="nav__item--active"
        >
          神奧
        </NavItem>
        <NavItem
          onClose={handleCloseDrawer}
          to="/pokes/unova"
          className="nav__item"
          activeClassName="nav__item--active"
        >
          合眾
        </NavItem>
        <NavItem
          onClose={handleCloseDrawer}
          to="/pokes/kalos"
          className="nav__item"
          activeClassName="nav__item--active"
        >
          卡洛斯
        </NavItem>
        {/* <NavItem
          onClose={handleCloseDrawer}
          to="/pokes/galar"
          className="nav__item"
          activeClassName="nav__item--active"
        >
          伽勒爾
        </NavItem> */}
        <NavItem
          to="/admin/feed-pokes"
          className="nav__item"
          activeClassName="nav__item--active"
        >
          FEED
        </NavItem>
      </Drawer>
      <div className="navBar__hr--line" />
    </div>
  );
}
