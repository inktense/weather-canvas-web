import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate();
    const getWeather = () => 
    navigate({
        pathname: `/weather/${search}`,
        options: {
            state: 'state test'
        }
       
    })

    const onChangeText = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className='c-formContainer'>
            <form className='c-form'>
                <input className='c-form__input' type="text" name="location" placeholder="Location" onChange={onChangeText}/>
                <label className='c-form__buttonLabel'>
                    <button className='c-form__button'  type="button" onClick={getWeather} >Send</button>
                </label>
            </form>
        </div>
    )
  };
  
  export default Home;
  