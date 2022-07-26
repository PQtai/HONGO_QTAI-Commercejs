import { Grid, Select } from "@mui/material";
import clsx from "clsx";
import React, { useState } from "react";
import styles from "../BodyCheckout.module.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { commerce } from "../../../../lib/commerce";
import { useEffect } from "react";
import {Button} from '../../../../assets/styles/globalStyles';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const FormAddress = ({ checkoutToken , next }) => {
  const [disableBtnNext , setDisableBtnNext] = useState(true);
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({ id: code, label: name })
  );

  const options = shippingOptions.map((sO) => ({
    id : sO.id,
    label: `${sO.description} - ${sO.price.formatted_with_symbol}`,
  }));
  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };
  const fetchShippingSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };
  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );
    setShippingOptions(options);
    setShippingOption(options[0].id);
  };
  useEffect(() => {
    fetchShippingCountries(checkoutToken?.id);
  }, []);
  useEffect(() => {
    shippingCountry && fetchShippingSubdivisions(shippingCountry);
  }, [shippingCountry]);
  useEffect(() => {
    shippingSubdivision &&
      fetchShippingOptions(
        checkoutToken?.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);
// useEffect(() => {
//     formik.resetForm();
// },[overlay , displayFormRegister])
const formik = useFormik({
    initialValues: {
        first_name: "",
        last_name: "",
        address: "",
        email: "",
        city: "",
        postal_code: "",
    },
    validationSchema: Yup.object({
        first_name: Yup.string()
        .required("This field cannot be left blank")
        .min(2, "The first name must have at least 2 characters"),
        last_name: Yup.string()
        .required("This field cannot be left blank")
        .min(2, "The first name must have at least 2 characters"),
        address: Yup.string()
        .required("This field cannot be left blank")
        .min(2, "Address must be longer than 10 characters"),
        email: Yup.string()
        .required("This field cannot be left blank")
        .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Invalid email"),
        city: Yup.string()
        .required("This field cannot be left blank")
        .min(2, "City must be longer than 3 characters"),
        postal_code: Yup.string()
        .required("This field cannot be left blank")
        .matches(/^\d{5}(?:[-]?\d{4})?$/, "postal code invalid"),
    }),
    onSubmit: (values) => {
        next({...values , shippingCountry , shippingSubdivision , shippingOption});
    }
});
useEffect(() => {
    const handleDisabledBtnNext = () => {
        if (!Object.keys(formik.errors).length) {
            setDisableBtnNext(false);
        }
    }
    handleDisabledBtnNext();
},[formik.errors]);
  return (
    <form 
    onSubmit={formik.handleSubmit}
    className={clsx(styles.formAddress)}>
      <Grid container spacing={1}>
        <Grid className={clsx(styles.wrapTextField)} item md={6} sm={6} xs={12}>
          <input
            className={clsx(styles.inputInfo)}
            type="text"
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            placeholder="First name..."
          ></input>
          {(formik.errors.first_name ) && (
                <p className={clsx(styles.errorMsg)}>{formik.errors.first_name}</p>
           )}
        </Grid>
        <Grid className={clsx(styles.wrapTextField)} item md={6} sm={6} xs={12}>
          <input
            className={clsx(styles.inputInfo)}
            type="text"
            name="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            placeholder="Last name..."
          ></input>
          {formik.errors.last_name && (
                <p className={clsx(styles.errorMsg)}>{formik.errors.last_name}</p>
           )}
        </Grid>
        <Grid className={clsx(styles.wrapTextField)} item md={6} sm={6} xs={12}>
          <input
            className={clsx(styles.inputInfo)}
            name="address"
            value={formik.values.address}
            type="text"
            onChange={formik.handleChange}
            placeholder="Address..."
          ></input>
          {formik.errors.address && (
                <p className={clsx(styles.errorMsg)}>{formik.errors.address}</p>
           )}
        </Grid>
        <Grid className={clsx(styles.wrapTextField)} item md={6} sm={6} xs={12}>
          <input
            className={clsx(styles.inputInfo)}
            name="email"
            value={formik.values.email}
            type="text"
            onChange={formik.handleChange}
            placeholder="Email..."
          ></input>
          {formik.errors.email && (
                <p className={clsx(styles.errorMsg)}>{formik.errors.email}</p>
           )}
        </Grid>
        <Grid className={clsx(styles.wrapTextField)} item md={6} sm={6} xs={12}>
          <input
            className={clsx(styles.inputInfo)}
            name="city"
            value={formik.values.city}
            type="text"
            onChange={formik.handleChange}
            placeholder="City..."
          ></input>
          {formik.errors.city && (
                <p className={clsx(styles.errorMsg)}>{formik.errors.city}</p>
           )}
        </Grid>
        <Grid className={clsx(styles.wrapTextField)} item md={6} sm={6} xs={12}>
          <input
            className={clsx(styles.inputInfo)}
            name="postal_code"
            value={formik.values.postal_code}
            type="text"
            onChange={formik.handleChange}
            placeholder="Zip / Postal code..."
          ></input>
          {formik.errors.postal_code && (
                <p className={clsx(styles.errorMsg)}>{formik.errors.postal_code}</p>
           )}
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <InputLabel>Shipping Country</InputLabel>
          <Select
            size="small"
            value={shippingCountry}
            style={{
              width: "90%",
            }}
            onChange={(e) => setShippingCountry(e.target.value)}
          >
            {countries.map((subdivisions) => (
              <MenuItem key={subdivisions.id} value={subdivisions.id}>
                {subdivisions.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <InputLabel>Shipping Subdivisions</InputLabel>
          <Select
            size="small"
            value={shippingSubdivision}
            style={{
              width: "90%",
            }}
            onChange={(e) => setShippingSubdivision(e.target.value)}
          >
            {subdivisions.map((country) => (
              <MenuItem key={country.id} value={country.id}>
                {country.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <InputLabel>Shipping Options</InputLabel>
          <Select
            size="small"
            value={shippingOption}
            style={{
              width: "90%",
            }}
            onChange={(e) => setShippingOption(e.target.value)}
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
            <div className={clsx(styles.customForm)} >
                <Button 
                type="button"
                className={clsx(styles.btnBack)} >Back to cart</Button>
                <Button 
                type="submit"
                className={clsx(styles.btnNext , {
                    disable : disableBtnNext ,
                })}>Next</Button>
            </div>
        </Grid>
      </Grid>
      
    </form>
  );
};

export default FormAddress;
