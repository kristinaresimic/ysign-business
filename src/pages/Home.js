import React from 'react'
import NavbarCustom from '../components/NavbarCustom'
import {CarouselCustom} from '../components/CarouselCustom'
import {WhyChoose} from '../components/WhyChoose'
import {CEO} from '../components/CEO'
import Footer from '../components/Footer'
import { Features } from '../components/Features/Features'

export const Home = () => {
    return (
        <div>
            <NavbarCustom />
            <CarouselCustom />
            <Features />
            <WhyChoose />
            <CEO />
            <Footer />
        </div>
    )
}
