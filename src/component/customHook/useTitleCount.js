// Custom Hooks in react
// A custom hook is a js function whose name starts with "use"
// we can use other hooks in custom hooks as well.

// why to use Custom Hook ?
// to remove the duplicated logic in Components and we can extract that logic to custom hook.

import { useEffect } from "react";

const useTitleCount = (count) => {
    useEffect(() => {
        // console.log("I am first one");
        if (count >= 1) {
            document.title = `Chats (${count})`
        } else {
            document.title = `Chats `
        }
    }, [count]);
}

export default useTitleCount;