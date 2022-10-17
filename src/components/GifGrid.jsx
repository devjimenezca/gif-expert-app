import { useFetchGifs } from '../hooks/useFetchGifs';
import { GriItem } from './GriItem';

export const GifGrid = ({ category }) => {
  
  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && <h2>Cargando...</h2>
        }
        <div className='card-grid' >
          { images.map( item => (
            <GriItem key={item.id} 
                { ...item }
            ></GriItem>
          )) }
        </div>
    </>
  )
}
