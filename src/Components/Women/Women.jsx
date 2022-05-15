import React, {useEffect}from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { getData } from '../../Redux/Products/action';
import MediaCard from '../Card/Card';


export const Women = () => {
    const dispatch = useDispatch();
    const {data} = useSelector((store) => store.data)
    
      useEffect(() => {
        dispatch(getData())
      }, [dispatch])
  return (
       <> 
       <h1>Women's Clothing Page</h1>
    <div className="container">
        {data.map((e, index)=>
          (e.category==="women's clothing")?<MediaCard key={index.toString()} props={e}/> : <></>
        )}
    </div>
    </>)
}
