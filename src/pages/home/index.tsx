import { FC } from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

const Home: FC = () =>{

    return (
      <div className="page">
        <SectionOne />
        <SectionTwo />
      </div>
    )
}

export default Home;