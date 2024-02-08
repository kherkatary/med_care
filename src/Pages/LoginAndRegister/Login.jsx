import { Player } from '@lottiefiles/react-lottie-player'
import { LoginForm } from '../../Components'
import loginAnimation from '../../assets/loginAnimation.json'
import './Login.scss'


const Login = () => {

  return (
    <div className='login'>
      <div className="display centerElements">
        <div className="loginAni">
          <Player src={loginAnimation} autoplay loop/>
        </div>
      </div>
      <div className="logForm centerElements">
        <LoginForm type="Login" />
      </div>
    </div>

  )
}

export default Login