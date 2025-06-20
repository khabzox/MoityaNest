# MoityaNest 🪺

> **Nest your ideas. Flow your code.**

A powerful mobile-first code editor for Android and iOS, built with React Native and Expo. MoityaNest brings VS Code-like functionality to your mobile device with Git integration, live preview, and cloud sync.

## 🚀 Project Overview

MoityaNest is designed to be the ultimate mobile development environment, supporting multiple programming languages with syntax highlighting, live preview capabilities, and seamless Git + GitHub integration. Whether you're fixing a quick bug on the go or working on a full project from your phone, MoityaNest has you covered.

### Key Features

- 📝 **Multi-file Code Editor** with Monaco Editor
- 🎨 **Syntax Highlighting** for HTML, CSS, JS, TS, Python, JSX, React
- 👀 **Live Preview** for web projects
- 📁 **File Explorer** with project navigation
- 🔐 **User Authentication** via Supabase
- ☁️ **Cloud Sync** for project backup and sharing
- 🔄 **Git + GitHub Integration** (clone, commit, push, pull)
- 🎭 **Dark/Light Themes** with customizable settings
- 📱 **Mobile-optimized UI/UX**

## 🛠️ Technology Stack

| Layer | Technology |
|-------|------------|
| Mobile Framework | React Native (Expo) |
| Code Editor | Monaco Editor via react-native-webview |
| State Management | Zustand |
| Backend/Auth/DB | Supabase (Postgres, Auth, Storage) |
| Git Client | isomorphic-git |
| GitHub API | GitHub REST/GraphQL API |
| File System | expo-file-system |
| Navigation | React Navigation |
| Styling | NativeWind (Tailwind for RN) |

## 📂 Enhanced Project Structure

