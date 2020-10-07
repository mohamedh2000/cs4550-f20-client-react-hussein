import React from 'react';

class ModuleListComponent extends React.Component {

    render() {
        return (
            <div>
                <li className="list-group-item wbdv-module-item"> <strong className="wbdv-module-item-title"> Module 1 - jQuery</strong> <i class="btn wbdv-module-item-delete-btn fas fa-times float-right"></i></li>
                <li  className="list-group-item activewbdv-module-item active"> <strong className="wbdv-module-item-title"> Module 2 - React</strong> <i class="btn wbdv-module-item-delete-btn  fas fa-times float-right"></i></li>
                <li  className="list-group-item wbdv-module-item"> <strong className="wbdv-module-item-title"> Module 3 - Redux</strong> <i class="btn wbdv-module-item-delete-btn fas fa-times float-right"></i></li>
                <li  className="list-group-item wbdv-module-item"> <strong className="wbdv-module-item-title"> Module 4 - Native</strong> <i class="btn wbdv-module-item-delete-btn fas fa-times float-right"></i></li>
                <li  className="list-group-item wbdv-module-item"><strong className="wbdv-module-item-title"> Module 5 - Angular</strong> <i class="btn wbdv-module-item-delete-btn fas fa-times float-right"></i></li>
                <li  className="list-group-item wbdv-module-item"><strong className="wbdv-module-item-title"> Module 6 - Node</strong> <i class="btn wbdv-module-item-delete-btn fas fa-times float-right"></i></li>
                <li  className="list-group-item wbdv-module-item"><strong className="wbdv-module-item-title"> Module 7 - Mongo</strong> <i class="btn wbdv-module-item-delete-btn fas fa-times float-right"></i></li>
                <i className="btn wbdv-module-item-add-btn module-plus fas fa-plus float-right"></i>
            </div>
        )

    }
}

export default ModuleListComponent;