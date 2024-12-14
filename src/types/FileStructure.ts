export type FileType = {
    type: "file";
    meta: string;
    name: string;
  };
  
  type FolderType = {
    type: "folder";
    name: string;
    data: (FolderType | FileType)[];
  };
  
  export type FileStructure = FolderType;