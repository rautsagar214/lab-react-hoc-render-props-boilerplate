import React from 'react'

export default function CommonHoc(ChildComponent) {

    let logic = () =>{
        // count 
        const [count , setCount] = React.useState(0)

        // function 
        function handleCount(){
            setCount(count + 1)
        }

        return <ChildComponent handleCount={handleCount} count={count} />
    }

    return (
        logic 
    )
}