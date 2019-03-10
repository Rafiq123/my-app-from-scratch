import React, { Component, useState } from 'react';

//with class
// const WithSearch = (WrappedComponent) => {
//     return class extends Component {

//         state = {
//             searchItem: ''
//         }

//         handleChange = (e) => {
//             this.setState({
//                 searchItem: e.target.value
//             });
//         }

//         render() {
//             return (
//                 <div>
//                     <input type="text" value={this.state.searchItem} onChange={this.handleChange} />
//                     <WrappedComponent {...this.state}></WrappedComponent>
//                 </div>
//             )
//         }
//     }
// }


//with hooks
const WithSearch = (WrappedComponent) => {
    return () => {
        const [searchItem, setSearchItem] = useState("");
        function handleChange(e) {
            setSearchItem(e.target.value);
        }
        return (
            <div>
                <input type="text" value={searchItem} onChange={handleChange} />
                <WrappedComponent searchItem={searchItem}></WrappedComponent>
            </div>
        )
    }
}

export default WithSearch;
