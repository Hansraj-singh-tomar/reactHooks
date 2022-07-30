import React from 'react'

const PreStateExp = () => {
    const [count, setCount] = React.useState(1);
    function updateCounter() {
        // setCount(count + 1);
        // setCount(Math.floor(Math.random() * 10));  // for get random value

        // let random = Math.floor(Math.random() * 10);
        // setCount((pre) => {
        //     console.warn(pre);
        {/* 
            //     if (pre - random < 5) {
            //        alert("TopUp");
            //      } 
        */}
        //     if (pre < 5) {
        //         alert('low value');
        //     }
        //     return random;
        // });

        // setCount(count + 5);
        // ab ham loop use karenge, 5 times loop chalega and value ko 5 se increase kar dega
        // for (let i = 0; i < 5; i++){
        //     setCount(count + 1);    // but yha hamari value 5 se increase nhi ho rhi hai ye isko ek se hi increase kar rha hai  
        // }
        // setCount((pre) => pre + 1); // 1,2,3,4,5 and so on ....
        for (let i = 2; i < 5; i++) {
            setCount((pre) => pre + 1);  // ye bilkul shi work kar rha hai 
        }
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={updateCounter}>Click to Update counter</button>
        </div>
    )
}

export default PreStateExp