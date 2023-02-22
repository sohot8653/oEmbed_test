import { React, useState } from "react";
import Header from "./components/layout/header";
import Content from "./components/layout/content";

function App() {
  const [data, setData] = useState({});

  return (
    <div>
      <Header setData={setData}></Header>
      <Content data={data}></Content>
    </div>
  );
}

export default App;
