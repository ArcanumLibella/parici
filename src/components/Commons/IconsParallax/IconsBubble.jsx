import React, {Fragment} from 'react'


// SVG
import {
    Archery,
    Athletic,
    BMX,
    BMXFreestyle,
    Badminton,
    Basketball,
    Basketball3,
    Beachvolley,
    Boxing,
    Breakdance,
    Canoe,
    Climbing,
    Equestrian,
    Fencing,
    Football,
    Golf,
    Gymnastic,
    Handball,
    Hockey,
    Judo,
    MountainBike,
    OpenWaterSwimming,
    Pentathlon,
    RoadBike,
    Rowing,
    Rugby,
    Shooting,
    Skateboarding,
    IndoorSwimming,
    TableTennis,
    Taekwendo,
    Tennis,
    Track,
    Triathlon,
    Volleyball,
    Weightlifting,
    Wrestling
} from '../../../assets/icons/all-icons'


const IconsBubble = () => {
    // Function to generate random icons
    const generateRandomIcons = () => {
        const iconsArray = [
            <Archery/>,
            <Athletic/>,
            <BMX/>,
            <BMXFreestyle/>,
            <Badminton/>,
            <Basketball/>,
            <Basketball3/>,
            <Beachvolley/>,
            <Boxing/>,
            <Breakdance/>,
            <Canoe/>,
            <Climbing/>,
            <Equestrian/>,
            <Fencing/>,
            <Football/>,
            <Golf/>,
            <Gymnastic/>,
            <Handball/>,
            <Hockey/>,
            <Judo/>,
            <MountainBike/>,
            <OpenWaterSwimming/>,
            <Pentathlon/>,
            <RoadBike/>,
            <Rowing/>,
            <Rugby/>,
            <Shooting/>,
            <Skateboarding/>,
            <IndoorSwimming/>,
            <TableTennis/>,
            <Taekwendo/>,
            <Tennis/>,
            <Track/>,
            <Triathlon/>,
            <Volleyball/>,
            <Weightlifting/>,
            <Wrestling/>
        ]
        return (
            iconsArray[Math.floor(Math.random() * iconsArray.length)]
        )
    }

    // Function to generate icons

    const interval = () => {
      setInterval(function handleIconsParallax() {
        const n = 5 // Number of icons in background (max 100)
        console.log('coucou')
        return ([...Array(n)].map
            (

                (icons, i) => (
                    <div>{generateRandomIcons()}</div>


                )

            )
        )
    }, 1000) }


    return (
        <Fragment>
            {interval()}
        </Fragment>
    )
}

export default IconsBubble