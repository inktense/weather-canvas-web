import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const getWeather = () => 
    navigate({
        pathname: '/weather',
        search: `?location:test`
    })

    return (
        <div className='c-formContainer'>
            <form className='c-form'>
                <input className='c-form__input' type="text" name="location" placeholder="Location"></input>
                <label className='c-form__buttonLabel' for='checkbox'>
                    <button className='c-form__button'  type="button" onClick={getWeather} >Send</button>
                </label>
            </form>
        </div>
    )
  };
  
  export default Home;
  