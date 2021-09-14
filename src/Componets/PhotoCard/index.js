import React, { Fragment, useEffect, useRef, useState } from "react";
import { ImgWrapper, Img, Button,Article } from "./styles";
import { MdFavoriteBorder } from 'react-icons/md'

const defalut_image = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
export const PhotoCard = ({ id, likes = 0, src = defalut_image }) => {
    const element = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver((entries) => {
            const { isIntersecting } = entries[0]
            console.log(isIntersecting);
            if (isIntersecting) {
                console.log('si se wacha');
                setShow(true);
                observer.disconnect();
            }

        });
        observer.observe(element.current)
    }, [element])


    return (
        <Article ref={element}>
            {
                show && <Fragment>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper className="">
                            <Img src={src} alt="" />
                        </ImgWrapper>
                    </a>
                    <Button>
                        <MdFavoriteBorder size='32px' />{likes} Likes!!
                    </Button>
                </Fragment>
            }


        </Article>
    );
};