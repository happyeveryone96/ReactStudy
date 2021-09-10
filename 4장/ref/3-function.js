import React, { useState } from 'react';

export default function App() {
    const [text, setText] = useState(INITIAL_TEXT);
    const [showText, setShowText] = useState(true);
    return (
        <div>
            {showText && (
                <input
                    type="text"
                    ref={ref => ref && setText(INITIAL_TEXT)}
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            )}
            <button onClick={() => setShowText(!showText)}>보이기/가리기</button>
        </div>
    );
}

const INITIAL_TEXT = '안녕하세요';