import React from 'react'
// import { getGifs } from '../Helpers/getGifs';
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs(category);

    // useEffect(() => {
    //     getGifs(category).then((images => setImages(images)));
    // }, [category])

    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Cargando ...</p> }

            <div className="gif-grid">
                {
                    images.map((image) => 
                         (
                            <GifItem
                                key={image.id}
                                {...image}
                            />
                        )
                    )
                }
            </div>
        </>
    )
}
