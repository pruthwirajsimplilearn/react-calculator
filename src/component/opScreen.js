
import OpRow from './opRow.js';

const Screen = (props) => {
    return (
        <div>
            <OpRow value = {props.question} placeholder="Enter"/>
            <OpRow value = {props.answer} placeholder="Answer"/>
        </div>
    )
}
export default Screen;
