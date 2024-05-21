
// import { UserCard } from '../entities/user-card/user-card'
import { GetSection } from '../features/get-section/get-section'
import { Header } from '../features/header/header'
import { Hero } from '../features/hero/hero'
import { PostSection } from '../features/post-section/post-section'
// import { RegistrationForm } from '../features/registration-form/registration-form'
// import { User } from '../shared'
// import { Avatar } from '../shared/UI/avatar/avatar'
// import { Button } from '../shared/UI/button/button'
// import { Input } from '../shared/UI/input/input'
// import { Preloader } from '../shared/UI/preloader/preloader'
// import { RadioButton } from '../shared/UI/radio-buttons/radio-buttons'
// import { Tooltip } from '../shared/UI/tooltip/tooltip'
// import { ButtonTypes } from '../shared/constants/enums/button-enum'
// import { Positions } from '../shared/constants/enums/positions-enum'
// import { UserSignUpJoiDto } from '../shared/constants/types/user-sign-up-joi-request-dto'
// import { UserSignUpRequestDto } from '../shared/constants/types/user-sign-up-request-dto'
import './styles/index.scss'

// const USER: User = {
//   id: '1',
//   name: 'John Doe',
//   email: 'some@gmail.com',
//   phone: '+380999999999',
//   position: Positions.FRONTEND_DEVELOPER,
//   position_id: '1',
//   registration_timestamp: 123456789,
//   photo:"https://randomuser.me/api/portraits/men/43.jpg"
// }


function App() {

  return (
    <>
    <Header/>
    <Hero/>
    <GetSection/>
    <PostSection/>

      {/* <Button onClick={handleClick}>Save</Button>
      <Button variant={ButtonTypes.BLUE} onClick={handleClick}>Save</Button>
      <Button disabled onClick={handleClick}>Save</Button>
      <Input onChange={() => {}} label='sdfsdf' placeholder='Label'/>
      <Input onChange={() =>{}} label='sdfsdf'  placeholder='Label' hasError/>
      <br />
      <br />
      <br />
      <br />
      <Avatar/>
      <br />
      <Preloader/>
      <br />
      <br />
      <Tooltip text='Kill all nigas aaaaaaaaaaaaaa'>
        Hover me sdfsfsdfs
      </Tooltip>
      <br />
      <RadioButton label='Javascript'/>
      <br />
      <br />
      <br />
      <UserCard user={USER}/> */}
    </>
  )
}

export default App
