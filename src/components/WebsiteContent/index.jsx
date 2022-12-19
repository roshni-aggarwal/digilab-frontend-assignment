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
    <div className="px-5 md:px-24 lg:px-48 py-24">
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
