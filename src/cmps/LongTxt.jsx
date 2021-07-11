import React, { useState } from 'react'

export const LongTxt = ({txt}) => {

    const [readMore, toggleReadMore] = useState(false)

    const getTxt = () => {
        // if (readMore) return txt;
        return (txt.slice(0, 15)+'...');
    }

    // const toggleRead = (ev) => {
    //     // !this.state.readMore && 
    //     ev.preventDefault()
    //     // this.setState((prev) => ({ ...prev, readMore: !prev.readMore }))
    //     toggleReadMore(!readMore)

    // }

    // const addReadmoreMsg = () => {
    //     if (this.props.txt.length > 100) {
    //         return (this.state.readMore) ? ' Less' : ' Expand...'
    //     }
    // }


    return (
        // <span onClick={()=>toggleRead()}>
        <span >
            <p className="read-more">
                {getTxt()}
                {/* <span className="expand-txt">{this.addReadmoreMsg()}</span> */}
            </p>
        </span>
    )
}
