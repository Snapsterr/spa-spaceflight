import { Card, CardContent, Skeleton } from "@mui/material"
import {
  skeletonCardActionsSx,
  skeletonCardBodyWrapperSx,
  skeletonCardDateSx,
  skeletonCardDescriptionSx,
  skeletonCardImgSx,
  skeletonCardItemSx,
  skeletonCardTitleSx,
} from "./SkeletonCardsStyle"

const SkeletonCard = () => {
  return (
    <Card sx={skeletonCardItemSx}>
      <Skeleton width={"100%"} sx={skeletonCardImgSx} />
      <CardContent sx={skeletonCardBodyWrapperSx}>
        <Skeleton width={"80%"} sx={skeletonCardDateSx} />
        <Skeleton width={"100%"} sx={skeletonCardTitleSx} />
        <Skeleton width={"100%"} sx={skeletonCardDescriptionSx} />

        <Skeleton width={"120px"} sx={skeletonCardActionsSx} />
      </CardContent>
    </Card>
  )
}

export default SkeletonCard
