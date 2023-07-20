import React from 'react';

class Tools extends React.Component {
    render() {
        const{
            children
        }=this.props;
        return <div>
            <div className='list-Header'>
                <select name='status'>
                    <option  value='all'>All</option>
                    <option  value='active'>Active</option>
                    <option  value='non-active'>Non Active</option>

                </select>

            </div>
            {children}
            <div className='list-Footer'>
                Some info here

</div>
        </div>
    }
}

export  default Tools;