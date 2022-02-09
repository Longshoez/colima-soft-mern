import './App.css'
import {DatePicker, Card} from 'antd'
import 'antd/dist/antd.css'


function App() {

  const test = (date, dateString) => {
    console.log(date, dateString)
  }
  

  return (
    <div className="App">
      yeah
      <Card 
        title="yeahleah bleah"
        extra={<a href="#"> More</a>}
        style={{width: 300}}
      >
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </Card>

      <DatePicker onChange={test}/>
    </div>
  )
}

export default App
