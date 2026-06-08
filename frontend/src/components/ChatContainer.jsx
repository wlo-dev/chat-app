import { useChatStore } from "../store/useChatStore";
import { useEffect} from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";




const ChatContainer = () => {

    const { messages, getMessages, isMessagesLoading, selectedUser} = useChatStore()

      useEffect(() => {
        getMessages(selectedUser._id)
      },[selectedUser, getMessages])

  if(isMessagesLoading) return <div>Loading messages...</div>


 

  return (
    <div className= "flex flex-col flex-1 h-full">
      <ChatHeader/>
      <p>messages...</p>

      <MessageInput />


    </div>
  )
  
};

export default ChatContainer;