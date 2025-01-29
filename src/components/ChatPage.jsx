import React from 'react';

function ChatPage() {

    useEffect(() => {
        document.title = 'EagleDocs';
        }, []);
    
    return (
        <div className="h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold">Bienvenido al Chat de EagleDocs</h1>
        </div>
    );
}

export default ChatPage;
