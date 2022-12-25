import React from "react";
import Features from "../Features";
import Knowledge from "../Knowledge";
import Pages from "../Pages";
import Resources from "../Resources";
import SiteBetter from "../SiteBetter";
import Stamps from "../Stamps";
import Stats from "../Stats";
import VideoTile from "../VideoTile";
import Work from "../WorkWithUs";

const WebsiteContent = () => {
  return (
    <div className="relative top-[1800px] md:top-[1500px] lg:top-[1100px]">
      <Stats />
      <VideoTile />
      <SiteBetter />
      <Work />
      <Pages />
      <Features />
      <Knowledge />
      <Stamps />
      <Resources />
    </div>
  );
};

export default WebsiteContent;
