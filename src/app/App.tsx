import { Avatar } from '../shared/UI/avatar/avatar'
import { Button } from '../shared/UI/button/button'
import { FileUploader } from '../shared/UI/file-uploader/file-uploader'
import { Input } from '../shared/UI/input/input'
import { Preloader } from '../shared/UI/preloader/preloader'
import { RadioButton } from '../shared/UI/radio-buttons/radio-buttons'
import { Tooltip } from '../shared/UI/tooltip/tooltip'
import { ButtonTypes } from '../shared/constants/enums/button-enum'
import './styles/index.scss'

function App() {

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <>
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
      <Tooltip text='on h ovsdfser'>
        Hover me sdfsfsdfs
      </Tooltip>
      <br />
      <RadioButton label='Javascript'/>
    </>
  )
}

export default App
