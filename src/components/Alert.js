import React from 'react'

export default function Alert(props) {
    const capita = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismisible fade show`} role='alert'>
  <strong>{capita(props.alert.type)}:</strong> {props.alert.msg}
</div>
  )
}