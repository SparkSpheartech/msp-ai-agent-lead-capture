"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, X, Minimize2, Maximize2 } from 'lucide-react';

const AIChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            role: 'assistant',
            content: "Hi! I'm SparkSphear's AI Assistant. How can I help you today?",
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Auto-scroll to bottom when new messages appear
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = {
            id: Date.now(),
            role: 'user',
            content: input.trim(),
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // REPLACE THIS WITH YOUR N8N WEBHOOK URL
            // Create an n8n workflow with a webhook trigger that connects to an AI
            const N8N_WEBHOOK_URL = 'YOUR_N8N_WEBHOOK_URL_HERE';

            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessage.content,
                    history: messages.map(m => ({
                        role: m.role,
                        content: m.content
                    }))
                })
            });

            let aiResponse = "I'm here to help! Please configure your n8n webhook to enable AI responses.";

            // If you get a response, use it
            if (response.ok) {
                const data = await response.json();
                aiResponse = data.response || data.message || aiResponse;
            }

            const assistantMessage = {
                id: Date.now() + 1,
                role: 'assistant',
                content: aiResponse,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, assistantMessage]);

        } catch (error) {
            console.error('Chat error:', error);
            const errorMessage = {
                id: Date.now() + 1,
                role: 'assistant',
                content: "I'm having trouble connecting right now. Please try again or contact support directly.",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    // Floating button when chat is closed
    if (!isOpen) {
        return (
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-3 px-6 py-4 bg-lime-500 text-zinc-950 font-bold rounded-full hover:bg-lime-400 transition-all duration-300 shadow-lg shadow-lime-500/30 hover:scale-105"
                >
                    <Bot className="w-5 h-5" />
                    <span>Chat with AI</span>
                </button>
            </div>
        );
    }

    // Minimized state
    if (isMinimized) {
        return (
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsMinimized(false)}
                    className="flex items-center gap-3 px-6 py-4 bg-lime-500 text-zinc-950 font-bold rounded-full hover:bg-lime-400 transition-all duration-300 shadow-lg shadow-lime-500/30"
                >
                    <Bot className="w-5 h-5" />
                    <span>AI Chat</span>
                </button>
            </div>
        );
    }

    // Full chat window
    return (
        <div className="fixed bottom-6 right-6 w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl z-50 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-zinc-800 border-b border-zinc-700">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center">
                        <Bot className="w-5 h-5 text-zinc-950" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold">AI Assistant</h3>
                        <p className="text-xs text-gray-400">Powered by SparkSphear</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsMinimized(true)}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <Minimize2 className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        {message.role === 'assistant' && (
                            <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <Bot className="w-4 h-4 text-zinc-950" />
                            </div>
                        )}
                        <div
                            className={`max-w-[80%] p-3 rounded-lg ${
                                message.role === 'user'
                                    ? 'bg-lime-500 text-zinc-950'
                                    : 'bg-zinc-800 text-gray-200'
                            }`}
                        >
                            <p className="text-sm">{message.content}</p>
                        </div>
                        {message.role === 'user' && (
                            <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center flex-shrink-0">
                                <User className="w-4 h-4 text-white" />
                            </div>
                        )}
                    </div>
                ))}
                {isLoading && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center">
                            <Bot className="w-4 h-4 text-zinc-950" />
                        </div>
                        <div className="bg-zinc-800 p-3 rounded-lg">
                            <Loader2 className="w-5 h-5 text-lime-500 animate-spin" />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-zinc-700">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your question..."
                        className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:border-lime-500 focus:outline-none"
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        className="px-4 py-3 bg-lime-500 text-zinc-950 font-bold rounded-lg hover:bg-lime-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AIChat;