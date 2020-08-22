import React,{Component} from 'react';
import {
    FaMapMarker,
    FaEnvelope,
    FaMobile
  } from 'react-icons/fa';
class Address extends Component{
    render(){
        return(
            <>
                <p><FaMapMarker/> <a href="https://www.google.com/maps?q=14373+82b+Ave,+Surrey,+BC+V3W+0J4&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjj8KCqipLrAhWuKDQIHc_LCEMQ_AUoAXoECAwQAw">14373 82b Ave, Surrey, BC V3W 0J4</a></p>
                <p><FaEnvelope/> <a href="mailto:karandeep.virk@yahoo.com">karandeep.virk@yahoo.com</a></p>
                <p><FaMobile/> <a href="tel:204-898-7629">204-898-7629</a></p>
            </>
        );
    }
}

export default Address;