### 🏗️ Root Directory (Expo Standard with Scalability)
```
moityanest/
├── 📱 app/                           # Main app screens (Expo Router)
│   ├── (tabs)/                      # Tab-based navigation
│   │   ├── _layout.tsx              # Tabs layout
│   │   ├── index.tsx                # Home tab
│   │   ├── projects.tsx             # Projects tab
│   │   ├── editor.tsx               # Editor tab
│   │   └── settings.tsx             # Settings tab
│   ├── (auth)/                      # Authentication screens
│   │   ├── login.tsx                # Login screen
│   │   ├── signup.tsx               # Signup screen
│   │   └── forgot-password.tsx      # Password reset
│   ├── project/[id]/                # Dynamic project routes
│   │   ├── editor.tsx               # Project editor
│   │   ├── preview.tsx              # Project preview
│   │   └── git.tsx                  # Git panel
│   └── _layout.tsx                  # Root layout
├── 🧩 components/                    # Feature-organized components
│   ├── Editor/                      # Code editor components
│   │   ├── CodeEditor.tsx           # Monaco editor wrapper
│   │   ├── EditorTabs.tsx           # File tabs
│   │   ├── EditorStatusBar.tsx      # Status bar
│   │   └── index.ts                 # Export barrel
│   ├── FileSystem/                  # File management
│   │   ├── FileExplorer.tsx         # File tree
│   │   ├── FileItem.tsx             # Individual file
│   │   ├── NewFileModal.tsx         # Create file modal
│   │   └── index.ts
│   ├── Git/                         # Git operations
│   │   ├── GitPanel.tsx             # Main git panel
│   │   ├── CommitList.tsx           # Commit history
│   │   ├── BranchList.tsx           # Branch management
│   │   ├── GitDiff.tsx              # Diff viewer
│   │   └── index.ts
│   ├── Preview/                     # Live preview
│   │   ├── LivePreview.tsx          # HTML/CSS/JS preview
│   │   ├── PreviewControls.tsx      # Preview controls
│   │   └── index.ts
│   ├── Auth/                        # Authentication
│   │   ├── LoginForm.tsx            # Login form
│   │   ├── SignupForm.tsx           # Registration
│   │   └── index.ts
│   └── UI/                          # Reusable UI components
│       ├── Button.tsx               # Custom button
│       ├── Modal.tsx                # Modal wrapper
│       ├── Loading.tsx              # Loading indicators
│       └── index.ts
├── 🔧 services/                      # External service integrations
│   ├── auth/                        # Authentication services
│   │   ├── supabaseAuth.ts          # Supabase auth
│   │   ├── githubAuth.ts            # GitHub OAuth
│   │   └── types.ts
│   ├── cloud/                       # Cloud services
│   │   ├── supabaseClient.ts        # Supabase client
│   │   ├── storageService.ts        # File storage
│   │   └── types.ts
│   ├── git/                         # Git services
│   │   ├── gitClient.ts             # Git operations
│   │   ├── githubAPI.ts             # GitHub API
│   │   └── types.ts
│   └── filesystem/                  # File system
│       ├── fileSystem.ts            # File operations
│       ├── templateService.ts       # Project templates
│       └── types.ts
├── 🏪 store/                         # State management (Zustand)
│   ├── editor/                      # Editor state
│   │   ├── editorStore.ts           # Main editor store
│   │   ├── fileStore.ts             # File management
│   │   ├── tabStore.ts              # Tab management
│   │   └── types.ts
│   ├── git/                         # Git state
│   │   ├── gitStore.ts              # Git operations
│   │   ├── repoStore.ts             # Repository data
│   │   └── types.ts
│   ├── auth/                        # Authentication state
│   │   ├── authStore.ts             # User auth
│   │   ├── sessionStore.ts          # Session management
│   │   └── types.ts
│   └── project/                     # Project state
│       ├── projectStore.ts          # Project management
│       ├── templateStore.ts         # Templates
│       └── types.ts
├── 🛠️ utils/                         # Utility functions
│   ├── editor/                      # Editor utilities
│   │   ├── syntaxHighlighter.ts     # Syntax highlighting
│   │   ├── codeFormatter.ts         # Code formatting
│   │   └── languageDetection.ts     # Language detection
│   ├── git/                         # Git utilities
│   │   ├── gitHelpers.ts            # Git helpers
│   │   ├── diffParser.ts            # Diff parsing
│   │   └── branchUtils.ts           # Branch utilities
│   ├── file/                        # File utilities
│   │   ├── fileHelpers.ts           # File operations
│   │   ├── pathUtils.ts             # Path manipulation
│   │   └── mimeTypes.ts             # MIME detection
│   └── common/                      # Common utilities
│       ├── dateUtils.ts             # Date formatting
│       ├── stringUtils.ts           # String manipulation
│       └── logger.ts                # Logging utility
├── 🔗 hooks/                         # Custom React hooks
│   ├── editor/                      # Editor hooks
│   │   ├── useEditor.ts             # Editor management
│   │   ├── useCodeCompletion.ts     # Auto-completion
│   │   └── useSyntaxHighlight.ts    # Syntax highlighting
│   ├── git/                         # Git hooks
│   │   ├── useGit.ts                # Git operations
│   │   ├── useRepository.ts         # Repository management
│   │   └── useBranches.ts           # Branch management
│   └── common/                      # Common hooks
│       ├── useDebounce.ts           # Value debouncing
│       ├── useNetworkStatus.ts      # Network monitoring
│       └── useLocalStorage.ts       # Local storage
├── 📝 types/                         # TypeScript definitions
│   ├── editor.ts                    # Editor types
│   ├── git.ts                       # Git types
│   ├── auth.ts                      # Auth types
│   ├── file.ts                      # File system types
│   └── common.ts                    # Common types
├── 🎨 theme/                         # Theme and styling
│   ├── colors.ts                    # Color palette
│   ├── typography.ts                # Font styles
│   ├── themes/                      # Theme variants
│   │   ├── light.ts                 # Light theme
│   │   └── dark.ts                  # Dark theme
│   └── components/                  # Component styles
│       ├── editor.ts                # Editor styles
│       └── navigation.ts            # Navigation styles
├── 🧪 __tests__/                     # Test files
│   ├── components/                  # Component tests
│   ├── hooks/                       # Hook tests
│   ├── services/                    # Service tests
│   └── utils/                       # Utility tests
├── 📦 assets/                        # Static assets
├── 📝 constants/                     # App constants
├── 🚀 scripts/                       # Build scripts
└── Configuration files...            # Standard config files
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Git
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/your-username/moityanest.git
cd moityanest

# Install dependencies
npm install

# Install required Expo packages
npx expo install react-native-webview expo-file-system

# Install additional dependencies
npm install zustand @supabase/supabase-js isomorphic-git
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-gesture-handler react-native-reanimated

# Create enhanced project structure
mkdir -p services store utils types theme __tests__ localization

# Create service subdirectories
mkdir -p services/{auth,cloud,git,filesystem,api,device,analytics}

# Create store subdirectories  
mkdir -p store/{editor,git,auth,project,settings,sync}

# Create utils subdirectories
mkdir -p utils/{editor,git,file,network,security,common,ui}

# Create enhanced component subdirectories
mkdir -p components/{Editor,FileSystem,Preview,Git,Auth,Settings,UI,Layout,Project}

# Create hooks subdirectories
mkdir -p hooks/{editor,git,filesystem,auth,sync,common,ui}

# Create types and theme subdirectories
mkdir -p types theme/{themes,components}

# Create testing subdirectories
mkdir -p __tests__/{components,hooks,store,services,utils,app,integration,e2e,setup/{mocks,fixtures}}

# Start the development server
npx expo start
```

