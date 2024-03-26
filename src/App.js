import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
	return (
		<ChatEngine
			height="100vh"
			projectID="93f3126a-41d7-4fa8-99b3-7562baf3282f"
			userName="Admin"
			userSecret="12345678910"
         renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
};

export default App;
