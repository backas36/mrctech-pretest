import { useState } from "react";
import styled from 'styled-components'

import leftArrow from './left-arrow.svg'
import rightArrow from './right-arrow.svg'

const dataSlider = [
  {
    id: 1,
    imgUrl: 'https://via.placeholder.com/600/1e71a2'
  },
  {
    id: 2,
    imgUrl: 'https://via.placeholder.com/600/3a0b95'

  },
  {
    id: 3,
    imgUrl: 'https://via.placeholder.com/600/659403'

  },
  {
    id: 4,
    imgUrl: 'https://via.placeholder.com/600/6ad437'

  },
  {
    id: 5,
    imgUrl: 'https://via.placeholder.com/600/75334a'
  },
  {
    id: 6,
    imgUrl: 'https://via.placeholder.com/600/1e71a2'
  },
  {
    id: 7,
    imgUrl: 'https://via.placeholder.com/600/b5205d'

  },
  {
    id: 8,
    imgUrl: 'https://via.placeholder.com/600/a19891'

  },
  {
    id: 9,
    imgUrl: 'https://via.placeholder.com/600/31a74c'

  },
  {
    id: 10,
    imgUrl: 'https://via.placeholder.com/600/88b703'
  },
];

const CarouselWrapper = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  margin-top: 50px;
`
const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  transition: opacity ease-in-out 0.4s;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &.active-anim {
    opacity: 1;
  }
`
const SlideBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f1f1f1;
  border: 1px solid rgba(34, 34, 34, 0.287);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.prev {
    top: 50%;
    left: 10px;
    transform: translateY(-60%);
  }
  &.next {
    top: 50%;
    right: 10px;
    transform: translateY(-60%);
}
  & img {
    width: 16px;
    height: 16px;
    pointer-events: none;
  }
`
const DotsWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`
const Dot = styled.div`
  cursor:pointer;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 3px solid #f1f1f1;
  margin: 0 5px;
  background: #f1f1f1;
  &.active {
    background: rgb(32, 32, 32);
  }
`
const BtnSlider = ({ direction, changeSlide }) => {
  return (
    <SlideBtn
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
      onClick={changeSlide}
    >
      <img
        src={direction === 'next' ? rightArrow : leftArrow}
        alt="next banner"
      ></img>
    </SlideBtn>
  )
}

export default function BannerCarousel() {
  const [slideIndex, setSlideIndex] = useState(1)
  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1)
    }
  }
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length)
    }
  }

  const changeDot = (index) => {
    setSlideIndex(index)
  }
  return (
    <CarouselWrapper>
      {dataSlider.map((obj, index) => {
        return (
          <Slide
            className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
            key={obj.id}
          >
            <img
              src={obj.imgUrl}
              alt="banner"
            />
          </Slide>
        )
      })}
      <BtnSlider changeSlide={nextSlide} direction={"next"} />
      <BtnSlider changeSlide={prevSlide} direction={"prev"} />
      <DotsWrapper>
        {Array.from({ length: dataSlider.length }).map((item, index) => {
          return (
            <Dot
              key={`dot${index}`}
              onClick={() => { changeDot(index + 1) }}
              className={slideIndex === index + 1 ? 'dot active' : 'dot'}
            >

            </Dot>
          )
        })}
      </DotsWrapper>

    </CarouselWrapper>
  )
}