const FilmImg =({pic})=>{
    return(
        <img src={pic} alt="IMG Not found"/>
    )
}
const Carrousel =({images})=>{
    
    return(
        <div className="film-band">
            
            {images.map((e,index)=>{return(
<FilmImg key={index} pic={e} />
            )})}
        </div>
    )
}
export default Carrousel;