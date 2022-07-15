import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { search_parametersSelector, setPostType } from '../../redux';

const NavNavigate = ({styles , clsx}) => {
  const itemNavigates = ['Home','Shop','Sale','Pages','Blog'];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search_parameters = useSelector(search_parametersSelector)
  const {post_type} = search_parameters;
  return (
    <div className={clsx(styles.navNavigate)} >
      <ul className={clsx(styles.navList, {
        dFlex : true
      })} >
        {itemNavigates.map((item, index) => {
            return (
              <li  
              className={clsx(styles.navItem)}
              onMouseDown={(event) =>{
                dispatch(setPostType('in shop'));
              }}
              onClick={()=>{
                if(item.toLocaleLowerCase() === 'shop'){
                  navigate(`/shop/search=${item}&post_type=${post_type}`);
                }else if(item.toLocaleLowerCase() === 'home'){
                  navigate('/HONGO_QTAI-Commercejs');
                }
              }}
              key={index} >{item}</li>
            )
        })}
      </ul>
    </div>
  )
}

export default React.memo(NavNavigate);
