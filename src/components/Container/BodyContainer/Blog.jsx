import React from 'react'
import clsx from 'clsx'
import styles from '../Container.module.scss';
import { Grid } from '@mui/material';
const Blog = () => {
    const blogs = [
        {
            image : 'https://hongo.b-cdn.net/wp-content/uploads/2019/03/blog-listing-img106.jpg',
            name : 'ADVENTURE',
            title : 'I see that the fashion wears out more apparel',
            date : '01 March 2022',
            author : 'By Alexis Richards'
        },
        {
            image : 'https://hongo.b-cdn.net/wp-content/uploads/2019/03/blog-listing-img96.jpg',
            name : 'ADVENTURE',
            title : 'Gucci has design and contemporary lifestyle',
            date : '01 March 2022',
            author : 'By Alexis Richards'
        },
        {
            image : 'https://hongo.b-cdn.net/wp-content/uploads/2019/03/blog-listing-img107.jpg',
            name : 'ADVENTURE',
            title : 'A fashion is nothing but an induced epidemic',
            date : '01 March 2022',
            author : 'By Alexis Richards'
        },
        {
            image : 'https://hongo.b-cdn.net/wp-content/uploads/2019/03/blog-listing-img108.jpg',
            name : 'ADVENTURE',
            title : 'A designer is only as good as the star who wears',
            date : '01 March 2022',
            author : 'By Alexis Richards'
        },
    ]
  return (
    <div className={clsx(styles.blogs)} >
        <Grid container spacing={2.2}>
            {blogs.map((blog , index)=>{
                return (
                    <Grid key={index} item md={3} >
                        <div  className={clsx(styles.itemBlog)} >
                            <div 
                            style={{
                                backgroundImage : `url(${blog.image})`,
                            }}
                            className={clsx(styles.img)}/>
                            <div className={clsx(styles.overlay)} ></div>
                            <div className={clsx(styles.wrap)} >
                                <div className={clsx(styles.wrapTop)} >
                                    <p>{blog.name}</p>
                                    <h3>{blog.title}</h3>
                                </div>
                                <div className={clsx(styles.wrapBottom)} >
                                    <p>{blog.date}</p>
                                    <p>{blog.author}</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                )
              })
            }
        </Grid>
    </div>
  )
}

export default Blog
