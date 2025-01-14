import { create } from "zustand"

// export type ConversationType = {
//     id: string,
//     fullName: string,
//     profilePic: string,
// }

export type MessageType = {
    id: string,
    body: string,
    senderId: string,
    createAt: string,
    shouldShake?: boolean,
}


interface ConversationState {
    selectedConversation: ConversationType | null
    messages: MessageType[]
    setSelectedConversation: (conversation: ConversationType | null) => void
    setMessages: (message: MessageType[]) => void
}



const useConversation = create<ConversationState>((set) => ({
    selectedConversation: null,
    setSelectedConversation: (conversation) => set({ selectedConversation: conversation }),
    messages: [],
    setMessages: (message) => set({ messages: message })
}))

export default useConversation