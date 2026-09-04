import './App.css'
import Avatar from './components/Avatar';

const bart = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  FirstName: "Bart",
  lastName: "Simpson"
    };

const homer = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png",
  FirstName: "Homer",
  lastName: "Simpson"
    };    
function App() {
  return (
    <>
    <Avatar image={bart.image} FirstName={bart.FirstName} lastName={bart.lastName} />
    <Avatar image={homer.image} FirstName={homer.FirstName} lastName={homer.lastName} />
    </>
  )
}

export default App
