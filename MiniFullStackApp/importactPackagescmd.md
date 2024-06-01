## create frontend react project using vite
-- npm create vite@install

## create backend node project
-- npm init

## install express 
-- npm i express

## install dotenv 
-- npm i dotenv

## install axios for api consumptions
-- npm i axios

## install mongoose for Data Modeling
-- npm i mongoose
-- then create models with suggested name convention ex: user.models.js

```javascript
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({});

export const User = mongoose.model('User', userSchema);
```

another example of model file



## below is an example of Data models for todo application

file name 1 : user.models.js
```javascript
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
    isActive: Boolean,
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
```

file name 2 : todo.models.js
```javascript
import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ], //Array of Sub-Todos
  },
  {
    timestamps: true,
  }
);

export const Todo = mongoose.model('Todo', todoSchema);
```

file name 3 : sub_todo.models.js
```javascript
import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);
```