import { Fragment } from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FoodoFest</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table" />
      </div>
    </Fragment>
    //since main image consists of - we can't use defaultly.
  )
}

export default Header
