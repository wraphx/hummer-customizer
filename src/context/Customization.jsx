import { createContext, useContext, useState } from 'react'
import { proxy, useSnapshot } from 'valtio';

const CustomizationContext = createContext({})

export const CustomizationProvider = (props) => {
    const materialsMap = {
        BaseMtl: 'white',
        Slaughter: 'white',
        BatLady: 'white',
        BrakeLine: 'white',
        Embers: 'white',
        SpiderID: 'white',
        Fluid: 'white',
        HotRods: 'white',
        Mayan: 'white',
        SeaBreeze: 'white',
        ShapeShifter: 'white',
        Silk: 'white',
        SnakeSkin: 'white',
        Flare: 'white',
        Dominator: 'white',
        TopGun: 'white',
        Explosion: 'white',
        WildWest: 'white',
        Zombie: 'white',
      
      };

      const carColors = [
        {
            color: "#828282",
            name: 'grey',
        },
        {
            color: "#ff1100",
            name: 'red',
        },
        {
            color: "#0008ff",
            name: 'blue',
        },
        {
            color: "#d400ff",
            name: 'purple',
        },
        {
            color: "#ff78cb",
            name: 'pink',
        },
        {
            color: "#fffb00",
            name: 'yellow',
        },
        {
            color: "#02ab13",
            name: 'green',
        },
      ]

    const [overlay, setOverlay] = useState(1)
    const [carColor, setCarColor] = useState(carColors[0])
    const state = proxy({
        current: null,
        main: { ...materialsMap },
      });

      const snap = useSnapshot(state);
    
    return (

        <CustomizationContext.Provider
            value={{
                overlay,
                setOverlay,
                state,
                snap,
                carColor,
                setCarColor,
            }}
        >
            {props.children}
        </CustomizationContext.Provider>

    )
}

export const useCustomization = () => {
    const context = useContext(CustomizationContext);

    return context;
}