import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  cartSelector,
  setDisplayOverlay,
  setItemPropOverlay,
} from "../../redux";
import ElementSearch from "../ElementSearch/ElementSearch";
import CustomCart from "./CustomCart";

const NavInfo = ({ styles, clsx }) => {
  const dispath = useDispatch();
  const cart = useSelector(cartSelector);
  console.log(cart);
  const isEmpty = !cart?.total_items;
  const handleSearchBtn = () => {
    dispath(setItemPropOverlay(<ElementSearch />));
    dispath(setDisplayOverlay(true));
  };
  return (
    <div className={clsx(styles.navInfo)}>
      <ul
        className={clsx(styles.navList, {
          dFlex: true,
        })}
      >
        <li onClick={handleSearchBtn} className={clsx(styles.navItem)}>
          <SearchIcon />
        </li>
        <li className={clsx(styles.navItem)}>
          <PersonOutlineSharpIcon />
        </li>
        <li className={clsx(styles.navItem)}>
          <FavoriteBorderSharpIcon />
        </li>
        <li className={clsx(styles.navItem, styles.navCart)}>
          <ShoppingCartOutlinedIcon />
          <span className={clsx(styles.itemQuantity)}>
            {cart?.total_items}
          </span>
          {isEmpty ? (
            <CustomCart styles={styles} productInCart={""} />
          ) : (
            <CustomCart styles={styles} productInCart={cart.line_items} cart={cart} />
          )}
        </li>
      </ul>
    </div>
  );
};

export default React.memo(NavInfo);
