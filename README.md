////////////////////////// userEffect /////////////////////////

"useEffect" is alternative of this react lifecycle functions.

"componentDidMount, componentDidUpdate and componentWillUnmount"

1. By default, it runs after every render but we can customize it with the second param of the useEffect function.

2. As a second argument, the useEffect function accepts an array that allow us to tell React when we want our effect to be called.

3. After a render and before calling an effect, React will compare the array of values defined in the second parameter of the effect with the array defined in the same effect from the previous render. React will only call the effect when any value of the array has changed since the previous render.