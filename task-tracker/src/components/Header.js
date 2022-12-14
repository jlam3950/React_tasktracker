import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({toggle, btnProp }) => {
  return (
    <>
    <div className = 'header_container'>
        <div className = 'header'>
            {/* <h1>{props.title} </h1> */}
            <h1> Task Tracker </h1>
            <Button color ={btnProp ? 'red' : 'green'} text = {btnProp ? 'Close' : 'Add'} toggle ={toggle} />
            {/* <Button color ='red' text = 'Test' /> */}

        </div>
    </div>
        {/* <h1 style ={{ color: 'red', backgroundColor: 'black'}}>{props.title}</h1> */}
        {/* double {{}} for inline styles */}
    </>
  )
}

// Header.defaultProps = {
//     title: 'Task Tracker',
// }

Header.propTypes = {
    title: PropTypes.string.isRequired,
    // this ensures that the passed value is of the correct data type 
}

// const headingStyle = {
// color: 'red',
// backgroundColor: 'black',
// }

export default Header