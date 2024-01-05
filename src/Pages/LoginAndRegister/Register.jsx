import './Login.scss'
import { Player } from '@lottiefiles/react-lottie-player'
import loginAnimation from '../../assets/loginAnimation.json'
import { LoginForm } from '../../Components'


const Register = () => {

  return (
    <div className='login'>
      <div className="display centerElements">
        <div className="loginAni">
          <Player src={loginAnimation} autoplay loop/>
        </div>
      </div>
      <div className="logForm centerElements">
        <LoginForm type="Register" />
      </div>
    </div>

  )
}

export default Register