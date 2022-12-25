import React from "react";
import { useSelector } from "react-redux";
import "./home.css";

import SongsList from "../shared/songsList";

export default function Home() {
  const { isLoading, allRingtones } = useSelector((state) => state.userState);

  return (
    <div className="site-statistic-demo-card">
      <SongsList songs={allRingtones} isLoading={isLoading} isPreview={true} />
    </div>
  );
}
