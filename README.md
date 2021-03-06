## redux-2way-binding
Build two way binding with Redux and Immutable.

[Redux](https://github.com/rackt/redux) is a predictable state container for JavaScript apps.  
[Immutable](https://github.com/hughfdjackson/immutable) neatly packages immutable equivalents to JavaScript's Objects and Arrays.

Get Started
===============

Three step to set 2-way binding:
1. createReducer:
----------------
```js
import { bindingStore } from 'redux-2way-binding';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  // ...
});

export default bindingStore('users', initialState, {
  // ...
})
```

2. setStore:
-------------
```js
import { bindingMixin } from 'redux-2way-binding';

@bindingMixin
export default class UserManager extends Component {
  constructor(props) {
    super(props);
    this.setBinding('users');
  }
}
```

3. binding:
-----------
```js
render() {
  const { users } = this.props;

  return (
    <div>
      <div>
        <p>Name:<input type='text' valueLink={this.binding('name')}/></p>
        <p>Age:<input type='number' valueLink={this.binding('age')}/></p>
        <p>Sex:
          <select valueLink={this.binding('sex')}>
            <option value='male'>male</option>
            <option value='female'>female</option>
          </select>
        </p>
      </div>

      <div>
        <p> Name:{users.get('name')}</p>
        <p> Age:{users.get('age')}</p>
        <p> Sex:{users.get('sex')}</p>
      </div>
    </div>
  )
}
```

Manual Change Functions
==========
Help user to set reducer by path and value or function,avoid to write more actions.

1. Manual change a reducer by path and value:
--------------
```js
this.manualChange('name', 'john');
```
2. Manual change a reducer by path and covert function:
--------------
```js
this.manualChange('age', function(age) {
 return ++age;
});
```        

Usage
==========
```sh
$ npm install redux-2way-binding
```  
Run example
==========
```
$ cd example
$ npm install
$ gulp dev
```

Note
==========

The component will be used to binding must have 2 props.  
One is dispatch that is created by redux.  
Another is the store which to be set in `"this.setBinding('users')"`.
