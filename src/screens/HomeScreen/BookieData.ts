import ImagePathsStrings from "../../strings/ImagePathsStrings"

export interface DataProps {
    heading: string,
    subtitle: string,
    image: any,
    carouselId: string
}

const BookieData = [
    {
        heading: "Live Chat and Bottie... ",
        subtitle: "Your messages live here",
        image: ImagePathsStrings.homeScreenImages.Keypoint1,
        carouselId: ""
    },
    {
        heading: "Yves Saint Laurent",
        subtitle: "Fall 20 Collection by Anthony Vaccarello",
        image: ImagePathsStrings.homeScreenImages.Keypoint2,
        carouselId: "23611701"
    },
    {
        heading: "CHANEL",
        subtitle: "Enter the world of CHANEL",
        image: ImagePathsStrings.homeScreenImages.Keypoint3,
        carouselId: "23611693"
    },
    {
        heading: "LE CREUSET",
        subtitle: "Make your table cheerful & colorful",
        image: ImagePathsStrings.homeScreenImages.Keypoint4,
        carouselId: "23611692"
    },
    {
        heading: "CHANEL",
        subtitle: "Enter the world of CHANEL",
        image: ImagePathsStrings.homeScreenImages.Keypoint5,
        carouselId: "23611691"
    },
]

export default BookieData
