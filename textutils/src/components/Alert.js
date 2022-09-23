import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    // javascript me use krte hai
    // && agar yeah use krte hai to phla(props.alert) ye chiz evaluate hogi aur agar yehi false huya to age evaluate hi nhi hoga
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
           {/* button dismiss ho jyga */}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>

  )
}

// export default Alert 