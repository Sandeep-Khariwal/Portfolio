import React from 'react';
import { Instagram , FacebookOutlined , LinkOutlined , GitHub} from '@mui/icons-material';

const Footer = () => {
return (
<footer id='footer' >

<div className='leftFooter'>
  <h1>My-Portfolio</h1>
  <p>Learnings is my first priority</p>
  <p>copyrights 2023 &copy; MeSandeepKhariwal</p>
</div>

<div className='rightFooter'>
  <h4>Get in Touch</h4>
  <a href='https://github.com/Sandeep-Khariwal'><GitHub/></a>
  <a href='https://www.linkedin.com/in/sandeep-khariwal-95b65522b'><LinkOutlined/></a>
  <a href='http://instagram.com/sandeep_khariwal'><Instagram/></a>
  <a href='https://www.facebook.com/sandeep.kharival.3?mibextid=ZbWKwL'><FacebookOutlined/></a>
</div>

</footer>
  )
}

export default Footer