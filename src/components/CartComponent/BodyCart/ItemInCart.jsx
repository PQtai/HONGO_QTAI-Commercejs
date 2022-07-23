import clsx from "clsx";
import React, { useState ,useEffect} from "react";
import { Button, ItemOption } from "../../../assets/styles/globalStyles";
import styles from "../CartComponent.module.scss";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { commerce } from "../../../lib/commerce";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, setCart } from "../../../redux";
import ClearIcon from '@mui/icons-material/Clear';

const ItemInCart = ({ 
  product,
  index 
}) => {
  const cart = useSelector(cartSelector);

  const [chooseVariant, setChooseVariant] = useState(false);

  const elementUpdateCart = useRef();
  const ifCancelDisable = useRef([]);
  const [quantityPurchasedPerItem, setQuantityPurchasedPerItem] = useState(product.quantity);
  const itemOption = useRef([]);
  const dispatch = useDispatch();
  const customVariantData = useRef({
    options: {},
  });
  let [disabled, setDisabled] = useState(true);
  const elementEdit = useRef();
  const [variantGroups, setVariantGroups] = useState();
  const handleChooseVariant = ()=>{
    setChooseVariant(true);
    setDisabled(true);
  }

  const handleDeleteProductWhenDuplicate = async (itemId)=>{
    await commerce.cart.remove(itemId)
      .then(({cart}) => {
        dispatch(setCart(cart));
      })
      .catch((error) => {
        console.log(error);
      });
    ifCancelDisable.current = [];
    setChooseVariant(false);
  }
  const handleUpdateProductWhenDuplicate = async (itemId , customQuantity ,currentQuantity)=>{
    await commerce.cart.update(itemId, {quantity: currentQuantity*1 + customQuantity})
        .then((response) => {
          dispatch(setCart(response.cart));
        })
        .catch((error) => {console.log(error);});
  }

  
  const handleProductsDuplicate =  (productId , chooseVariants , indexChooseCurrent) => {
    let countVariants = 0;
    let itemUpdate = {};
    cart.line_items.forEach((lineItem , index) => {
      if (lineItem.product_id === productId && index !== indexChooseCurrent) {
        itemUpdate = lineItem;
        lineItem.selected_options.forEach( (option, indexOption) => {
          if(Object.keys(chooseVariants).includes(option.group_id) && chooseVariants[option.group_id] === option.option_id) {
            countVariants+=1;
          }
        })
      }
    });
    return {countVariants: countVariants,itemUpdate: itemUpdate};
  }
  
  const handleUpdateProduct = async (itemId ,productId, variantGroupsData) => {
    const {countVariants, itemUpdate} =  handleProductsDuplicate(productId ,variantGroupsData.options , index);
    if (countVariants === Object.keys(variantGroupsData.options).length) {
      await handleDeleteProductWhenDuplicate(itemId);
      await handleUpdateProductWhenDuplicate(itemUpdate.id,quantityPurchasedPerItem , itemUpdate.quantity);
    }else{
      variantGroupsData['quantity'] = quantityPurchasedPerItem;
      await commerce.cart.update(itemId, variantGroupsData)
          .then((response) => {
            dispatch(setCart(response.cart));
            setDisabled(false);
          })
          .catch((error) => {console.log(error);});
      ifCancelDisable.current = [];
      setChooseVariant(false);
    }
  }
  const handleCanelProduct = () => {
    setChooseVariant(false);
    setQuantityPurchasedPerItem(product.quantity);
    ifCancelDisable.current = [];
    setDisabled(true);
  }
  const handleIncreaseNumber = () => {
    if(quantityPurchasedPerItem < 40){
      setQuantityPurchasedPerItem((prevState)=> prevState + 1);
    }
  }
  const handleReductionOfQuantity = () => {
    if(quantityPurchasedPerItem > 1){
      setQuantityPurchasedPerItem((prevState)=> prevState - 1);
    }
  }
  const handleOnblurInputQuantily = () => {
    if (quantityPurchasedPerItem < 1) {
      setQuantityPurchasedPerItem(1)
    } else if (quantityPurchasedPerItem > 40) {
      setQuantityPurchasedPerItem(40);
    }
  }
  const setVariantData = (groupId, optionId) => {
    customVariantData.current['options'] = {
      ...customVariantData.current['options'],
      [groupId] : optionId,
    };
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
      if(variantGroups.length === ifCancelDisable.current.length ){
        setDisabled(false);
      }
    }
  };
  const handleDeleteProduct = (itemId)=>{
    let message = `Are you sure you want to delete ${product.name} product?`;
    if (window.confirm(message)){
      commerce.cart.remove(itemId)
        .then(({cart}) => {
          dispatch(setCart(cart));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  useEffect(()=>{
    const fetchVariantGroups = async () => {
      await commerce.products
        .retrieve(product.product_id)
        .then((product) => setVariantGroups(product.variant_groups))
        .catch((error) => {
          console.log(error);
        });
    };
    fetchVariantGroups();
  },[product.product_id ]);
  useEffect(()=>{
    setQuantityPurchasedPerItem(product.quantity);
  },[product.quantity]);
  return (
    <ul className={clsx(styles.listProduct)}>
      <li>
        <ClearIcon
        onClick={()=>{
          handleDeleteProduct(product.id);
        }}
        />
      </li>
      <li>
        <div
          className={clsx(styles.imgProduct)}
          style={{
            backgroundImage: "url(" + product?.image?.url + ")",
          }}
        ></div>
      </li>
      <li className={clsx(styles.nameProduct)}>
        <p>{product?.name}</p>
        {chooseVariant? (
          variantGroups?.map((variant, index) => {
            return (
              <div key={index} className={clsx(styles.customVariant)}>
                <span>{variant.name}</span>
                <ul 
                ref={(element) => {
                  itemOption.current[index] = element;
                }}
                className={clsx(styles.listVariant)}>
                  {variant.options.map((option, indexOption) => {
                    return (
                      <ItemOption
                        onClick={(e) => {
                          handleOptionsMe(e.currentTarget, variant.name);
                          setVariantData(variant.id, option.id);
                        }}
                        key={indexOption}
                        className={"item-option-" + variant.name}
                        color={option.name}
                      >
                        {variant.name === "Size" ? option.name : ""}
                      </ItemOption>
                    );
                  })}
                </ul>
              </div>
            );
          })
        ) : (
          <div className={clsx(styles.variantGroups)}>
            {product?.selected_options?.map((option, index) => {
              return (
                <p key={index}>
                  <span>{option.group_name} :</span>
                  <span>{option.option_name}</span>
                </p>
              );
            })}
          </div>
        )}
      </li>
      <li>{product?.price?.formatted_with_symbol}</li>
      <li className={clsx(styles.itemQuantity , {
        disable: !variantGroups?.length,
      })}>
        {chooseVariant ? 
          <>
          <input
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
            <Button
            onClick={handleIncreaseNumber}
            >+</Button>
            <Button
            onClick={handleReductionOfQuantity}
            >-</Button>
          </div>
          </>:<span>{product.quantity}</span>
      }
      </li>
      <li>{product?.line_total?.formatted_with_symbol}</li>
      <li className={clsx(styles.editProduct)}>
        {!chooseVariant?(
          <Button
          className={clsx(styles.btnEdit)}
          ref={elementEdit}
          onClick={handleChooseVariant}
        >
          <EditSharpIcon />
        </Button>
        ):
        (<div 
          ref={elementUpdateCart}
          className={clsx(styles.btnUpdateCart)}>
            <Button
            onClick={()=>{
              handleUpdateProduct(product.id ,product.product_id ,customVariantData.current);
            }}
            className={clsx(styles.btnConfirm ,{
              disable : disabled,
            })}
            >Xác nhận</Button>
            <Button
            onClick={handleCanelProduct}
            >Huỷ</Button>
          </div>)
        }
      </li>
    </ul>
  );
};

export default ItemInCart;
