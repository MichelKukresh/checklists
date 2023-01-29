import React from "react";
import "./MyButton.css";

export enum VariantBackColor {
    blue = "#0081e6",
    grey = "#e5f1fb"
  }

  export enum VariantTextColor {
    blue = "#ffffff",
    grey = "#0081e6"
  }

interface PropsData {
    backColor: VariantBackColor;
    textColor: VariantTextColor,
    title?: string,
    height: string,
}


const MyButton: React.FunctionComponent<PropsData> = ({backColor, textColor, height, title}): JSX.Element => {
    return(<button className="MyButton" style={{ height: height, backgroundColor: backColor, color: textColor }}>{title}</button>)
}

export default MyButton;