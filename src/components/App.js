import SideNav from "./SideNav";
import RightSide from "./RightSide";
import Feed from "./Feed";

import "../styles/style.css";

export default function App() {
  return (
    <div className="App">
      <SideNav />
      <main className="main">
        <div className="main__feed">
          <Feed />
          <RightSide />
        </div>
      </main>
    </div>
  );
}
