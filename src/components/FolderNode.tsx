import React from 'react'
import { FileStructure } from '../types/FileStructure';
import styles from './styles.module.css';

interface FolderNodeProps {
    folder: FileStructure;
    isOpen:boolean|undefined,
    toggle:(filename:string)=>void
  }
  
const FolderNode:React.FC<FolderNodeProps> = ({
  folder,
  toggle,
  isOpen,
}) => {

  return (
    <div key={folder.name} className={styles.folder}>
          <div
            className={styles["folder-header"]}
            onClick={() => toggle(folder.name)}
          >
            <span
              className={`${styles['folder-icon']} ${isOpen ? styles["open-folder"] : styles["closed-folder"]}`}
            >
            </span>
            {folder.name}
          </div>
        </div>
  )
}

export default FolderNode