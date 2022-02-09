import { useEffect, useState } from "react";
import {getGifs} from '../Helpers/getGifs';

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data:[],
        loading: true,
    });

    useEffect(() => {

        getGifs(category)
            .then(imgs => {
                
                console.log(imgs);
                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false
                    })
                }, 1000);

            })

    }, [category])
    

    // setTimeout( () => {
    //     setState({
    //         data: [1,2,3,4],
    //         loading: false
    //     })
    // },3000 ) 

    return state; 

};
