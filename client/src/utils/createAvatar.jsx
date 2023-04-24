import { BigHead } from "@bigheads/core";
import { getRandomOptions } from "../utils/bighead";
import ReactDOMServer from "react-dom/server";

export default function CreateAvatar() {
  const avatar = ReactDOMServer.renderToString(
    <div className="w-[100px] h-[100px]">
      <BigHead {...getRandomOptions()} />
    </div>
  );
  sessionStorage.setItem("avatar", avatar);
}
