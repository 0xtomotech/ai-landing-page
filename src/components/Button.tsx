import React from "react";

export const Button = (props: React.PropsWithChildren) => {
  return (
    <button
      className="
      relative py-2 px-3 rounded-lg font-medium text-sm
      bg-gradient-to-b from-[#190d2e] to-[#4a208a]
      shadow-[0px_0px_12px_#8c45ff]
      transition-all duration-300 ease-in-out
      hover:bg-gradient-to-b hover:from-[#2d1650] hover:to-[#6a30c0]
      hover:shadow-[0px_0px_16px_#8c45ff]
    "
    >
      <div className="absolute inset-0 rounded-lg">
        <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,_black,_transparent)]"></div>
        <div className="border rounded-lg absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,_black,_transparent)]"></div>
        <div
          className="
          absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,0.7)_inset] rounded-lg
          transition-shadow duration-300 ease-in-out
          hover:shadow-[0_0_15px_rgb(140,69,255,0.9)_inset]
        "
        ></div>
      </div>
      <span className="relative z-10">{props.children}</span>
    </button>
  );
};