### Environment Setup

1. Create a `.env` file in the root directory:
```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
EXPO_PUBLIC_GITHUB_CLIENT_ID=your_github_client_id
```

2. Set up Supabase:
   - Create a new Supabase project
   - Configure authentication providers
   - Set up database schema

3. Set up GitHub OAuth:
   - Create a GitHub OAuth app
   - Configure redirect URLs

## 📋 Development Checklist

We use a comprehensive checklist to track development progress. Here's our current roadmap:

### Phase 1: Setup & Core Editor ✅/❌
- [ ] **Project Initialization**
  - [ ] Create Expo React Native project
  - [ ] Install core dependencies (react-native-webview, expo-file-system, etc.)
  - [ ] Setup project structure with folders (components, lib, navigation, store, etc.)
  - [ ] Configure TypeScript if using TS

- [ ] **Monaco Editor Integration**
  - [ ] Embed Monaco Editor in WebView component
  - [ ] Create CodeEditor.tsx component
  - [ ] Test basic text editing functionality
  - [ ] Handle editor events (onChange, onFocus, etc.)

- [ ] **Multi-File Tabs System**
  - [ ] Build ProjectTabs.tsx component
  - [ ] Implement tab switching logic
  - [ ] Handle multiple file states
  - [ ] Add tab close functionality

- [ ] **Syntax Highlighting**
  - [ ] Configure Monaco for HTML syntax
  - [ ] Configure Monaco for CSS syntax
  - [ ] Configure Monaco for JavaScript syntax
  - [ ] Configure Monaco for TypeScript syntax
  - [ ] Configure Monaco for Python syntax
  - [ ] Configure Monaco for JSX/React syntax

### Phase 2: File Management & Navigation ✅/❌
- [ ] **File Explorer**
  - [ ] Create FileExplorer.tsx component
  - [ ] Build folder tree structure UI
  - [ ] Implement file/folder navigation
  - [ ] Add file creation functionality
  - [ ] Add file deletion functionality
  - [ ] Add folder creation functionality

- [ ] **Local File System**
  - [ ] Setup expo-file-system integration
  - [ ] Create fileSystem.ts helper functions
  - [ ] Implement save file functionality
  - [ ] Implement load file functionality
  - [ ] Handle file permissions

- [ ] **Project Templates**
  - [ ] Create templates.ts with starter projects
  - [ ] Build HTML/CSS/JS template
  - [ ] Build React template
  - [ ] Build Next.js template
  - [ ] Build Python template
  - [ ] Add template selection UI

### Phase 3: Authentication & Cloud Sync ✅/❌
- [ ] **Supabase Setup**
  - [ ] Create Supabase project
  - [ ] Configure database schema
  - [ ] Setup supabaseClient.ts
  - [ ] Test connection

- [ ] **User Authentication**
  - [ ] Create Auth components (Login.tsx, Signup.tsx)
  - [ ] Implement email/password auth
  - [ ] Implement social login (Google, GitHub)
  - [ ] Add password reset functionality
  - [ ] Create user session management

- [ ] **Cloud Sync**
  - [ ] Design cloud storage schema
  - [ ] Implement project upload to cloud
  - [ ] Implement project download from cloud
  - [ ] Handle sync conflicts
  - [ ] Add offline mode support
  - [ ] Create sync status indicators

### Phase 4: Live Preview & Theming ✅/❌
- [ ] **Live Preview**
  - [ ] Create LivePreview.tsx component
  - [ ] Setup WebView for HTML rendering
  - [ ] Implement real-time preview updates
  - [ ] Handle CSS injection
  - [ ] Handle JavaScript execution
  - [ ] Add preview refresh functionality
  - [ ] Handle preview errors gracefully

- [ ] **Theming System**
  - [ ] Create theme constants
  - [ ] Implement dark theme
  - [ ] Implement light theme
  - [ ] Add theme switching UI
  - [ ] Apply themes to Monaco Editor
  - [ ] Apply themes to app UI

### Phase 5: Git + GitHub Integration ✅/❌
- [ ] **Git Client Setup**
  - [ ] Install and configure isomorphic-git
  - [ ] Create gitClient.ts wrapper
  - [ ] Test basic Git operations
  - [ ] Handle Git authentication

