import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Index from "../pages/app";
import Home from "../pages/home";
import Header from "../components/header";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/Index">
        <Index/>
      </ComponentPreview>
      <ComponentPreview path="/PaletteTree">
        <PaletteTree/>
      </ComponentPreview>
      <ComponentPreview path="/Home">
        <Home/>
      </ComponentPreview>
      <ComponentPreview path="/Header">
        <Header/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;