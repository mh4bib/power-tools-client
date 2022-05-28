import React from 'react';

const Blogs = () => {
    return (
        <>
        <h1 className='text-3xl font-bold my-4 mb-8'>BLOGS SECTION</h1>
        <div className='grid grid-cols-1 mx-4 md:mx-60 my-4'>
            <div className='text-left bg-gray-300 p-6 rounded-md mb-4'>
                <h1 className='text-2xl font-bold mb-3'>How will you improve the performance of a React Application</h1>
                <div>
                    <p className='mb-2'>React applications are rendered very fast by default. As an application increase in size, there  may arise performance issues. By tacking some steps we can improve performance of a react application. </p>
                    <p><span className='font-semibold'>1. Using Production Build</span><br /> A very common and useful way of optimizing a react app is to bundling  app in build folder for production before deploying.React app is in development mode, which means React will include helpful warnings.</p>
                    <p><span className='font-semibold'>2. Immutable Data Structures</span><br /> Any data that cannot be changed is called immutable.  As an immutable object cannot be changed. So,  if there is an update it leaves  the old one untouched and they have no side effects too. Thus extend performance. </p>
                    <p><span className='font-semibold'>3. Analyzing React Component With Performance Tab</span><br /> In development mode, “Performance” tab in the Chrome browser is used to visualize how React component update.  Nevertheless, this should help you to figure out when the UI is updated by mistake, as well as how deep and how often the UI updates occur. Most times and components will render more quickly in production.</p>
                </div>
            </div>
            <div className='text-left bg-gray-300 p-6 rounded-md mb-4'>
                <h1 className='text-2xl font-bold mb-3'>What are the different ways to manage a state in a React application</h1>
                <div>
                    <p className='mb-2'>State objects are built in objects in react . It is where we store property values that belongs to the component. Whenever the state changes, the component re-renders.</p>
                    <p className='mb-2'><span className='font-semibold'>There are four kind of state in react:</span> <br />
                        a. Local state <br />
                        b. Global state <br />
                        c. Server state <br />
                        d. URL state</p>
                    <p><span className='font-semibold'>1.  useReducer</span><br /> The useReducer hook is a powerful React hook. It deals with complex state management and it does not any require third-party dependencies.</p>
                    <p><span className='font-semibold'>2. Custom Hook</span><br />Using React hooks we can solve a complex state logic within one component.We can make custom React hooks to solve complex logic with a single accessible hook. This  is very handy for forms, toggles, asynchronous behavior, and manything. </p>
                    <p><span className='font-semibold'>3. Data Fetching</span><br /> Pulling data from external APIs can be complicated once you start needing to cache the data in memory. We can overcome this problem using fetching library.There are modern data fetching libraries like React Query for effectively fetching, caching, invalidating, and refreshing data from external sources.</p>
                </div>
            </div>

            <div className='text-left bg-gray-300 p-6 rounded-md mb-4'>
                <h1 className='text-2xl font-bold mb-3'>How does prototypical inheritance work</h1>
                <div>
                    <p className='mb-2'>Everything in Javascript is an object. The Prototypal Inheritance is used to add methods in objects. In JavaScript, objects have a special hidden property [[Prototype]] that is either null or references another object. That object is called a prototype</p>
                    <p>Let, we set objectA as a prototype of objectB. Now, if we want to read a property from objectB which is not present in it but present in objectA, then it will take the value from prototype we set earlier. </p> <br />
                    <p>Thus prototypical inheritance work.</p>                </div>
            </div>

            <div className='text-left bg-gray-300 p-6 rounded-md mb-4'>
                <h1 className='text-2xl font-bold mb-3'>Why you do not set the state directly in React</h1>
                <div>
                    <p className='mb-2'>We shouldn’t  set the state directly. While a React component can have initial state, the real power is in updating its state</p>
                    <p><span className='font-semibold'>1. </span> If we mutate state directly and then subsequently call this.setState this may replace (overwrite?) the mutation you made. </p>
                    <p><span className='font-semibold'>2. </span>If we set a state directly, calling the setState() afterward may just replace the update we made. </p>
                    <p className='mb-2'><span className='font-semibold'>3. </span>When we directly update the state, it creates a pending state transition, and accessing it after calling this method will only return the present value. We will lose control of the state across all components. </p>
                    <p className='mb-2'> When building a project, the state starts with an initial default value on mount and is then altered later on as a result of a user’s actions. Each React component manages its own state internally.</p>
                    <p>  So, if we have <br />
                        const [products, setProducts] = useState([]). <br />
                        We do not set products = [...] instead, we use the setProducts</p>
                </div>
            </div>
            <div className='text-left bg-gray-300 p-6 rounded-md mb-4'>
                <h1 className='text-2xl font-bold mb-3'>What is a unit test?  Why should write unit tests?</h1>
                <div>
                    <p className='mb-2'>unit testing is a process in which the smallest testable parts of an application,  or units, are individually and independently tested for proper operation. It is the first level of functional testing.</p>
                    <p><span className='font-semibold'>1.</span> Unit tests reduce the number of bugs released in the production stage. It can often be a smart way for new developers to know code better.</p>
                    <p><span className='font-semibold'>2.</span> Any bugs are found easily and quickly </p>
                    <p><span className='font-semibold'>3.</span> By writing unit tests many bugs are found at the construction stage, which prevents the transition of these bugs to the next stages.</p>
                    <p><span className='font-semibold'>4.</span> The function will identify the invalid situation and log it and then we can fixed the bugs.</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Blogs;