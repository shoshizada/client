
const comutestPerYear =260*2;
const litresPerKM=10/100;
const gasLitreCost=1.5;
const litreCosKm=litresPerKM*gasLitreCost;
const secondsPerDay=60*60*24


type DistanceProps={
    leg:google.maps.DirectionsLeg
}

const Distance=({leg}:DistanceProps)=>
{
    console.log(leg)
    return(
        <>
        </>
    )
}

export default Distance;