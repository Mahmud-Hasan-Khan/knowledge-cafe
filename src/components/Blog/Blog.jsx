const Blog = () => {
    return (
        <div className="ml-12 mr-12 mt-10">
            <h1 className="text-5xl font-semibold text-center">Welcome To React Blog </h1>
            <h2 className="text-2xl font-semibold underline">Props vs State</h2>
            <p className="text-xl bg-slate-300 p-2 mt-2">The difference comes in which component the data are owned. The state is owned locally, and the component itself updates it. Props are owned and read only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child. <br />
                Props: <br />
                Props are short for "properties" and are used to pass data from a parent component to a child component. They are read-only, which means that the child component cannot modify the data received through props. The parent component is responsible for updating the data passed down through props. Props are used to configure and customize a component based on the needs of the parent component.
                <br />
                State: <br />
                State is used to manage data within a component. It is a JavaScript object that holds the data that can change over time. Unlike props, the component itself can modify the data stored in the state. The state is used to store data that affects the component's behavior and rendering. When the state changes, the component re-renders to reflect the updated state.</p>
            <h2 className="text-2xl font-semibold underline">How does useState work?</h2>
            <p className="text-xl bg-slate-300 p-2 mt-2">useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            <h2 className="text-2xl font-semibold underline">Purpose of useEffect other than fetching data</h2>
            <p className="text-xl bg-slate-300 p-2 mt-2">useEffect has several other purposes as well. Here are a few examples: <br /> <br />

                Updating the document title: <br />
                The useEffect hook can be used to update the document title based on the state of the component. This is useful when building single-page applications that dynamically change their title based on user interaction or other events. <br /> <br />

                Event listeners: <br />
                useEffect can also be used to add and remove event listeners. This is useful when building interactive components that respond to user input, such as a dropdown menu that opens or closes when the user clicks on it. <br /><br />

                Managing animations: <br />
                Animations can be managed using useEffect. For example, you can use it to trigger a CSS transition when a component is mounted or unmounted. <br /> <br />

                Timers and intervals: <br />
                useEffect can be used to set up and clean up timers and intervals. For example, you can use it to update a clock every second or to fetch data from an API at regular intervals. <br /><br />

                Managing the state of the component: <br />
                useEffect can be used to manage the state of the component, by executing code after the state has been updated. This can be useful when you need to perform some action after a state change, such as updating a third-party library or triggering a side effect.</p>

            <h2 className="text-2xl font-semibold underline">How Does React work?</h2>
            <p className="text-xl bg-slate-300 p-2 mt-2">Overview of how React works: <br />

                Components: <br />
                React is based on the concept of components. A component is a self-contained module that defines its own structure and behavior. Components can be reused across the application and are composed together to create the final UI. <br /> <br />

                Virtual DOM: <br />
                React uses a virtual representation of the DOM, called the virtual DOM. The virtual DOM is a lightweight copy of the actual DOM, which allows React to perform efficient updates to the UI. When a component's state changes, React updates the virtual DOM, which then performs a diffing algorithm to identify the minimal set of changes required to update the actual DOM. <br /> <br />

                Render method: <br />
                Each component in React has a render method, which returns a description of what should be displayed on the screen. This description is then used to update the virtual DOM. <br /><br />

                Props and State: <br />
                React components can receive data through props, which are used to configure and customize the behavior of the component. State is used to manage data within a component. When the state changes, the render method is called again, and the virtual DOM is updated. <br /><br />

                Lifecycle methods: <br />
                React components have a set of lifecycle methods that are called at different stages of their lifecycle. These methods allow developers to perform actions at specific points in the component's lifecycle, such as when it is first mounted, updated, or unmounted. <br /><br />

                React DOM: <br />
                React DOM is the package used to interact with the actual DOM. It provides methods for updating the DOM based on the changes made to the virtual DOM.</p>
        </div>
    );
};

export default Blog;