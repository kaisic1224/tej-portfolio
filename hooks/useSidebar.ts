import { useEffect } from "react";
import { useState } from "react";

export default function useSidebar(open: boolean) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(window.scrollY);
  }, [open]);

  return offset;
}
