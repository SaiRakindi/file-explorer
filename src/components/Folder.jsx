import React, { useState } from "react";

const Folder = ({ explorerData }) => {
  const [isFolderExpanded, setIsFolderExpanded] = useState(false);

  return (
    <section>
      {explorerData.isFolder ? (
        <div style={{ marginTop: 5 }}>
          <div className="folder">
            <span onClick={() => setIsFolderExpanded(!isFolderExpanded)}>
              📁 {explorerData.name}
            </span>
          </div>

          <div
            style={{
              display: isFolderExpanded ? "block" : "none",
              paddingLeft: "20px",
            }}
          >
            {explorerData.items.map((explorerItem) => (
              <Folder explorerData={explorerItem} key={explorerItem.id} />
            ))}
          </div>
        </div>
      ) : (
        <span className="file">📄{explorerData.name}</span>
      )}
    </section>
  );
};

export default Folder;
