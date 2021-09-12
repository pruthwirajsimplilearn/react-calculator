
const OpRow = (props) => {
    return (
        <div className="srow">
            <input 
                type="text" 
                readOnly 
                value={props.value}
                placeholder={props.placeholder}/>
        </div>
    )
}
export default OpRow;