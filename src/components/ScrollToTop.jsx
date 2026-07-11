import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";import { jsx as _jsx } from "react/jsx-runtime";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (/*#__PURE__*/
    _jsx("div", {
      className: `fixed bottom-8 right-8 z-50 transition-all duration-500 ease-in-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`, children: /*#__PURE__*/


      _jsx("button", {
        onClick: scrollToTop,
        className: "p-3.5 rounded-full glass bg-background/80 hover:bg-primary/20 hover:scale-110 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] group border border-primary/20 flex flex-col items-center justify-center gap-1",
        "aria-label": "Scroll to top", children: /*#__PURE__*/

        _jsx(ArrowUp, { className: "size-5 text-muted-foreground group-hover:text-primary transition-colors" }) }
      ) }
    ));

}