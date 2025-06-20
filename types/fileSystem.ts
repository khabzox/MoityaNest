export interface FileNode {
    id: string;
    name: string;
    type: 'file' | 'folder';
    path: string;
    language?: string;
    content?: string;
    children?: FileNode[];
    isExpanded?: boolean;
}