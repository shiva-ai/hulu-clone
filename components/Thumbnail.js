import Image from "next/image"

function Thumbnail({result}) {

const BASE_URL = "https://image.tmdb.org/t/p/original/"

  return (
    <div className="group cursor-pointer p-2 sm:hover:scale-105 hover:z-50" >
        <Image layout="responsive" src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`
        }  height={1080} width={1920} />

        <div className="truncate max-w-md" >{result.overview}</div>

        <h2 className="mt-1 text-2xl text-white group-hover:font-bold" >{result.title || result.original_name}</h2>

    </div>
  )
}

export default Thumbnail