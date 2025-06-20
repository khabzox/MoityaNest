import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface RecentProject {
  id: string;
  name: string;
  path: string;
  lastModified: string;
  language: string;
}

interface QuickAction {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
}

export default function HomeScreen() {
  const recentProjects: RecentProject[] = [
    {
      id: '1',
      name: 'Portfolio Website',
      path: '/projects/portfolio',
      lastModified: '2 hours ago',
      language: 'html',
    },
    {
      id: '2',
      name: 'React Todo App',
      path: '/projects/todo-app',
      lastModified: '1 day ago',
      language: 'javascript',
    },
    {
      id: '3',
      name: 'CSS Animations',
      path: '/projects/animations',
      lastModified: '3 days ago',
      language: 'css',
    },
  ];

  const quickActions: QuickAction[] = [
    {
      id: '1',
      title: 'New File',
      subtitle: 'Create a new file',
      icon: 'document-text',
      color: '#0078d4',
    },
    {
      id: '2',
      title: 'New Project',
      subtitle: 'Start from template',
      icon: 'folder',
      color: '#16a085',
    },
    {
      id: '3',
      title: 'Clone Repo',
      subtitle: 'From GitHub',
      icon: 'git-branch',
      color: '#f39c12',
    },
    {
      id: '4',
      title: 'Open Folder',
      subtitle: 'Browse files',
      icon: 'folder-open',
      color: '#e74c3c',
    },
  ];

  const getLanguageIcon = (language: string) => {
    const icons: { [key: string]: string } = {
      html: 'logo-html5',
      css: 'logo-css3',
      javascript: 'logo-javascript',
      typescript: 'logo-javascript',
      python: 'logo-python',
    };
    return icons[language] || 'document-text';
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      html: '#e34c26',
      css: '#1572b6',
      javascript: '#f1e05a',
      typescript: '#3178c6',
      python: '#3776ab',
    };
    return colors[language] || '#cccccc';
  };

  return (
    <SafeAreaView className="flex-1 bg-[#1e1e1e]">
      {/* Header */}
      <View className="px-6 py-4 border-b border-[#3e3e42]">
        <Text className="text-[#cccccc] text-2xl font-bold">Welcome back!</Text>
        <Text className="text-[#888888] text-sm mt-1">
          Ready to code something amazing?
        </Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Quick Actions */}
        <View className="px-6 py-6">
          <Text className="text-[#cccccc] text-lg font-semibold mb-4">
            Quick Actions
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {quickActions.map((action) => (
              <TouchableOpacity
                key={action.id}
                className="bg-[#252526] border border-[#3e3e42] rounded-lg p-4 mb-3"
                style={{ width: (width - 60) / 2 }}
                activeOpacity={0.7}
              >
                <View className="items-center">
                  <View
                    className="w-12 h-12 rounded-full items-center justify-center mb-3"
                    style={{ backgroundColor: action.color + '20' }}
                  >
                    <Ionicons
                      name={action.icon as any}
                      size={24}
                      color={action.color}
                    />
                  </View>
                  <Text className="text-[#cccccc] text-sm font-medium text-center">
                    {action.title}
                  </Text>
                  <Text className="text-[#888888] text-xs text-center mt-1">
                    {action.subtitle}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Projects */}
        <View className="px-6 pb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-[#cccccc] text-lg font-semibold">
              Recent Projects
            </Text>
            <TouchableOpacity>
              <Text className="text-[#0078d4] text-sm">View All</Text>
            </TouchableOpacity>
          </View>

          <View className="space-y-3">
            {recentProjects.map((project) => (
              <TouchableOpacity
                key={project.id}
                className="bg-[#252526] border border-[#3e3e42] rounded-lg p-4 flex-row items-center"
                activeOpacity={0.7}
              >
                <View className="mr-4">
                  <Ionicons
                    name={getLanguageIcon(project.language)}
                    size={24}
                    color={getLanguageColor(project.language)}
                  />
                </View>

                <View className="flex-1">
                  <Text className="text-[#cccccc] text-base font-medium">
                    {project.name}
                  </Text>
                  <Text className="text-[#888888] text-sm mt-1">
                    {project.path}
                  </Text>
                  <Text className="text-[#888888] text-xs mt-1">
                    Modified {project.lastModified}
                  </Text>
                </View>

                <TouchableOpacity className="p-2">
                  <Ionicons name="ellipsis-vertical" size={16} color="#888888" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Learning Resources */}
        <View className="px-6 pb-8">
          <Text className="text-[#cccccc] text-lg font-semibold mb-4">
            Learning Resources
          </Text>

          <TouchableOpacity className="bg-gradient-to-r from-[#0078d4] to-[#005a9e] rounded-lg p-4 mb-3">
            <View className="flex-row items-center">
              <Ionicons name="play-circle" size={24} color="white" />
              <View className="ml-3 flex-1">
                <Text className="text-white text-base font-medium">
                  Getting Started Guide
                </Text>
                <Text className="text-white/80 text-sm mt-1">
                  Learn the basics of mobile coding
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="white" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#252526] border border-[#3e3e42] rounded-lg p-4">
            <View className="flex-row items-center">
              <Ionicons name="book" size={24} color="#f39c12" />
              <View className="ml-3 flex-1">
                <Text className="text-[#cccccc] text-base font-medium">
                  Documentation
                </Text>
                <Text className="text-[#888888] text-sm mt-1">
                  Explore features and APIs
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#888888" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}