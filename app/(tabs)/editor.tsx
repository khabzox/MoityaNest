import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Import organized components
import { CodeEditor } from '@/components/Editor/CodeEditor';
import { FileExplorer } from '@/components/FileSystem/FileExplorer';
import { Sidebar } from '@/components/ui/Sidebar';
import { TabBar } from '@/components/ui/TabBar';
import { StatusBar } from '@/components/ui/StatusBar';
import { FileNode } from '@/types/fileSystem';

interface FileTab {
  id: string;
  name: string;
  language: string;
  content: string;
  modified: boolean;
  active: boolean;
}

const initialFiles: FileNode[] = [
  {
    id: 'root',
    name: 'Project',
    type: 'folder',
    path: '/',
    children: [
      {
        id: 'file1',
        name: 'index.html',
        type: 'file',
        path: '/index.html',
        language: 'html',
        content: '<!DOCTYPE html>\n<html>\n<head>\n<title>MoityaNest</title>\n</head>\n<body>\n</body>\n</html>'
      },
      {
        id: 'file2',
        name: 'styles.css',
        type: 'file',
        path: '/styles.css',
        language: 'css',
        content: 'body { margin: 0; }'
      },
      {
        id: 'file3',
        name: 'app.js',
        type: 'file',
        path: '/app.js',
        language: 'javascript',
        content: 'console.log("Hello MoityaNest");'
      }
    ]
  }
];

export default function EditorScreen() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [files, setFiles] = useState<FileNode[]>(initialFiles);
  const [tabs, setTabs] = useState<FileTab[]>([
    {
      id: 'tab1',
      name: 'index.html',
      language: 'html',
      content: '<!DOCTYPE html>\n<html>\n<head>\n<title>MoityaNest</title>\n</head>\n<body>\n</body>\n</html>',
      modified: false,
      active: true
    }
  ]);
  const [activeTabId, setActiveTabId] = useState('tab1');

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  const handleTabPress = (tabId: string) => {
    setTabs(prevTabs =>
      prevTabs.map(tab => ({
        ...tab,
        active: tab.id === tabId
      }))
    );
    setActiveTabId(tabId);
  };

  const handleTabClose = (tabId: string) => {
    const newTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(newTabs);

    if (tabId === activeTabId && newTabs.length > 0) {
      const nextTab = newTabs[0];
      setActiveTabId(nextTab.id);
      setTabs(prevTabs =>
        prevTabs.map(tab => ({
          ...tab,
          active: tab.id === nextTab.id
        }))
      );
    }
  };

  const handleCodeChange = (value: string) => {
    setTabs(prevTabs =>
      prevTabs.map(tab =>
        tab.id === activeTabId
          ? { ...tab, content: value, modified: true }
          : tab
      )
    );
  };

  const handleFileSelect = (file: FileNode) => {
    if (file.type === 'folder') return;

    const existingTab = tabs.find(tab => tab.name === file.name);
    if (existingTab) {
      handleTabPress(existingTab.id);
      return;
    }

    const newTab: FileTab = {
      id: `tab_${Date.now()}`,
      name: file.name,
      language: file.language || 'text',
      content: file.content || '',
      modified: false,
      active: true,
    };

    setTabs(prevTabs => [
      ...prevTabs.map(tab => ({ ...tab, active: false })),
      newTab,
    ]);
    setActiveTabId(newTab.id);
  };

  const handleFileCreate = (parentPath: string) => {
    const newFile: FileNode = {
      id: `file_${Date.now()}`,
      name: 'newfile.txt',
      type: 'file',
      path: `${parentPath}newfile.txt`,
      content: '',
      language: 'text'
    };

    setFiles(prevFiles => updateFiles(prevFiles, parentPath, newFile));
  };

  const handleFolderCreate = (parentPath: string) => {
    const newFolder: FileNode = {
      id: `folder_${Date.now()}`,
      name: 'New Folder',
      type: 'folder',
      path: `${parentPath}NewFolder/`,
      children: []
    };

    setFiles(prevFiles => updateFiles(prevFiles, parentPath, newFolder));
  };

  const updateFiles = (files: FileNode[], parentPath: string, newNode: FileNode): FileNode[] => {
    return files.map(file => {
      if (file.path === parentPath) {
        return {
          ...file,
          children: [...(file.children || []), newNode]
        };
      }
      if (file.children) {
        return {
          ...file,
          children: updateFiles(file.children, parentPath, newNode)
        };
      }
      return file;
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#1e1e1e]">
      {/* Top Bar */}
      <View className="bg-[#2d2d30] border-b border-[#3e3e42] px-4 py-2 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => setSidebarOpen(!sidebarOpen)} className="mr-3 p-2">
            <Ionicons name="menu" size={20} color="#cccccc" />
          </TouchableOpacity>
          <Text className="text-[#cccccc] text-lg font-semibold">MoityaNest</Text>
        </View>

        <View className="flex-row items-center">
          <TouchableOpacity className="mr-3 p-2">
            <Ionicons name="search" size={18} color="#cccccc" />
          </TouchableOpacity>
          <TouchableOpacity className="mr-3 p-2">
            <Ionicons name="play" size={18} color="#4CAF50" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2">
            <Ionicons name="ellipsis-vertical" size={18} color="#cccccc" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-1 flex-row">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen}>
          <FileExplorer 
            files={files}
            onFileSelect={handleFileSelect}
            onFileCreate={handleFileCreate}
            onFolderCreate={handleFolderCreate}
            selectedFile={activeTabId}
          />
        </Sidebar>

        {/* Main Content */}
        <View className="flex-1">
          {/* File Tabs */}
          <TabBar
            tabs={tabs}
            onTabPress={handleTabPress}
            onTabClose={handleTabClose}
          />

          {/* Code Editor */}
          <View className="flex-1">
            {activeTab ? (
              <CodeEditor
                value={activeTab.content}
                language={activeTab.language}
                onChange={handleCodeChange}
                theme="vs-dark"
              />
            ) : (
              <View className="flex-1 items-center justify-center bg-[#1e1e1e]">
                <Ionicons name="document-text" size={48} color="#969696" />
                <Text className="text-[#969696] text-lg mt-4">No file open</Text>
                <Text className="text-[#969696] text-sm mt-2">
                  Select a file from the explorer or create a new one
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>

      {/* Status Bar */}
      <StatusBar
        branch="main"
        language={activeTab?.language || 'text'}
        line={1}
        column={1}
        syncStatus="synced"
      />
    </SafeAreaView>
  );
}