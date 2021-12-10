import React, { useState } from "react";
import { IconPicker } from 'react-fa-icon-picker';

export default () => {
    const [value, setValue] = useState("")
    return (
        <div className="test" style={{ marginLeft: '100px' }}>
            <IconPicker value={value} onChange={(v) => setValue(v)} pickerIconStyles={{ color: 'grey' }} containerStyles={{ background: 'white', border: '1px solid grey' }} searchInputStyles={{
                position: 'fixed', overflow: 'hidden', width: '20%'
            }} />
        </div>
    )
}
