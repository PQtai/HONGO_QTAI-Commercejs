import React from 'react';
import clsx from 'clsx';
const BasicSelect = ({styles}) => {
  return (
    <div className={clsx(styles.basicSelect)}>
      <select>
            <option value="sapxeptheogia">sapxeptheogia cao den thap</option>
            <option value="sapxeptheogia">sapxeptheogia thap den cao</option>
            <option value="sapxeptheoluotmua">sapxeptheoluotmua</option>
            <option value="sapxeptheo">sapxeptheo...</option>
      </select>
    </div>
  )
}

export default React.memo(BasicSelect);
