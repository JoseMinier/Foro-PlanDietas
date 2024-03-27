import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
	return (
		<ChatEngine
			height="100vh"
			projectID="b7be444f-a2a6-41e1-adb2-3ef97a10144c"
			userName="admin"
			userSecret="12345"
         renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
};

export default App;
