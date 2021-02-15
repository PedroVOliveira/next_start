/** @jsx jsx */
import { jsx } from "@emotion/core";
import Image from "next/image";

// import logoBlack from "/logos/logo-lokkan-black.png";
// import logoWhite from "/logos/logo-lokkan-white.png";
// import logoFooter from "/logos/logo-lokkan-footer.png";

import { componentPropTypes } from "./Logo.types";

const Logo: React.FC<componentPropTypes> = ({ variant, ...props }) => {
  const logoDefault = "/assets/logos/logo-lokkan.png";
  const logoBlack = "./aseets/logos/logo-lokkan-black.png";
  const logoWhite = "./aseets/logos/logo-lokkan-white.png";
  const logoFooter = "./aseets/logos/logo-lokkan-white.png";
  const logoToRender = {
    default: logoDefault,
    black: logoBlack,
    white: logoWhite,
    footer: logoFooter,
  };

  return (
    <Image
      {...props}
      src={logoToRender[variant || "default"]}
      alt="logo-lokkan"
      width="100%"
      height="100%"
    />
  );
};

Logo.defaultProps = {
  variant: "default",
};

export default Logo;
