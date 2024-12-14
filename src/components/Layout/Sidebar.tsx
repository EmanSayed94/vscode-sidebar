import React, { useState } from "react";
import { FileStructure, FileType } from "../../types/FileStructure";
import FileNode from "../FileNode";
import ContextMenu from "../ContextMenu/ContextMenu";
import FolderNode from "../FolderNode";

import styles from './Sidebar.module.css';


interface SidebarProps {
  structure: FileStructure;
}

const Sidebar: React.FC<SidebarProps> = ({ structure }) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    fileName: string;
  } | null>(null);

  const [folderStates, setFolderStates] = useState<Record<string, boolean>>({});

  const toggleFolder = (folderName: string) => {
    setFolderStates((prev) => ({ ...prev, [folderName]: !prev[folderName] }));
  };

  const handleFileClick = (fileName: string) => {
    setSelectedFile(fileName);
    setContextMenu(null); 
  };

  const handleRightClick = (e: React.MouseEvent, fileName: string) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY, fileName });
  };

  const handleContextMenuAction = (action: string, fileName: string) => {
    console.log(`${action} triggered on: ${fileName}`);
    setContextMenu(null); 
  };

  const renderStructure = (node: FileStructure | FileType) => {
    if (node.type === "folder") {
      return (
        <div key={node.name} className={styles.folder} onClick={()=>setContextMenu(null)}>
          <FolderNode folder={node} toggle={toggleFolder} isOpen={folderStates[node.name]} />
          {folderStates[node.name] &&
            node.data.map((child: FileStructure | FileType) => (
              <React.Fragment key={child.name}>
                {renderStructure(child)}
              </React.Fragment>
            ))}
        </div>
      );
    }
    return (
      <FileNode
        onClick={handleFileClick}
        key={node.name}
        file={node}
        onRightClick={handleRightClick}
        isSelected={node.name === selectedFile}
      />
    );
  };

  return (
    <>
      <div className={styles.sidebar}>{renderStructure(structure)}</div>
      {contextMenu && (
          <ContextMenu {...contextMenu} onAction={handleContextMenuAction}/>
      )}
    </>
  );
};

export default Sidebar;
