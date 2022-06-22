import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { FaHouseUser, FaBars } from "react-icons/fa";
import useSidebar from "../hooks/useSidebar";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import SidebarItem from "./SidebarItem";

export interface unit {
  path: string;
  name: string;
  subtopics?: { name: string; path: string }[];
}
const units = [
  {
    name: "Unit One",
    path: "/units/one",
    subtopics: [
      { name: "Discovering Your Computer", path: "#discovering-your-computer" },
      { name: "Hardware Key Terms", path: "#hardware-key-terms" },
      { name: "Parts of a Computer", path: "#parts-of-a-computer" },
      { name: "Future of Tech", path: "#future-of-tech" },
      { name: "The CPU", path: "#the-cpu" },
      { name: "The Motherboard", path: "#the-motherboard" },
      { name: "Future of Tech", path: "#custom-pc-purchase" }
    ]
  },
  {
    name: "Unit Two",
    path: "/units/two",
    subtopics: [
      { name: "Digital Logic Gates", path: "#digital-logic-gates" },
      {
        name: "Construction Of Truth Tables",
        path: "#construction-of-truth-tables"
      },
      { name: "Combining Logic Gates", path: "#combining-logic-gates" },
      {
        name: "Boolean and Truth Tables from Logic Diagrams",
        path: "#booean-and-truth-tables-from-logic-diagrams"
      },
      {
        name: "Logic Diagrams from Boolean Expressions",
        path: "#logic-diagrams-from-boolean-expressions"
      },
      {
        name: "Wiring the Logic Gates and Circuits",
        path: "#wiring-the-logic-gates-and-circuits"
      }
    ]
  },
  {
    name: "Unit Three",
    path: "/units/three",
    subtopics: [
      {
        name: "7 Segment Display with Switch",
        path: "#7-segment-display-with-switch"
      },
      {
        name: "7 Segment Display with Decoder",
        path: "#7-segment-display-with-decoder"
      },
      { name: "Half Adder Investigation", path: "#half-adder-investigation" },
      { name: "Calculating Resistance", path: "#calculating-resistance" },
      { name: "Electronics 101", path: "#electronics-101" }
    ]
  },
  {
    name: "Unit Four",
    path: "/units/four",
    subtopics: [
      { name: "Digital Data", path: "#digital-data" },
      {
        name: "Numbering Systems (Dec, Bin, Hex, Oct)",
        path: "#numbering-systems"
      },
      { name: "Binary Addition", path: "#binary-addition" },
      { name: "ASCII Code", path: "#ascii-code" },
      { name: "Binary/Dec/Hex/Octal", path: "#binary-dec-hex-octal" }
    ]
  },
  {
    name: "Unit Five",
    path: "/units/five",
    subtopics: [
      { name: "Arduino Blink w/ Nano", path: "#arduino-blink-with-nano" },
      { name: "DC Motor Test", path: "#dc-motor-test" },
      { name: "Transistors NPN/PNP Motors", path: "#transistors-motors" },
      { name: "Keyboard LED Input On/Off", path: "#keyboard-led-input" },
      { name: "Motor Control w/ NPN", path: "#motor-control-with-npn" },
      {
        name: "H Bridge w Transistor and Switch",
        path: "#h-bridge-with-switch"
      },
      { name: "H Bridge with Arduino", path: "#h-bridge-with-arduino" },
      { name: "L293D H bridge IC w Switch", path: "#l293d-with-switch" },
      { name: "L293D w/ Arduino", path: "#l293d-with-arduino" }
    ]
  },
  {
    name: "Unit Six",
    path: "/units/six",
    subtopics: []
  }
];

const mainNav = [
  ["Home", "/", 1],
  ["About", "/about", 2],
  ["Notes", "/notes", 3]
];

const Sidebar = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!open) {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [open]);

  return (
    <>
      <div className='fixed px-2 h-screen bg-black-secondary z-[900]'>
        <div className='flex justify-center mt-4'>
          <FaBars
            className='fill-cream w-8 h-8 cursor-pointer'
            onClick={() => setOpen(!open)}
          />
        </div>
        <ul className='flex flex-col gap-2 mt-6'>
          {mainNav.map((nav) => (
            <li key={nav[0]}>
              <Link href={`${nav[1]}`}>
                <a
                  className={`flex flex-col font-semibold items-center justify-center fill-cream text-cream ${
                    router.pathname === nav[1] && "text-purple-primary"
                  }`}
                >
                  <FaHouseUser />
                  {nav[0]}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={bgRef}
        onClick={(e) => {
          if (e.target === bgRef.current) {
            setOpen(false);
          }
        }}
        className={`fixed inset-0 z-[900] transition-colors duration-300 ${
          open
            ? `bg-black/40 backdrop-blur-sm`
            : "bg-transparent pointer-events-none"
        }`}
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              className='bg-purple-black/60 min-h-screen z-[9999] max-w-xs shadow-md text-cream overflow-y-auto'
            >
              <div className='flex pl-4 pt-4 gap-2 items-center'>
                <FaBars
                  className='fill-cream w-8 h-8 cursor-pointer'
                  onClick={() => setOpen(!open)}
                />
                <h1 className='font-bold text-3xl uppercase'>Units</h1>
              </div>
              <ul className='mt-6 flex flex-col gap-1 px-8'>
                {units.map((unit) => (
                  <li className='relative'>
                    {router.pathname.includes(unit.path) && (
                      <motion.div
                        className='h-full w-1 absolute top-0 -left-2 bg-purple-accent'
                        layoutId='navbar-underline'
                      />
                    )}
                    <SidebarItem
                      setOpen={setOpen}
                      unit={unit}
                      key={unit.name}
                    />
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
export default Sidebar;
