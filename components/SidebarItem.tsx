import Link from "next/link";
import { SetStateAction } from "react";
import { Dispatch } from "react";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { unit } from "./Sidebar";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const SidebarItem = ({
  unit,
  setOpen
}: {
  unit: unit;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [openSub, setOpenSub] = useState(false);
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div
      className={`hover:bg-purple-primary/60 transition-colors px-2 rounded-sm select-none ${
        router.pathname === unit.path && "bg-purple-primary"
      }`}
    >
      <div className='flex justify-between items-center gap-2'>
        <Link href={unit.path}>
          <a onClick={(e) => {}} className='text-2xl font-medium'>
            {unit.name}
          </a>
        </Link>
        {unit.subtopics?.length != 0 && (
          <FaCaretDown
            onClick={() => setOpenSub(!openSub)}
            className={`w-7 h-7 cursor-pointer ${openSub && "rotate-180"}`}
          />
        )}
      </div>
      {openSub && (
        <ul className='flex flex-col pb-1'>
          {unit.subtopics?.map((subtopic) => (
            <li className={`hover:bg-purple-secondary`}>
              <Link href={`${unit.path}${subtopic.path}`}>
                <a className='block w-full px-2'>{subtopic.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default SidebarItem;
