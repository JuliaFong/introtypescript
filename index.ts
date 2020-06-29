import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1"

axios.get(url).then(response => {
    interface ToDo {
        id: number;
        title: string;
        completed: boolean;
    }
    const todo = response.data as ToDo

    const id = todo.id
    const title = todo.title
    const completed = todo.completed

    logTodo(id, title, completed)


});

const logTodo = (id: number, title: string, completed: boolean) => {
    
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
    `);
};


//typescript has primitive types and object types

// primitive tiypes include number, boolean, void undefined
//string, symbol. null

//object types include functions, arrays, classes, and objects
 
//why are there two types?

//Type: easy way to refer to different properties + functions that a value has

// we care about types because Types are used by the
//TypeScript Compiler to analyze our code for errors

//Types allow other engineers to understand what
// values are flowing around our codebase

