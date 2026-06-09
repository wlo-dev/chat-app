import { useChatStore } from "../store/useChatStore";
import { useEffect} from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";




const ChatContainer = () => {

    const { messages, getMessages, isMessagesLoading, selectedUser} = useChatStore()

      useEffect(() => {
        getMessages(selectedUser._id)
      },[selectedUser, getMessages])

  if (isMessagesLoading) return (
<div className="flex flex-col flex-1 overflow-auto">
  <ChatHeader/>
  <MessageSkeleton/>
  <MessageInput />
</div>

  )

  return (
    <div className= "flex flex-col flex-1 overflow-auto">
      <ChatHeader/>

      <p>messages...</p>

      <MessageInput />

    </div>
  );
  
};

export default ChatContainer;