import MenuBar from "./MenuBar";
import TopBar from "./TopBar";
import styles from "../../../styles/components/Navbar/DesktopNavbar/DesktopNav.module.scss";
import AdvancedSearch from "../AdvancedSearch";
import { useEffect, useState } from "react";
const DesktopMenu = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // nếu cuộn > 100px thì hiện menu
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={styles.desktopMenu}>
      {!scrolled && (
        <div className={styles.topBarWrapper}>
          <TopBar />
        </div>
      )}
      <MenuBar scrolled={scrolled} onSearchOpen={() => setShowSearch(true)} showSearch={showSearch} />
      <AdvancedSearch isOpen={showSearch} setIsOpen={setShowSearch} scrolled={scrolled} />
    </div>
  );
};

export default DesktopMenu;
