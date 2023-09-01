import Form from "./Pages/Form";
import Table from "./Pages/Table";
import Album from "./components/Album/Album";
import Jumbotron from "./components/Jambotron/Jambotron";

function App() {
  let jambotron_data={
    content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, placeat. Tenetur fugit blanditiis id itaque explicabo quas necessitatibus reiciendis, ipsum animi veritatis pariatur obcaecati et praesentium voluptate deleniti a expedita.",
    title:"TITLE_NAME"
  }
  return (
    
    <div className="bg-light">
    <main role="main">
      <Table/>
    </main>
    </div>
  );
}
export default App;
