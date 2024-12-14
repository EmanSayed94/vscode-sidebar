import React from "react";
import styles from './ContextMenu.module.css';

interface ContextMenuProps {
  x: number;
  y: number;
  fileName: string;
  onAction: (action: string, fileName: string) => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, fileName, onAction }) => {
  return (
    <ul className={styles["context-menu"]} style={{ top: y, left: x }}>
      <li onClick={() => onAction("Copy", fileName)}>Copy</li>
      <li onClick={() => onAction("Rename", fileName)}>Rename</li>
      <li onClick={() => onAction("Delete", fileName)}>Delete</li>
    </ul>
  );
};

export default ContextMenu;
