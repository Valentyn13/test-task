
import { UserCard } from '../entities/user-card/user-card'
import { Header } from '../features/header/header'
import { User } from '../shared'
import { Avatar } from '../shared/UI/avatar/avatar'
import { Button } from '../shared/UI/button/button'
import { FileUploader } from '../shared/UI/file-uploader/file-uploader'
import { Input } from '../shared/UI/input/input'
import { Preloader } from '../shared/UI/preloader/preloader'
import { RadioButton } from '../shared/UI/radio-buttons/radio-buttons'
import { Tooltip } from '../shared/UI/tooltip/tooltip'
import { ButtonTypes } from '../shared/constants/enums/button-enum'
import './styles/index.scss'

const USER: User = {
  id: '1',
  name: 'John Doe',
  email: 'some@gmail.com',
  phone: '+380999999999',
  position: 'Frontend developer',
  position_id: '1',
  registration_timestamp: 123456789,
  photo:"https://randomuser.me/api/portraits/men/43.jpg"
}


function App() {

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <>
    <Header/>
      <Button onClick={handleClick}>Save</Button>
      <Button type={ButtonTypes.BLUE} onClick={handleClick}>Save</Button>
      <Button disabled onClick={handleClick}>Save</Button>
      <Input onChange={() => {}} label='sdfsdf' placeholder='Label'/>
      <Input onChange={() =>{}} label='sdfsdf'  placeholder='Label' hasError/>
      <br />
      <br />
      <FileUploader onFileLoad={(file:File) => console.log(file)}/>
      <br />
      <FileUploader hasError errorText='Error' onFileLoad={(file:File) => console.log(file)}/>
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
      <UserCard user={USER}/>
    </>
  )
}

export default App
