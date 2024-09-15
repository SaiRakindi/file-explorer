import React, { useState } from "react";

const Folder = ({ explorerData }) => {
  const [isFolderExpanded, setIsFolderExpanded] = useState(false);

  return (
    <div style={{ marginTop: "5px" }}>
      {explorerData.isFolder ? (
        <div onClick={() => setIsFolderExpanded(!isFolderExpanded)}>
          <span>📁 {explorerData.name}</span>
        </div>
      ) : (
        <span style={{ paddingLeft: "20px" }}>📄{explorerData.name}</span>
      )}

      <div style={{ display: isFolderExpanded ? "block" : "none" }}>
        {explorerData.items.map((explorerItem) => (
          <div style={{ paadingLeft: "20px" }}>
            <Folder explorerData={explorerItem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Folder;
