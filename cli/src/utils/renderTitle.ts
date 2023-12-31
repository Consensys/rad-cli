import gradient from "gradient-string";
import { getUserPkgManager } from "./getUserPackageManager.js";
import { fullTitle, titleText } from "../comp/title.js";
import chalk from 'chalk';
import cfont from 'cfonts';

import path from "path";
import { fileURLToPath } from "url";

// With the move to TSUP as a build tool, this keeps path routes in other files (installers, loaders, etc) in check more easily.
// Path is in relation to a single index.js file inside ./dist
const __filename = fileURLToPath(import.meta.url);
const distPath = path.dirname(__filename);
export const PKG_ROOT = path.join(distPath, "../");


  const daxTheme = {
    Silver: "#C9C6C8",
    //Licorice: "#1D101B",
    Eggplant: "#65505B",
    Wine: "#622E35",
    //RichBlack: "#060914",
    RoseTope: "#92636A",
    //DkPurple: "#341D26",
    ChocCosmos: "#651A23",
    //BlackBeen: "#330717",
    Cordovan: "#853B3D",
  };
  export const renderTitle = () => {
    const daxGradient = gradient(Object.values(daxTheme));

    // resolves weird behavior where the ascii is offset
    const pkgManager = getUserPkgManager();
    if (pkgManager === "yarn" || pkgManager === "pnpm") {
      console.log("");
    }
    console.log(daxGradient.multiline(titleText));
    console.log(chalk.hex("#92636A").bold(fullTitle));
    cfont.say("For more information or help please visit https://beta.dax.so", {
      colors: ["#C9C6C8", "#65505B", "#622E35", "#92636A", "#651A23", "#853B3D"],
      font: "console",
      align: "center",
      background: "#341D26",
      letterSpacing: 1,
      lineHeight: 1,
      space: false,
      gradient: true,
    });
    console.log("");

  };