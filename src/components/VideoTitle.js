const VideoTitle=(props)=>{
    const {title,overview}=props;
    return(
        <div className="w-screen aspect-video pt-[24%] px-12 absolute text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-5xl">{title}</h1>
            <p className="text-lg py-6 w-1/2">{overview}</p>
            <div>
                <button className="bg-gray-500 text-white text-lg bg-opacity-50 p-1 px-5 rounded-lg hover:bg-opacity-90">▶️ Play</button>
                <button className="mx-2 bg-gray-500 text-white text-lg bg-opacity-50 p-1 px-5 rounded-lg hover:bg-opacity-90"> ℹ️ More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;