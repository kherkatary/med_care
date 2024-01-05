import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './TeamCardHolder.scss'
import { Icon } from '@iconify/react';
import Cards from '../Cards/Cards'
import data from "../../../assets/teams.json"
const TeamCardHolder = ({ heading }) => {


    const background = "https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?w=1380&t=st=1703436938~exp=1703437538~hmac=a1eb844c4027f4d6afa57abdd756c14ee294fafcc49b1236eda932d3f52326d0"
    return (
        <>
            <div className='holderContainer'>
                <h1 className='holderHeading'>
                    <div className="headingTitle">{heading}</div>
                </h1>
                <div className="holder">
                    {
                        data?.map((item) => <Cards key={item.id} name={item?.name} designation={item?.designation} bio={item?.company?.catchPhrase} photoSrc={item?.image} />)
                    }
                </div>
            </div>

            <div className="cardCarousal">

                <Swiper className="mySwiper"
                    slidesPerView={1.5}
                    effect="coverflow"
                    grabCursor={1}
                    centeredSlides={1}
                    loop={1}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 2500,
                    }}
                    navigation={{
                        nextEl: "#next",
                        prevEl: "#prev",
                        clickable: true,
                    }}
                // swiper end
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Cards key={item.id} name={item?.name} designation={item?.designation} bio={item?.company?.catchPhrase} photoSrc={item?.image} />
                        </SwiperSlide>
                    ))}

                    {/* <div id="controller">
                        <div className="swiperButtonPrev" id="prev">
                        <Icon icon="grommet-icons:previous" color="black" width="40" />
                        </div>
                        <div className="swiperButtonNext" id="next">
                        <Icon icon="grommet-icons:next" color="black" width="40" />
                        </div>
                    </div> */}

                </Swiper>


            </div>

        </>
    )
}

export default TeamCardHolder