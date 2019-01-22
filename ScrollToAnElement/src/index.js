import React from 'react';
import ReactDOM from 'react-dom';
import ResortList from './ResortList';

export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inpValue : '',
            resortArr : [1,2,3,4,5]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.createDynamicRefs = this.createDynamicRefs.bind(this);
        this.generateResortList = this.generateResortList.bind(this);
    }

    onTextChange(e){
        this.setState({
            inpValue : e.target.value
        })
    }

    handleSubmit(){
        window.scroll({left : 0,top : this.refArr[this.state.inpValue].current.offsetTop, behavior: 'smooth'})
    }

    createDynamicRefs(){
        let refArr = [];
        for(let item of this.state.resortArr){
            refArr[item] = React.createRef();
        }
        this.refArr = refArr;
    }

    generateResortList(){
        return this.state.resortArr.map(item => {
            return <ResortList key={item} ref={this.refArr[item]} resortNum={item}/>
        })
    }

    render(){
        this.createDynamicRefs();
        let resortList = this.generateResortList();
        
        return(
            <div>
                <div>Scroll to an element</div>
                <input type="text" value={this.state.inpValue} onChange={this.onTextChange}/>
                <button ref={20} type="submit" onClick={this.handleSubmit}> Scroll to element </button>
                <div>{resortList}</div>
            </div>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('app'));