- [ ] **GitHub OAuth**
  - [ ] Setup GitHub OAuth app
  - [ ] Implement OAuth flow
  - [ ] Store GitHub tokens securely
  - [ ] Handle token refresh

- [ ] **Repository Operations**
  - [ ] Implement repo cloning
  - [ ] Implement commit functionality
  - [ ] Implement push to remote
  - [ ] Implement pull from remote
  - [ ] Implement branch creation
  - [ ] Implement branch switching
  - [ ] Handle merge conflicts

### Phase 6: Polishing & Beta ✅/❌
- [ ] **UI/UX Polish**
  - [ ] Responsive design testing
  - [ ] Animation and transitions
  - [ ] Loading states and spinners
  - [ ] Error handling and user feedback
  - [ ] Accessibility improvements
  - [ ] Performance optimization

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Here's how you can help:

### Ways to Contribute

1. **Pick a Task**: Choose an unchecked item from our development checklist
2. **Bug Fixes**: Report and fix bugs you encounter
3. **Feature Requests**: Suggest new features or improvements
4. **Documentation**: Improve our docs, comments, or README
5. **Testing**: Help test the app on different devices and scenarios
6. **UI/UX**: Enhance the user interface and experience

### Contribution Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Make** your changes
4. **Test** thoroughly on both iOS and Android
5. **Commit** your changes (`git commit -m 'Add amazing feature'`)
6. **Push** to your branch (`git push origin feature/amazing-feature`)
7. **Open** a Pull Request

### Development Guidelines

- Follow React Native and TypeScript best practices
- Write clean, readable, and well-commented code
- Test your changes on both iOS and Android
- Update documentation when adding new features
- Use descriptive commit messages
- Follow the existing code style and structure

### Code Style

- Use TypeScript for type safety
- Follow consistent naming conventions
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Keep components small and focused

## 🧪 Testing Our Structure

We follow a comprehensive testing strategy across all layers:

### Testing Structure
```
__tests__/
├── 🧩 components/           # Component unit tests
├── 🔗 hooks/               # Custom hook tests  
├── 🏪 store/               # State management tests
├── 🔧 services/            # Service integration tests
├── 🛠️ utils/               # Utility function tests
├── 📱 app/                 # Screen component tests
├── 🎯 integration/         # Cross-feature integration tests
├── 📱 e2e/                 # End-to-end user flow tests
└── 🔧 setup/               # Test configuration and mocks
```

### Run Tests
```bash
# Run unit tests
npm test

# Run on iOS simulator
npx expo run:ios

# Run on Android emulator
npx expo run:android

# Test on physical device
npx expo start --tunnel

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

### Testing Checklist

- [ ] Test on different screen sizes
- [ ] Test on both iOS and Android
- [ ] Test with poor network conditions
- [ ] Test authentication flows
- [ ] Test Git operations
- [ ] Test file system operations
- [ ] Test live preview functionality

## 📱 Device Testing

We need help testing on various devices:

- **Android**: Different manufacturers, OS versions, screen sizes
- **iOS**: Different iPhone/iPad models, iOS versions
- **Performance**: Test on older/slower devices

## 🐛 Bug Reports

When reporting bugs, please include:

- Device type and OS version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots or screen recordings
- Console errors (if any)

## 💡 Feature Requests

Have an idea? We'd love to hear it! Open an issue with:

- Clear description of the feature
- Use case and benefits
- Mockups or examples (if applicable)
- Implementation suggestions (optional)

## 📖 Learning Resources

New to React Native or mobile development? Check out these resources:

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [Monaco Editor Documentation](https://microsoft.github.io/monaco-editor/)
- [Supabase Documentation](https://supabase.com/docs)
- [Git Documentation](https://git-scm.com/doc)

## 🏆 Recognition

Contributors will be recognized in:

- Our Contributors section
- Release notes for significant contributions
- Social media shoutouts
- Beta testing access

## 📞 Communication

- **Discussions**: Use GitHub Discussions for questions and ideas
- **Issues**: Use GitHub Issues for bugs and feature requests
- **Discord**: Join our Discord community (link coming soon)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Monaco Editor team for the excellent code editor
- Expo team for the amazing React Native tooling
- Supabase for the backend infrastructure
- All our contributors and beta testers

---

**Ready to contribute?** Pick a task from the checklist above and let's build something amazing together! 🚀

*Questions? Open an issue or start a discussion. We're here to help!*