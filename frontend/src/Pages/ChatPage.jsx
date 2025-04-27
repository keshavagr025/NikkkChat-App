import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { ChatState } from '../Context/ChatProvider';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyChats from '../components/MyChats';
import ChatBox from '../components/ChatBox';



const ChatPage = () => {
    const {user} = ChatState();

    const [fetchAgain, setfetchAgain] = useState(false)

    return (
        <div style={{width: "100vw"}}>
            {user && <SideDrawer/>}
            <Box
                display="flex"
                justifyContent="space-between"
                width="100vw"
                height="91vh"
                padding="10px"
            >
                {user && (
                <MyChats
                fetchAgain={fetchAgain}
                />
                )}
                {user && (
                <ChatBox 
                fetchAgain={fetchAgain} setFetchAgain={setfetchAgain}
                />
                )}

            </Box>

        </div>
);

}

export default ChatPage;
