// import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
// export default class NavBar extends Component {

//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //       searchInput: ''
//     //     };
//     //   }
    
//     //   handleInputChange = (e) => {
//     //     this.setState({ searchInput: e.target.value });
//     //   };
    
//     //   handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     this.props.onSearch(this.state.searchInput);
//     //   };
//     render() {
//         return (
//             <div>
//                 <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
//                     <div className="container-fluid">
//                         <Link className="navbar-brand" to="/">NEWS APP</Link>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li className="nav-item">
//                                     <Link className="nav-link " aria-current="page" to="/">Home</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                 <Link className="nav-link " aria-current="page" to="/">General</Link> </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link " aria-current="page" to="/business">Business </Link> </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link " aria-current="page" to="/entertainment">Entertainment</Link> </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link " aria-current="page" to="/health">Health</Link> </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link " aria-current="page" to="/science">Science</Link> </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link " aria-current="page" to="/sports">Sports</Link> </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link " aria-current="page" to="/technology">Technology</Link> </li>
//                             </ul>
//                             {/* <form className="d-none d-lg-flex" onSubmit={this.handleSubmit}>
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//                 value={this.state.searchInput}
//                 onChange={this.handleInputChange}
//               />
//               </form> */}

//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         )
//     }
// }



//          Converting Class Based Components into Functional Components
import {Link} from 'react-router-dom';

const NavBar= () =>{

        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NEWS APP</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">General</Link> </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/business">Business </Link> </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/entertainment">Entertainment</Link> </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/health">Health</Link> </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/science">Science</Link> </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/sports">Sports</Link> </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/technology">Technology</Link> </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        )
}

export default NavBar;
