import React from 'react'
import ShopByDepartment from './shopByDepartment'
import ExploreOurExclusiveBrands from './ExploreOurExclusiveBrands.JSX'
import KeepShoppingForFauxFlorals from './KeepShoppingForFauxFlorals'
import SmallSpaceEntryWayFinds from './SmallSpaceEntryWayFinds'
import EntrywayEssentials from './EntrywayEssentials'
import ShopTheLook from './ShopTheLook'
import EasterPrepDone from './EasterPrepDone'
import UnwindWithoutOverspending from './UnwindWithoutOverspending'
import KeepShoppingForBathTowels from './KeepShoppingForBathTowels'
import HoursOnlyDealsOfTheDay from './HoursOnlyDealsOfTheDay'
import RecommendedForYou from './RecommendedForYou'
import DiningSaleUpto from './DiningSaleUpto'
import AllCategories from './AllCategories'
import Banner from '../Dashboard/Banner'
import { Flex } from '@chakra-ui/react'

export default function Main() {
  return (
    <Flex width={"92%"}  mx={"auto"} flexDirection={"column"}>
      <AllCategories/>
      <DiningSaleUpto/>
      <RecommendedForYou/>
      <HoursOnlyDealsOfTheDay/>
      <KeepShoppingForBathTowels/>
      <UnwindWithoutOverspending/>
      <EasterPrepDone/>
      <ShopTheLook/>
      <EntrywayEssentials/>
      <SmallSpaceEntryWayFinds/>
      <KeepShoppingForFauxFlorals/>
      <ExploreOurExclusiveBrands/>
      <ShopByDepartment/>
    </Flex>
  )
}
