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
        heading: "Handbag Heaven",
        subtitle: "Bags you need to buy",
        image: ImagePathsStrings.homeScreenImages.Keypoint2,
        carouselId: "23611701"
    },
    {
        heading: "Fashion Finds",
        subtitle: "Our latest fashion picks",
        image: ImagePathsStrings.homeScreenImages.Keypoint3,
        carouselId: "23611693"
    },
    {
        heading: "Footwear Favourites",
        subtitle: "Boots, heels, sneakers & more",
        image: ImagePathsStrings.homeScreenImages.Keypoint4,
        carouselId: "23611692"
    },
    {
        heading: "Home Living",
        subtitle: "Furniture must haves",
        image: ImagePathsStrings.homeScreenImages.Keypoint5,
        carouselId: "23611691"
    },
]

export default BookieData
