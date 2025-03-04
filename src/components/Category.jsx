import data from "../assets/data.json"
import Carrousel from "./Carrousel"

    const Catergory =()=>{
        return(
            <>
            {data.map((e,index)=>{
                return(
                    <div key={index} className="category-box">
                        <h1>{e.category}
                        </h1>
                        <div>
                            <Carrousel  images={e.images} />
                        </div>
                    </div>
                )
            })}
            </>
        )
    }
    export default Catergory;