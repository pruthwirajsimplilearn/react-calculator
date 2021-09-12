
import OpRow from './opRow.js';

const Screen = (props) => {
    return (
        <div>
            <OpRow value = {props.question}/>
            <OpRow value = {props.answer}/>
        </div>
    )
}
export default Screen;
