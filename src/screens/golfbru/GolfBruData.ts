import ImagePathsStrings from "../../strings/ImagePathsStrings"

export interface DataProps {
    heading: string,
    subtitle: string,
    image: any
}
const GolfBruData = [
    {
        heading: "Live Chat and Shank...",
        subtitle: "Your messages live here",
        image: ImagePathsStrings.golfbruImages.Keypoint1
    },
    {
        heading: "MIZUNO",
        subtitle: "Explore our class-leading golf clubs",
        image: ImagePathsStrings.golfbruImages.Keypoint2
    },
    {
        heading: "TAYLORMADE",
        subtitle: "We exist to create performance in golf.",
        image: ImagePathsStrings.golfbruImages.Keypoint3
    },
    {
        heading: "CALLAWAY",
        subtitle: "25% off all mens Callaway Putters",
        image: ImagePathsStrings.golfbruImages.Keypoint4
    },
    {
        heading: "PING",
        subtitle: "The worlds best Drivers",
        image: ImagePathsStrings.golfbruImages.Keypoint5
    },
]


export default GolfBruData