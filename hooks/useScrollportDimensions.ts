import { useLayoutEffect } from "react";
import { RefObject } from "react";
import { MutableRefObject } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function useScrollportView(
  inputRef?: RefObject<HTMLElement> | MutableRefObject<HTMLElement>
) {
  const ref = inputRef || useRef();

  const [start, setStart] = useState<number | null>(null);
  const [end, setEnd] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop;

    setStart(offsetTop / document.body.clientHeight);
    setEnd((offsetTop + rect.height) / document.body.clientHeight);
  });

  return [ref, start, end];
}
