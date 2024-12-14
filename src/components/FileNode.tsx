import React from 'react'
import { FileType } from '../types/FileStructure';
import styles from './styles.module.css';

interface FileNodeProps {
    file: FileType;
    isSelected: boolean;
    onClick: (fileName: string) => void;
    onRightClick: (e: React.MouseEvent, fileName: string) => void;
  }
const FileNode:React.FC<FileNodeProps> = ({file,isSelected,onClick,onRightClick}) => {
  return (
       <div
          key={file.name}
          className={`${styles.file} ${isSelected ? styles.selected : ""}`}
          onClick={() => onClick(file.name)}
          onContextMenu={(e) => onRightClick(e, file.name)}
          >
            <span className={`${styles['file-icon']} ${styles[file.meta]}`}></span>
            {file.name}
          </div>
  )
}

export default FileNode