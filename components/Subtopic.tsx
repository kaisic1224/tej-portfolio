import { NavLink } from "react-router-dom";

const Subtopic = ({
  unit,
  subtopic,
  setSidebarOpen
}: {
  unit: number;
  subtopic: { name: string; link: string; type: string };
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <NavLink
      to={`/unit_${unit}`}
      style={{ paddingLeft: ".75rem", display: "inline-block", width: "100%" }}
      onClick={() => setSidebarOpen(false)}
    >
      {subtopic.name}
    </NavLink>
  );
};

export default Subtopic;
