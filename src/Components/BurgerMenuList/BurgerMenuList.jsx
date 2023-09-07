import React from "react";
import styles from "./BurgerMenuList.module.css";
import { headerLinks } from "../../data/DataProject";
import { Link } from "react-router-dom";
import { BiDownArrowAlt } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";

export const BurgerMenuList = ({ isOpenMenu, setIsOpenMenu }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);
  return (
    <AnimatePresence>
      <motion.div
        className={styles["burger-menu"]}
        initial={{ opacity: 0, visibility: "hidden" }}
        animate={{
          opacity: isOpenMenu ? 1 : 0,
          visibility: isOpenMenu ? "visible" : "hidden",
        }}
        exit={{ opacity: 0, visibility: "hidden" }}
        transition={{ duration: 0.3 }}
      >
        <ul className={styles["burger-menu__list"]}>
          {headerLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              onClick={() =>
                link.children
                  ? setIsSubMenuOpen((prev) => !prev)
                  : setIsOpenMenu(false)
              }
            >
              <li className={styles["burger-menu__link"]}>
                <span>
                  {link.title}
                  {link.children && (
                    <BiDownArrowAlt
                      style={{
                        transform: isSubMenuOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    />
                  )}
                </span>
                {link.children && isSubMenuOpen && (
                  <ul className={styles["dropdown-menu"]}>
                    {link.children.map((child) => (
                      <Link
                        to={child.path}
                        onClick={() => setIsOpenMenu((prev) => !prev)}
                      >
                        <li className={styles['burger-menu__link-child']}>{child.title}</li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            </Link>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};
