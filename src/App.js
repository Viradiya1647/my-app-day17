import  { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import List1 from "./Day16/List";
import List3 from "./Day21/List";
import Toggle from "./Day16/Toggle";
import Form from "./Day16/Form";
import TextArea from "./Day16/TextArea";
import ClickOutside from "./Day16/ClickOutside";
import Counter from "./Day16/Counter";
import Timer from "./Day17/Timer";
import QuoteGenerator from "./Day17/QuoteGenerator";
import Gallery from "./Day17/Gallery";
import WeatherApp from "./Day17/WeatherApp";
import Home from "./Day18/Home";
import ProfileCard from "./Day18/Profile/ProfileCard"
import FromYUP from "./Day18/FormYUP";
import FromYupNew from "./Day19/FormYup";
import List2 from "./Day19/List";
import Feedback from "./Day19/Feedback";
import YupForms from "./Day20/YupForms";
import FeedbackForm from "./Day20/FeedbackForm";
import Signup from "./Day20/Signup";
import GenderProfile from "./Day20/GenderProfile";
import ProductData from "./Day20/ProductData";
import Address from "./Day21/Address";
import UploadInput from "./Day21/UploadInput";
import Tags from "./Day21/Tags";
import DateValidation from "./Day21/DateValidation";
import ConditionalValidation from "./Day21/ConditionalValidation";

export default function App(){

  return (
    <Router>
      <List1 title="Tasks" />
      <List2  title="tasks" />
      <List3  title="tasks" />
      <div>
        <Routes>
          <Route path="/Counter" element={<Counter/>}/>
          <Route path="/Toggle" element={<Toggle/>}/>
          <Route path="/Form" element={<Form/>}/>
          <Route path="/TextArea" element={<TextArea/>}/>
          <Route path="/ClickOutside" element={<ClickOutside/>}/>
          <Route path="/Weather" element={<WeatherApp/>}/>
          <Route path="/Timer" element={<Timer/>}/>
          <Route path="/QuoteGenerator" element={<QuoteGenerator/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/ProfileCard" element={<ProfileCard />}/>
          <Route path="/FormYUP" element={<FromYUP />}/>
          <Route path="/FormYupNew" element={<FromYupNew />}/>
          <Route path="/Feedback" element={<Feedback />}/>
          <Route path="/YupForms" element={<YupForms />}/>
          <Route path="/FeedbackForm" element={<FeedbackForm />}/>
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/GenderProfile" element={<GenderProfile />}/>
          <Route path="/ProductData" element={<ProductData />}/>
          <Route path="/Address" element={<Address />}/>
          <Route path="/UploadInput" element={<UploadInput />} />
          <Route path="/Tags" element={<Tags />} />
          <Route path="/DateValidation" element={<DateValidation />} />
          <Route path="/ConditionalValidation" element={<ConditionalValidation />} />
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  )
}