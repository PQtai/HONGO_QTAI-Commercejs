import React, { useRef ,useState} from 'react'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import parse from "html-react-parser";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { infoToastMessSelector, setCart, setDisplayOverlay, setInfoToastMess, setItemPropOverlay } from '../../redux';
import { commerce } from '../../lib/commerce';
import { Button, ItemOption } from '../../assets/styles/globalStyles';
const Details = ({productDetail , styles ,idProduct}) => {
  const itemOption = useRef([]);
  const ifCancelDisable = useRef([]);
  const customVariantData = useRef({});
  const elementInputQuantity = useRef();
  let [disabled, setDisabled] = useState(true);
  let [disabledNoOptions, setDisabledNoOptions] = useState(false);
  const dispatch = useDispatch();
  const [quantityPurchasedPerItem, setQuantityPurchasedPerItem] = useState(1);
  const infoToastMess = useSelector(infoToastMessSelector);
  const customToastMess = useRef({ ...infoToastMess });
  const handleIncreaseNumber = () => {
    setQuantityPurchasedPerItem((prevState) => prevState + 1);
  };
  const handleReductionOfQuantity = () => {
    if (quantityPurchasedPerItem < 2) {
      setQuantityPurchasedPerItem(1);
    } else {
      setQuantityPurchasedPerItem((prevState) => prevState - 1);
    }
  };
  const handleOnblurInputQuantily = () => {
    if (quantityPurchasedPerItem < 1) {
      setQuantityPurchasedPerItem(1);
    } else if (quantityPurchasedPerItem > 40) {
      setQuantityPurchasedPerItem(40);
    }
  };
  const handleOptionsMe = (currentOption, name) => {
    if(!ifCancelDisable.current.includes(name)) {
      ifCancelDisable.current.push(name);
    }
    if (itemOption.current.length > 0) {
      for (const iterator of itemOption.current) {
        [...iterator.children].forEach((element) => {
          if (
            currentOption.classList.contains(`item-option-${name}`) &&
            element.classList.contains(`item-option-${name}`)
          ) {
            element.classList.remove("is-option-me");
          }
        });
      }
      currentOption.classList.add("is-option-me");
      if(productDetail.variant_groups.length === ifCancelDisable.current.length ){
        setDisabled(false);
      }
    }
  };
  const setVariantData = (groupId, optionId) => {
    customVariantData.current[groupId] = optionId;
  };
  const handleToAddCart = (productId, quantity, variantData) => {
    setDisabled(true);
    setDisabledNoOptions(true);
    commerce.cart
      .add(productId, quantity, variantData)
      .then((item) => {
        dispatch(setCart(item.cart));
        customToastMess.current.openToastMess = true;
        customToastMess.current.toastMessage = "success";
        customToastMess.current.message = "Add to cart successfully";
        dispatch(setInfoToastMess(customToastMess.current));
        setDisabled(false);
        setDisabledNoOptions(false);
        dispatch(setDisplayOverlay(false));
        dispatch(setItemPropOverlay(<></>));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <ul className={clsx(styles.listInfo)}>
          <li className={clsx(styles.itemName)}>
            <div className={clsx(styles.name)}>
              <h2>{productDetail?.name}</h2>
              <p>{productDetail?.price?.formatted_with_symbol}</p>
            </div>
            <div className={clsx(styles.sku)}>
              <p>sku: {productDetail?.sku}</p>
            </div>
          </li>
          <li className={clsx(styles.itemIntro)}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </li>
          <li className={clsx(styles.productDetailOptions)}>
            <div className={clsx(styles.optionsWrap)}>
              {/* filter and retrieve productDetail variations if any */}
              {productDetail?.variant_groups?.map((item, index) => {
                return (
                  <ul
                    ref={(element) => {
                      itemOption.current[index] = element;
                    }}
                    key={index}
                    className={clsx(styles.listOptions)}
                  >
                    <span>{item.name}</span>
                    {item.options.map((option, indexOption) => {
                      return (
                        <ItemOption
                          onClick={(e) => {
                            handleOptionsMe(e.currentTarget, item.name);
                            setVariantData(item.id, option.id);
                          }}
                          className={"item-option-" + item.name}
                          key={indexOption}
                          color={option.name}
                        >
                          {item.name === "Size" ? option.name : ""}
                        </ItemOption>
                      );
                    })}
                  </ul>
                );
              })}
              <div className={clsx(styles.price)}>
                {productDetail?.price?.formatted_with_symbol}
              </div>
              <div className={clsx(styles.optionAdd)}>
                <div
                  className={clsx(styles.toggleQuantity)}
                >
                  <input
                    ref={elementInputQuantity}
                    onBlur={handleOnblurInputQuantily}
                    onChange={(e) => {
                      setQuantityPurchasedPerItem(e.target.value);
                    }}
                    value={quantityPurchasedPerItem}
                    type="number"
                    min="1"
                    max="40"
                    name="quantity"
                  />
                  <div className={clsx(styles.btnToggle)}>
                    <Button onClick={handleIncreaseNumber}>+</Button>
                    <Button onClick={handleReductionOfQuantity}>-</Button>
                  </div>
                </div>
                <Button
                  onClick={(e) => {
                    if(e.target.classList.contains('disable')){
                      e.stopPropagation();
                    }else{
                      handleToAddCart(
                        productDetail.id,
                        elementInputQuantity.current.value,
                        customVariantData.current
                      );
                    }
                  }}
                  className={clsx(styles.btnAdd, {
                    disable:
                      productDetail?.variant_groups?.length? disabled : disabledNoOptions,
                  })}
                >
                  ADD TO CART
                </Button>
              </div>
              <Button className={clsx(styles.btnAddToWishlist)}>
                <FavoriteBorderIcon />
                ADD TO WISHLIST
              </Button>
            </div>
          </li>
          <li className={clsx(styles.itemDescription)}>
            <span>Description:</span>
            <div className={clsx(styles.description)}>
              {parse(productDetail?.description)}
            </div>
            {!idProduct? <Button>view detail</Button>:''}
          </li>
          <li className={clsx(styles.paymentCart)}>
            <ul className={clsx(styles.listIcon)}>
              <li className={clsx(styles.itemIcon)}>
                <FacebookIcon />
              </li>
              <li className={clsx(styles.itemIcon)}>
                <TwitterIcon />
              </li>
              <li className={clsx(styles.itemIcon)}>
                <LinkedInIcon />
              </li>
              <li className={clsx(styles.itemIcon)}>
                <InstagramIcon />
              </li>
              <li className={clsx(styles.itemIcon)}>
                <PinterestIcon />
              </li>
            </ul>
          </li>
        </ul>
  )
}

export default Details
