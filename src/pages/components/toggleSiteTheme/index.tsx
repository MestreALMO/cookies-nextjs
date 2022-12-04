import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const ToggleSiteTheme = () => {
  const [siteTheme, setSiteTheme] = useState<string | undefined>();

  useEffect(() => {
    Cookies.get("SiteTheme") === undefined &&
      Cookies.set("SiteTheme", "dark", { expires: 30 });

    setSiteTheme(Cookies.get("SiteTheme"));
  }, []);

  const handleToggleCheckboxTheme = () => {
    Cookies.get("SiteTheme") === "dark"
      ? Cookies.set("SiteTheme", "light", { expires: 30 })
      : Cookies.set("SiteTheme", "dark", { expires: 30 });

    console.log(Cookies.get("SiteTheme"));
    setSiteTheme(Cookies.get("SiteTheme"));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: siteTheme === "dark" ? "#000" : "unset",
          color: siteTheme === "dark" ? "#fff" : "unset",
        }}
      >
        <input
          type="checkbox"
          onChange={handleToggleCheckboxTheme}
          checked={siteTheme === "dark"}
        />
        <p onClick={() => {}}>input theme</p>
      </div>
    </>
  );
};
