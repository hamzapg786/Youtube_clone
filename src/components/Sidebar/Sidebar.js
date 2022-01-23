import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineExplore, MdOutlineSubscriptions } from "react-icons/md";
import SidebarList from "../SidebarList/SidebarList";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <SidebarList
        icon={<GrHomeRounded size={19} />}
        title="Home"
        selected={true}
      />
      <SidebarList icon={<MdOutlineExplore size={22} />} title="Explore" />
      <SidebarList
        icon={<MdOutlineSubscriptions size={20} />}
        title="Subscription"
      />
      <hr style={{ width: "190px" }} />
      <div className="btm">
        <SidebarList icon={<MdOutlineLibraryAdd size={20} />} title="Library" />
        <SidebarList icon={<VscHistory size={20} />} title={"History"} />
        <SidebarList icon={<RiVideoLine size={20} />} title={"Your Videos"} />
        <SidebarList
          icon={<MdOutlineWatchLater size={20} />}
          title={"Watch Later"}
        />
        <SidebarList
          icon={<AiOutlineLike size={20} />}
          title={"Liked Videos"}
        />
      </div>
    </div>
  );
};

export default Sidebar;
