import ShimmerCard from "./ShimmerCard"

const Shimmer = ()=>{
    return(
        <div className="shimmer-container">
            <div className="shimmer-search-filter-container">
                <div className="shimmer-search">
                    <div className="shimmer-input"></div>
                </div>
                <div className="shimmer-filter">
                    <div className="shimmer-filter-btn"></div>
                    <div className="shimmer-filter-btn"></div>
                </div>
            </div>
            <div className="shimmer-card-container">
                <ShimmerCard/>
                <ShimmerCard/>
                <ShimmerCard/>
                <ShimmerCard/>
                <ShimmerCard/>
                <ShimmerCard/>
                <ShimmerCard/>
                <ShimmerCard/>
            </div>
        </div>
    )
}

export default Shimmer;