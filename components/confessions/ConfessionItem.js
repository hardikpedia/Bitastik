import React from "react";
import Image from "next/image";
import { format } from "timeago.js";

import Upvote from '../../assets/upvote.png'
import Downvote from '../../assets/downvote.png'
function Confession({confession}) {
    function upvoteHandler(){

    }
    function downvoteHandler(){

    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <span className="postDate">{format(confession.createdAt)}</span>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{confession.content}</span>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <Image
                            className="likeIcon"
                            src={Upvote}
                            onClick={upvoteHandler}
                            alt=""
                        />
                        <span className="postLikeCounter">upvotes</span>
                        <Image
                            className="likeIcon"
                            src={Downvote}
                            onClick={downvoteHandler}
                            alt=""
                        />
                        <span className="postLikeCounter">downvotes </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Confession;
