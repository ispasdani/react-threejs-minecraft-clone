import { TextureLoader } from "three";
import {
  dirtImg,
  glassImg,
  grassImg,
  logImg,
  woodImg,
} from "../assets/images/images";

const dirtTexture = new TextureLoader().load(dirtImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const logTexture = new TextureLoader().load(logImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);

export {
  dirtTexture,
  grassTexture,
  glassTexture,
  logTexture,
  woodTexture,
  groundTexture,
};
