// hooks/useTodos/index.js
import { useState } from 'react';

const useDemo = () => {
    const [demos, setDemos] = useState({ state: "STAND_BY", status: 500, msg: "", results: null });

    return {
        demos,
    };
};

export default useDemo;
